import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = { title: 'Image Compressor – Compress JPG, PNG & WebP Online Free', description: 'Compress images online free without losing quality. Reduce JPG, PNG, WebP file size in browser — no upload, no signup. Batch compress and rename before download.' };
export default function ImageCompressorPage(): React.ReactElement { return (
      <>
            <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image Compressor</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress JPEG, PNG, and WebP files client-side without uploading to a server.</p>
      </div>
      <ImageCompressor />
      <ToolInfoSection
        howToSteps={[
          { step: 'Upload images', description: 'Drag and drop or click to upload your JPEG, PNG, or WebP images.' },
          { step: 'Select compression level', description: 'Adjust the quality slider to find your preferred balance between file size and image clarity.' },
          { step: 'Download', description: "Click 'Compress' and download the optimized files either individually or together." }
        ]}
        useCases={[
          'Optimizing website images to improve page load speed and Core Web Vitals.',
          'Reducing email attachment sizes to bypass file transfer limits.',
          'Compressing photos for mobile storage or social media uploads.'
        ]}
        privacyNote="All image compression runs entirely client-side using your browser's Canvas API. Your pictures are never uploaded to any server."
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG or WebP. Batch convert, resize, adjust quality and rename.' },
          { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Resize images with custom dimensions or presets.' },
          { href: '/tools/image-to-pdf', name: 'Image to PDF', description: 'Convert multiple images to a single PDF.' }
        ]}
      />
    </>
    ); }
