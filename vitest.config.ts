import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(process.cwd(), "src"),
      "@application": path.resolve(process.cwd(), "src/application"),
      "@domain": path.resolve(process.cwd(), "src/domain"),
      "@infrastructure": path.resolve(process.cwd(), "src/infrastructure"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@config": path.resolve(process.cwd(), "src/config"),
    },
  },
  test: {
    include: ["tests/**/*.spec.ts", "tests/**/*.test.ts"],
    exclude: ["node_modules", "dist", ".git"],
    environment: "node",
    globals: true,
    reporters: "default",
    coverage: {
      enabled: false,
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
