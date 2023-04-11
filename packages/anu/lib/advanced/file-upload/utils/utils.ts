import { getColorInRGBA } from 'anu/common/utils';
import Compressor from 'compressorjs';
import { DripsyFinalTheme } from 'dripsy';
import { Accept } from 'react-dropzone';

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

// export const getImageAttachment = (uri_attachment: Blob, mimetype_attachment: string) => {
//   return new Promise((RESOLVE, REJECT) => {
//     // Fetch attachment
//     RNFetchBlob.fetch('GET',).then((response) => {
//       const base64String = response.data;
//       const imageBase64 = 'data:' + mimetype_attachment + ';base64,' + base64String;
//       // Return base64 image
//       RESOLVE(imageBase64);
//     });
//   }).catch((error) => {
//     // error handling
//     console.log('Error:', error);
//   });
// };

/**
 *
 * @param file File object
 * @returns base64 string of the file, that may be used to display the file if it is an image
 */
export const getBase64 = (file: File | Blob) => {
  const base64 = new Promise((resolve: (value: string) => void, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file, 'file');
    reader.addEventListener('load', function () {
      if (typeof reader.result === 'string') resolve(reader.result);
      else reject(new Error('error converting file to base64'));
    });
    reader.addEventListener('error', (error) => {
      console.log(error);
      reject(error);
    });
  });

  return base64;
};

export const getDropZoneStyles = (theme: DripsyFinalTheme) => {
  const dropZoneStyle = {
    backgroundColor: getColorInRGBA(theme.colors.$surfaceVariant, 70),
    borderColor: getColorInRGBA(theme.colors.$outline, 70),
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    width: 360,
  } as const;

  const divStyle = {
    height: '100%',
    width: '100%',
  };

  const childrenContainerStyle = {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  } as const;
  const buttonContainerStyle = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: 4,
  } as const;

  return { dropZoneStyle, divStyle, childrenContainerStyle, buttonContainerStyle };
};

export const getUploadListStyles = (theme: DripsyFinalTheme, single?: boolean, isHorizontal?: boolean) => {
  const styles = {
    listItem: {
      width: '100%',
      minHeight: 48,
      marginVertical: 5,
    },
    container: {
      marginTop: 15,
      marginLeft: single ? 0 : -16,
      width: '100%',
      flexDirection: isHorizontal ? ('row' as const) : ('column' as const),
    },
    fileIcon: {
      margin: 16,
      color: theme.colors.$onSurfaceVariant,
    },
    dragIcon: {
      color: getColorInRGBA(theme.colors.$surfaceVariant, 75),
    },
    dragIconContainer: {
      width: 16,
      height: 16,
    },
    deleteIcon: {
      margin: 16,
      color: theme.colors.$error,
    },
    carouselDeleteIcon: {
      color: theme.colors.$surface,
    },
    fileName: {
      fontSize: theme.fontSizes[7],
      lineHeight: theme.lineHeights[7],
      flexGrow: 1,
    },
    listItemContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
    },
    errorMessage: {
      fontSize: theme.fontSizes[9],
      lineHeight: theme.lineHeights[9],
      flexGrow: 1,
      marginTop: 5,
      marginHorizontal: 16,
      color: theme.colors.$error,
    },
    listPreviewImage: {
      height: 48,
      width: 48,
      borderRadius: 4,
      marginRight: 16,
    },
    carouselItem: {
      margin: 16,
    },
    carouselListItem: {
      height: 120,
      width: 120,
      borderRadius: 4,
      position: 'relative' as const,
    },
    carouselDragIconContainer: {
      position: 'absolute' as const,
      top: 8,
      left: 8,
      borderRadius: 100,
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 10),
    },
    carouselDeleteButton: {
      position: 'absolute' as const,
      top: 0,
      right: 0,
      '@hover': {
        backgroundColor: getColorInRGBA(theme.colors.$onSurface, 10),
      },
    },
    carouselImage: {
      height: 120,
      width: 120,
      borderRadius: 4,
    },
  };

  return styles;
};

export const getFileTypes = (accept?: Accept) => {
  if (accept === undefined) return;

  let types: string[] = [];

  for (const key of Object.keys(accept)) {
    types = [...types, ...accept[key]];
  }

  return types;
};
