import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = { title: 'Image Compressor Online Free – Compress JPG PNG WebP Without Quality Loss', description: 'Compress images online free without losing quality. Reduce JPG, PNG, WebP file size in browser — no upload, no signup. Batch compress and rename before download.' };
export default function ImageCompressorPage(): React.ReactElement { return <ImageCompressor />; }
