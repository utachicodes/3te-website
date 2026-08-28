// One-off image compression/restore for public/images.
// Pulls intact project PNGs from git history (commit 39ec600) since
// the working-tree copies are corrupted (UTF-16LE-reencoded), and
// re-encodes everything in place at sizes appropriate for the layout.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, statSync } from "node:fs";
import sharp from "sharp";

const RESTORE_COMMIT = "39ec600";

const PROJECT_FILES = [
  "project-1.png",
  "project-2.png",
  "project-3.png",
  "project-4.png",
  "project-5.png",
  "project-6.png",
  "project-9.png",
];

const SITE_FILES = [
  "site-1.jpg",
  "site-2.jpg",
  "site-3.jpg",
  "site-4.jpg",
  "site-5.jpg",
  "site-6.jpg",
];

const LOGO_FILE = "logo.png";

function bytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

// execFileSync avoids cmd.exe shell wrapping that ENOBUFS on Windows
// when git output is large.
function restoreFromGit(path, commit) {
  return execFileSync("git", ["show", `${commit}:${path}`], {
    stdio: ["ignore", "pipe", "inherit"],
    maxBuffer: 200 * 1024 * 1024,
  });
}

async function processProjects() {
  console.log("\n=== project-*.png (restore from git + recompress) ===");
  for (const name of PROJECT_FILES) {
    const path = `public/images/${name}`;
    const before = statSync(path).size;
    const raw = restoreFromGit(path, RESTORE_COMMIT);

    const sig = raw.subarray(0, 8);
    const isPng =
      sig[0] === 0x89 && sig[1] === 0x50 && sig[2] === 0x4e && sig[3] === 0x47 &&
      sig[4] === 0x0d && sig[5] === 0x0a && sig[6] === 0x1a && sig[7] === 0x0a;
    if (!isPng) {
      throw new Error(`Restored ${name} does not have PNG signature; aborting`);
    }

    const out = await sharp(raw)
      .resize({ width: 1600, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 82, palette: true, effort: 10 })
      .toBuffer();

    writeFileSync(path, out);
    const after = out.length;
    const ratio = ((1 - after / before) * 100).toFixed(1);
    console.log(`  ${name.padEnd(18)} ${bytes(before).padStart(8)} -> ${bytes(after).padStart(8)}  (-${ratio}%)`);
  }
}

async function processSites() {
  console.log("\n=== site-*.jpg (mislabeled PNG -> real JPEG) ===");
  for (const name of SITE_FILES) {
    const path = `public/images/${name}`;
    const before = statSync(path).size;
    const raw = readFileSync(path);

    const out = await sharp(raw)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();

    writeFileSync(path, out);
    const after = out.length;
    const ratio = ((1 - after / before) * 100).toFixed(1);
    console.log(`  ${name.padEnd(18)} ${bytes(before).padStart(8)} -> ${bytes(after).padStart(8)}  (-${ratio}%)`);
  }
}

async function processLogo() {
  console.log("\n=== logo.png (recompress) ===");
  const path = `public/images/${LOGO_FILE}`;
  const before = statSync(path).size;
  const raw = readFileSync(path);

  const out = await sharp(raw)
    .resize({ width: 400, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, effort: 10 })
    .toBuffer();

  writeFileSync(path, out);
  const after = out.length;
  const ratio = ((1 - after / before) * 100).toFixed(1);
  console.log(`  ${LOGO_FILE.padEnd(18)} ${bytes(before).padStart(8)} -> ${bytes(after).padStart(8)}  (-${ratio}%)`);
}

async function main() {
  await processProjects();
  await processSites();
  await processLogo();

  console.log("\nDone. Run `ls -la public/images/` to confirm sizes.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
