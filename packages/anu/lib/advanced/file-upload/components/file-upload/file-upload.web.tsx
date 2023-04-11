/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { CommonButtonProps, Container, ExtendedFAB, FAB, IconButton } from 'anu/lib/primitives';
import { RegularButton } from 'anu/lib/primitives/button/components/regular';
import * as FilePicker from 'expo-document-picker';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';

import { FileUploadProps, FileUploadReferenceProps } from '../../types';
import { compressFile, getFileUploadStyle } from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

/**
 * Function to handle file upload
 *
 * @param props - props of the file upload component
 * @param updateFiles - function to update the uploaded files to existing files list
 */
const handleFileUpload = async (props: FileUploadProps, updateFiles: { (files: Blob[]): void }) => {
  const result = await FilePicker.getDocumentAsync({
    multiple: props.multiple,
    type: props.fileType ?? props.variant === 'image' ? 'image/*' : undefined,
    copyToCacheDirectory: props.copyToCacheDirectory,
  });

  if (result.type === 'success' && result.output) {
    if (props.variant === 'image' && props.optimization) {
      const compressedImages = [];
      for (const file of result.output) {
        const compressedImage = await compressFile(file, props.optimizationConfig);
        compressedImages.push(compressedImage);
      }
      updateFiles(compressedImages);
    } else {
      updateFiles([...result.output]);
    }
  }
};

/**
 * File Upload Component
 */
const FileUpload = forwardRef<FileUploadReferenceProps, FileUploadProps>((props, reference) => {
  //@ts-expect-error
  const finalProps: FileUploadProps = { ...defaultProps, ...props };
  const [isUploadingState, setIsUploadingState] = useState(false);
  const [files, setFiles] = useState<Blob[]>([]);

  const isUploading = useCallback(() => isUploadingState, [isUploadingState]);

  useImperativeHandle(reference, () => ({ isUploading, files }), [isUploading, files]);

  const handleUpload = useMemo(() => handleFileUpload, []);

  const defaultContainerStyle = getFileUploadStyle();

  const updateFiles = (resultFiles: Blob[]) => {
    if (finalProps.multiple) {
      const allFiles = [...files, ...resultFiles];
      setFiles(allFiles);
      if (finalProps.onChange) finalProps.onChange(allFiles);
    } else {
      setFiles(resultFiles);
      if (finalProps.onChange) finalProps.onChange(resultFiles[0]);
    }
  };

  const deleteFile = (index: number) => {
    const array = [...files];
    array.splice(index, 1);
    setFiles(array);
    if (finalProps.onChange) finalProps.onChange(array.length > 0 ? array : null);
  };

  const onSortHandler = (from: number, to: number) => {
    const array = [...files];
    const file = array[from];
    if (file === undefined) return;
    array.splice(from, 1);
    array.splice(to, 0, file);
    setFiles(array);

    if (finalProps.onChange) finalProps.onChange(array.length > 0 ? array : null);
  };

  const renderButton = (buttonProps: FileUploadProps) => {
    let propsForButton: CommonButtonProps;
    if (buttonProps.variant === 'image') {
      const {
        onChange,
        variant,
        multiple,
        sortable,
        optimization,

        previewStyle,
        ...otherButtonProps
      } = buttonProps;

      propsForButton = otherButtonProps;
    } else {
      const {
        onChange,
        variant,
        multiple,
        sortable,

        fileType,
        copyToCacheDirectory,

        ...otherButtonProps
      } = buttonProps;
      propsForButton = otherButtonProps;
    }

    switch (propsForButton.category) {
      case 'regular': {
        return (
          <RegularButton
            {...propsForButton}
            onPress={async (event) => {
              if (propsForButton.onPress) propsForButton.onPress(event);
              setIsUploadingState(true);
              await handleUpload(finalProps, updateFiles);
              setIsUploadingState(false);
            }}
          />
        );
      }
      case 'icon-button': {
        return (
          <IconButton
            {...propsForButton}
            onPress={async (event) => {
              if (propsForButton.onPress) propsForButton.onPress(event);
              setIsUploadingState(true);
              await handleUpload(finalProps, updateFiles);
              setIsUploadingState(false);
            }}
          />
        );
      }
      case 'floating-action': {
        return (
          <FAB
            {...propsForButton}
            onPress={async (event) => {
              if (propsForButton.onPress) propsForButton.onPress(event);
              setIsUploadingState(true);
              await handleUpload(finalProps, updateFiles);
              setIsUploadingState(false);
            }}
          />
        );
      }
      case 'extended-floating-action': {
        return (
          <ExtendedFAB
            {...propsForButton}
            onPress={async (event) => {
              if (propsForButton.onPress) propsForButton.onPress(event);
              setIsUploadingState(true);
              await handleUpload(finalProps, updateFiles);
              setIsUploadingState(false);
            }}
          />
        );
      }
      default: {
        {
          return <></>;
        }
      }
    }
  };

  return (
    <Container disableGutters style={getCombinedStylesForView(defaultContainerStyle, finalProps.style)}>
      {renderButton(finalProps)}
      <Container disableGutters>
        <UploadList
          errors={finalProps.errors}
          sortable={finalProps.sortable}
          data={[...files]}
          onSort={onSortHandler}
          deleteData={deleteFile}
          variant={finalProps.variant}
          previewStyle={finalProps.variant === 'image' ? finalProps.previewStyle : undefined}
        />
      </Container>
    </Container>
  );
});

export default FileUpload;
