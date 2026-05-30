const { copyFileSync, existsSync } = require("node:fs");
const { join } = require("node:path");

const indexPath = join("dist", "index.html");
const fallbackPath = join("dist", "404.html");

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html was not found. Run the Vite build first.");
}

copyFileSync(indexPath, fallbackPath);
