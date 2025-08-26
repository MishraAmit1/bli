import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const __dirname = process.cwd();
const distDir = path.resolve(__dirname, "dist");
const port = 5050;

// Fixed routes - corrected the faqs route
const routes = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/resources",
  "/contact",
  "/services/full-truckload",
  "/services/part-load",
  "/services/3pl",
  "/services/warehousing",
  "/services/local-dispatch",
  "/services/rail-freight",
  "/services/air-cargo",
  "/services/real-time-support",
  "/resources/blogs",
  "/resources/faqs", // Fixed - added missing /
  "/resources/downloads",
  "/resources/reports",
  "/privacy-policy",
  "/terms-of-service",
];

console.log("🚀 Starting local server...");

const isWindows = process.platform === "win32";
const serveCommand = isWindows ? "npx.cmd" : "npx";

const serveProcess = spawn(serveCommand, ["serve", "-s", "dist", "-l", port], {
  stdio: "pipe",
  shell: isWindows,
});

serveProcess.stdout.on("data", (data) => {
  console.log(`Server: ${data}`);
});

serveProcess.stderr.on("data", (data) => {
  console.log(`Server Error: ${data}`);
});

console.log("⏳ Waiting for server to start...");
await new Promise((resolve) => setTimeout(resolve, 5000));

console.log("✅ Server should be running. Beginning pre-rendering...\n");

let browser;
let page;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-web-security",
      "--disable-features=VizDisplayCompositor",
    ],
  });

  page = await browser.newPage();

  // Disable images/fonts to speed up
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (["image", "font", "media"].includes(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    const url = `http://localhost:${port}${route}`;
    console.log(`📄 Pre-rendering: ${route}`);

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for React Helmet meta tags to be injected
      await page.waitForFunction(
        () => {
          const canonical = document.querySelector('link[rel="canonical"]');
          const title = document.title;
          const description = document.querySelector(
            'meta[name="description"]'
          );
          const hasContent = document.querySelector(
            'h1, main, [role="main"], .container'
          );

          return (
            canonical &&
            title &&
            title !== "BLI - Bansal Logistics of India" &&
            description &&
            hasContent
          );
        },
        { timeout: 15000 }
      );

      // Use setTimeout instead of page.waitForTimeout (FIXED)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const html = await page.content();

      // Verify that we got the right content
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
      const canonicalMatch = html.match(
        /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/
      );

      if (titleMatch && canonicalMatch) {
        console.log(`   📝 Title: ${titleMatch[1]}`);
        console.log(`   🔗 Canonical: ${canonicalMatch[1]}`);
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
      console.log(`✅ Saved: ${outputPath}\n`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);

      // Try a fallback approach for failed routes
      try {
        console.log(`   🔄 Trying fallback approach for ${route}...`);
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });

        // Wait a bit for React to render
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const html = await page.content();

        // Check if we got some content (not just empty page)
        if (
          html.includes("<h1") ||
          html.includes("main") ||
          html.includes("container")
        ) {
          const outputPath =
            route === "/"
              ? path.join(distDir, "index.html")
              : path.join(distDir, route, "index.html");

          await fs.mkdir(path.dirname(outputPath), { recursive: true });
          await fs.writeFile(outputPath, html, "utf8");
          console.log(`   ✅ Saved with fallback: ${outputPath}\n`);
          successCount++;
        } else {
          console.log(`   ⚠️  Route ${route} failed completely\n`);
          errorCount++;
        }
      } catch (fallbackError) {
        console.log(`   ⚠️  Fallback also failed for ${route}\n`);
        errorCount++;
      }
    }
  }

  console.log("🎉 Pre-rendering complete!");
  console.log(`✅ Success: ${successCount} pages`);
  console.log(`❌ Errors: ${errorCount} pages`);

  if (successCount > 0) {
    console.log("\n🔍 To verify, check:");
    console.log("   - dist\\about\\index.html");
    console.log("   - dist\\services\\index.html");
    console.log("   - dist\\services\\full-truckload\\index.html");
    console.log("   - dist\\resources\\blogs\\index.html");
    console.log("\n📋 Next steps:");
    console.log("   1. Check files were created");
    console.log("   2. Open any file in browser and View Source");
    console.log("   3. Look for unique <title> and <link rel='canonical'>");
    console.log("   4. If successful, upload dist/ folder to Hostinger");
  }
} catch (error) {
  console.error("❌ Fatal error:", error.message);
} finally {
  if (browser) {
    await browser.close();
  }
  if (serveProcess) {
    serveProcess.kill();
  }
}
