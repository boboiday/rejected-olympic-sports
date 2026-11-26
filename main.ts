// Rejected Olympic Sports — Synchronised Napping.
// Two athletes, one anthem, and not a single conscious thought between them.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Synchronised Napping: two athletes must fall asleep at the same instant, snore in perfect harmony with the national anthem, and wake up before the judges do — '10.0, and he's still dreaming.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(LINE);
