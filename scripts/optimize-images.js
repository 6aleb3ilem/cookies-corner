// Convert all photo PNGs in public/images/{hero,products,stories} to WebP at
// reasonable dimensions and quality, then delete the originals. Run with:
//   node scripts/optimize-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public', 'images');
const TARGETS = [
  { dir: 'hero', maxWidth: 1200, quality: 78 },
  { dir: 'products', maxWidth: 900, quality: 78 },
  { dir: 'stories', maxWidth: 1080, quality: 76 },
];

async function processFile(file, opts) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const out = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  await sharp(file)
    .resize({ width: opts.maxWidth, withoutEnlargement: true })
    .webp({ quality: opts.quality, effort: 6 })
    .toFile(out);
  if (out !== file) fs.unlinkSync(file);
  const size = fs.statSync(out).size;
  console.log(`${path.relative(PUBLIC, out)} → ${(size / 1024).toFixed(1)} KB`);
}

async function walk(dir, opts) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, opts);
    else await processFile(full, opts);
  }
}

(async () => {
  for (const t of TARGETS) {
    const root = path.join(PUBLIC, t.dir);
    if (!fs.existsSync(root)) continue;
    await walk(root, t);
  }
})();
