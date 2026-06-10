import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = { title: 'Image Compressor', description: 'Compress JPEG, PNG, and WebP images locally in your browser.' };
export default function ImageCompressorPage(): React.ReactElement { return <ImageCompressor />; }
