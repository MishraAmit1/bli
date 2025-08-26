import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  
  build: {
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          features: ['./src/components/Features'],
          home: ['./src/pages/Index'],
          services: ['./src/pages/Services'],
          airCargoServices: ['./src/pages/AirCargoServices'],
          LocalRegionalDispatch: ['./src/pages/LocalRegionalDispatch'],
          RailFreightSolutions: ['./src/pages/RailFreightSolutions'],
          WarehousingDistribution: ['./src/pages/WarehousingDistribution'],
          blog: ['./src/pages/Blogs'],
          blogPost: ['./src/pages/BlogPost'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
