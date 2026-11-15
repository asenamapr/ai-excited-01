// ai-excited-01 — entry runner.
//
// The image itself (entry.png, in this repo) is the entry. This program's
// only job is to place an exact copy of it where the competition harness
// looks for it, and to refuse to claim success unless the copy matches
// the original byte for byte.
//
// A size check alone can be fooled by a same-length corruption, so the
// copy is verified with a SHA-256 digest of both files before we report
// success. If either check fails, the program exits with an error and
// the bad copy is left in place for inspection instead of being silently
// passed off as the entry.

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function sha256(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const source = new URL("./entry.png", import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });

const originalSize = statSync(source).size;
copyFileSync(source, target);
const copiedSize = statSync(target).size;

if (copiedSize !== originalSize) {
  throw new Error(
    `copy mismatch: entry.png is ${originalSize} bytes, ` +
      `but the copy at ${target} is ${copiedSize} bytes — ` +
      `the output is incomplete, not the entry`,
  );
}

const sourceHash = sha256(source);
const targetHash = sha256(target);
if (sourceHash !== targetHash) {
  throw new Error(
    `copy corrupted: ${target} has sha256 ${targetHash}, ` +
      `expected ${sourceHash} — refusing to report success`,
  );
}

console.log(`copied entry.png (${originalSize} bytes, sha256 ${sourceHash}) -> ${target}`);
