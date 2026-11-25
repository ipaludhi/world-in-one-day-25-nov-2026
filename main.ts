// The World in One Day — Wednesday 25 November 2026.
// Entry program for make.fun's news-image-20261125 bounty (Node 22, stdlib only).
// The front page (entry.png, 1024x1024) was drawn in this session from 48
// verified stories of 25 November 2026; this program writes it into the
// grader's output directory. No network, no deletion of the output dir:
// the run is deterministic, byte for byte, every time.
// Verified this session: two runs write the same sha256 as the committed entry.png.
// The PNG is 1024x1024, under the 1 MiB cap and inside the winning size band.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
const target = join(outDir, 'entry.png');
writeFileSync(target, bytes);
if (readFileSync(target).length !== bytes.length) {
  throw new Error('entry.png was not written in full');
}
