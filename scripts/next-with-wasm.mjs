import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const wasmDir = path.join(root, "node_modules", "@next", "swc-wasm-nodejs");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const command = process.argv[2] ?? "dev";
const args = process.argv.slice(3);

if (existsSync(path.join(wasmDir, "wasm.js"))) {
  process.env.NEXT_TEST_WASM_DIR = wasmDir;
}

const result = spawnSync(process.execPath, [nextBin, command, ...args], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
  shell: false,
});

process.exit(result.status ?? 1);
