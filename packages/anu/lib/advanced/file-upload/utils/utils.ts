import { getColorInRGBA } from 'anu/common/utils';
import Compressor from 'compressorjs';
import { DripsyFinalTheme } from 'dripsy';
import { Accept } from 'react-dropzone';

import { Config } from '../types';

const KILO_BYTE = 1000; // in bytes

export const compressFile = async (file: File, config?: Config): Promise<File | Blob> => {
  const { quality, maxHeight, maxWidth, convertSize, convertTypes } = {
    quality: 0.6,
    convertSize: 1 * KILO_BYTE, // in bytes
    convertTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/jpg', 'image/heic'],

    maxWidth: 1400,
    maxHeight: 1024,
    ...config,
  };

  return file.type.includes('image') && convertTypes?.includes(file.type)
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

export const convertToFile = (file: File | Blob, fileName: string) => {
  return new File([file], fileName);
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
    flex: 1,
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

export const getUploadListStyles = (
  theme: DripsyFinalTheme,
  itemHeight?: number,
  itemWidth?: number,
  isHorizontal?: boolean,
) => {
  const styles = {
    listItem: {
      width: itemWidth ?? 250,
      marginVertical: 5,
      ...(itemHeight ? { height: itemHeight } : { minHeight: 48 }),
    },
    container: {
      marginTop: 15,
      flex: 1,
      flexDirection: isHorizontal ? ('row' as const) : ('column' as const),
      ...(isHorizontal ? { maxWidth: 500 } : { maxHeight: 300 }),
    },
    fileIcon: {
      margin: 16,
      color: theme.colors.$onSurfaceVariant,
    },
    dragIcon: {
      color: getColorInRGBA(theme.colors.$surfaceVariant, 75),
    },
    dragIconContainer: {
      height: 16,
    },
    deleteIconButton: {
      marginLeft: 8,
    },
    deleteIcon: {
      color: theme.colors.$error,
    },
    carouselDeleteIcon: {
      color: theme.colors.$surface,
    },
    fileName: {
      fontSize: theme.fontSizes[7],
      lineHeight: theme.lineHeights[7],
      flexGrow: 1,
      flexShrink: 1,
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
      height: itemHeight ?? 120,
      width: itemWidth ?? 120,
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

export const getFileTypes = (accept?: Accept, variant?: 'image' | 'file') => {
  if (accept === undefined) return variant === 'image' ? ['image/*'] : undefined;

  let types: string[] = [];

  for (const key of Object.keys(accept)) {
    types = [...types, ...accept[key]!];
  }

  return types;
};

export const getFileUploadStyle = () => {
  const style = {
    width: '100%',
    flex: 1,
  } as const;
  return style;
};

export const getErrorMessageStyle = (theme: DripsyFinalTheme) => {
  const errorMessageStyle = {
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
    flexGrow: 1,
    marginTop: 5,
    marginHorizontal: 16,
    color: theme.colors.$error,
  };

  return errorMessageStyle;
};
