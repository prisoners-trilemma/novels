import { useState, useEffect } from 'react';
import pako from 'pako';

const calculateShift = (fileName: string): number => {
  const firstChar = fileName.charAt(0);
  const unicodeValue = firstChar.charCodeAt(0);
  const shiftValue = unicodeValue % 10;
  return shiftValue;
};

const reverseCaesarCipher = (data: Uint8Array, shift: number): Uint8Array => {
  return data.map((byte) => (byte - shift + 256) % 256);
};

export const useAssetLoader = (fileName: string, fileType: 'images' | 'music', dataFile: string) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const response = await fetch(dataFile);
        const compressedData = await response.arrayBuffer();

        const decompressedData = pako.ungzip(new Uint8Array(compressedData), { to: 'string' });
        const assetsData = JSON.parse(decompressedData);

        const binaryData = assetsData[fileType][fileName];
        if (!binaryData) {
          throw new Error(`File not found: ${fileName}`);
        }

        const uint8Array = new Uint8Array(binaryData);

        const shift = calculateShift(fileName);
        const originalData = reverseCaesarCipher(uint8Array, shift);

        const blob = new Blob([originalData], {
          type: fileType === 'images' ? 'image/png' : 'audio/mpeg',
        });
        const fileUrl = URL.createObjectURL(blob);
        setFileUrl(fileUrl);
      } catch (err) {
        let message = 'Unknown Error';
        if (err instanceof Error) message = err.message;
        else message = String(err);
        setError(message);
      }
    };

    if (fileName && fileType) {
      loadAssets();
    }
  }, [dataFile, fileName, fileType]);

  return { fileUrl, error };
};
