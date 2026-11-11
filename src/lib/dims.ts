// Reads an image's width/height ratio from /public at build time, so rows of
// photos can share a height without cropping anything.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { imageSize } from 'image-size';

const cache = new Map<string, number>();
export function ratio(src: string, fallback = 16 / 9): number {
  if (!src || /\.(mp4|webm|mov)$/i.test(src)) return fallback;
  if (cache.has(src)) return cache.get(src)!;
  try {
    const { width, height } = imageSize(readFileSync(join(process.cwd(), 'public', src)));
    const r = width && height ? width / height : fallback;
    cache.set(src, r);
    return r;
  } catch {
    return fallback;
  }
}
