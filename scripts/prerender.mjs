// prerender.mjs

import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const __dirname = process.cwd();
const distDir = path.resolve(__dirname, "dist");
const port = 5050;

const routes = [
  "/",
  "/about/",
  "/services/",
  "/industries/",
  "/resources/",
  "/contact/",
  "/services/full-truckload/",
  "/services/part-load/",
  "/services/part-load-vapi/",
  "/services/3pl/",
  "/services/warehousing/",
  "/services/local-dispatch/",
  "/services/rail-freight/",
  "/services/air-cargo/",
  "/services/real-time-support/",
  "/resources/blogs/",
  "/resources/faqs/",
  "/resources/downloads/",
  "/resources/reports/",
  "/privacy-policy/",
  "/terms-of-service/",
];

console.log("🚀 Starting local server...");

const isWindows = process.platform === "win32";
const serveCommand = isWindows ? "npx.cmd" : "npx";

const serveProcess = spawn(
  serveCommand,
  ["serve", "-s", "dist", "-l", port, "--single"],
  {
    stdio: "pipe",
    shell: isWindows,
  }
);

console.log("⏳ Waiting for server to start...");
await new Promise((resolve) => setTimeout(resolve, 5000));

console.log("✅ Server should be running. Beginning pre-rendering...\n");

let browser;
let successCount = 0;
let errorCount = 0;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  // Process each route
  for (const route of routes) {
    console.log(`📄 Pre-rendering: ${route}`);

    // Create a new page for each route (important!)
    const page = await browser.newPage();

    try {
      // Set viewport
      await page.setViewport({ width: 1920, height: 1080 });

      // Disable images and fonts to speed up
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const resourceType = req.resourceType();
        const blockedTypes = ["image", "media", "font", "stylesheet"];

        if (blockedTypes.includes(resourceType)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      // Navigate directly to the route
      const url = `http://localhost:${port}${route}`;
      await page.goto(url, {
        waitUntil: ["networkidle0", "domcontentloaded"],
        timeout: 30000,
      });

      // Add this new section to properly wait for title updates
      try {
        // Wait for React Helmet to update the title
        await page.waitForFunction(
          () => {
            const title = document.title;
            return (
              title &&
              title !==
                "BLI - Bansal Logistics of India | Trusted Partner 25+ Years"
            );
          },
          { timeout: 5000 }
        );

        // Get the updated title
        const pageTitle = await page.title();
        console.log(`   🔍 Current title: ${pageTitle}`);
      } catch (e) {
        console.warn(`   ⚠️ Title update timeout for ${route}`);
      }

      // Get the final HTML
      const html = await page.content();

      // Log what we captured
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
      if (titleMatch) {
        console.log(`   📝 Title: ${titleMatch[1]}`);
      }

      // Create output path
      const outputPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route, "index.html");

      // Create directory if needed
      await fs.mkdir(path.dirname(outputPath), { recursive: true });

      // Write the pre-rendered HTML
      await fs.writeFile(outputPath, html, "utf8");
      console.log(`   ✅ Saved: ${outputPath}\n`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);
      errorCount++;
    } finally {
      await page.close();
    }
  }

  console.log("🎉 Pre-rendering complete!");
  console.log(`✅ Success: ${successCount} pages`);
  console.log(`❌ Errors: ${errorCount} pages`);
} catch (error) {
  console.error("❌ Fatal error:", error);
} finally {
  if (browser) {
    await browser.close();
  }
  if (serveProcess) {
    serveProcess.kill();
  }
}
