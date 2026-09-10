import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "slate.css");
const out = join(root, "slate.min.css");

const css = readFileSync(source, "utf8");

// Minimal, dependency-free minifier: strip comments and collapse whitespace.
const min = css
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,>])\s*/g, "$1")
  .trim();

writeFileSync(out, min + "\n");
console.log(`slate.min.css written (${Buffer.byteLength(min)} bytes)`);
