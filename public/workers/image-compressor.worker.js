/* Image Compressor Web Worker
   Runs entirely off the main thread via OffscreenCanvas.
   Supports JPEG, PNG (stays PNG to preserve transparency), WebP.
*/
self.onmessage = async (event) => {
  try {
    const { file, quality } = event.data;

    if (!self.createImageBitmap) {
      self.postMessage({ error: 'createImageBitmap is not supported in this browser.' });
      return;
    }

    const bitmap = await createImageBitmap(file);
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx    = canvas.getContext('2d');

    if (!ctx) {
      self.postMessage({ error: 'Could not get 2D canvas context.' });
      return;
    }

    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();

    // Preserve PNG format (transparency); convert JPEG/WebP with quality setting
    const outputType = file.type === 'image/png' ? 'image/png' : (file.type === 'image/webp' ? 'image/webp' : 'image/jpeg');
    // PNG quality param is ignored by browsers but doesn't hurt
    const blob = await canvas.convertToBlob({ type: outputType, quality });

    self.postMessage({
      blob,
      width:  bitmap.width,
      height: bitmap.height,
      size:   blob.size,
      type:   outputType,
    });
  } catch (err) {
    self.postMessage({ error: err instanceof Error ? err.message : 'Unable to compress image.' });
  }
};
