import Compressor from 'compressorjs';

import { Config } from '../types';

const KILO_BYTE = 1000; // in bytes

export const compressFile = async (file: File | Blob, config?: Config): Promise<File | Blob> => {
  const { quality, maxHeight, maxWidth, convertSize, convertTypes } = {
    quality: 0.6,
    convertSize: 1 * KILO_BYTE, // in bytes
    convertTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/jpg'],

    maxWidth: 1400,
    maxHeight: 1024,
    ...config,
  };

  return file.type.includes('image')
    ? new Promise((resolve, reject) => {
        new Compressor(file, {
          quality,
          maxHeight,
          maxWidth,
          convertSize,
          convertTypes,
          success: resolve,
          error: reject,
        });
      })
    : file;
};

/**
 *
 * @param file File object
 * @returns base64 string of the file, that may be used to display the file if it is an image
 */
export const getBase64 = async (file: File | Blob) => {
  return new Promise((resolve: (value: string) => void, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', function () {
      if (typeof reader.result === 'string') resolve(reader.result);
      else reject(new Error('error converting file to base64'));
    });
    reader.addEventListener('error', (error) => {
      console.log(error);
      reject(error);
    });
  });
};
