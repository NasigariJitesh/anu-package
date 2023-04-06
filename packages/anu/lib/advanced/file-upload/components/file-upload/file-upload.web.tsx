/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import { CommonButtonProps, Container, ExtendedFAB, FAB, IconButton } from 'anu/lib/primitives';
import { RegularButton } from 'anu/lib/primitives/button/components/regular';
import * as FilePicker from 'expo-document-picker';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';

import { FileUploadProps, FileUploadReferenceProps } from '../../types';
import { compressFile } from '../../utils';
import UploadList from '../upload-list/draggable-upload-list';

const handleFileUpload = async (props: FileUploadProps, updateFiles: { (files: Blob[]): void }) => {
  const result = await FilePicker.getDocumentAsync({
    multiple: props.multiple,
    type: props.fileType,
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
      if (props.onUpload) props.onUpload(compressedImages);
    } else {
      updateFiles([...result.output]);
      if (props.onUpload) props.onUpload([...result.output]);
    }
  } else updateFiles([]);
};

const FileUpload = forwardRef<FileUploadReferenceProps, FileUploadProps>((props, reference) => {
  const [isUploadingState, setIsUploadingState] = useState(false);
  const [files, setFiles] = useState<Blob[]>([]);

  const isUploading = useCallback(() => isUploadingState, [isUploadingState]);

  useImperativeHandle(reference, () => ({ isUploading, files }), [isUploading, files]);

  const handleUpload = useMemo(() => handleFileUpload, []);

  const updateFiles = (resultFiles: Blob[]) => {
    if (props.multiple) {
      const allFiles = [...files, ...resultFiles];
      setFiles(allFiles);
    } else {
      setFiles(resultFiles);
    }
  };

  const deleteFile = (index: number) => {
    const array = [...files];
    array.splice(index, 1);
    setFiles(array);
  };

  const renderButton = (buttonProps: FileUploadProps) => {
    let propsForButton: CommonButtonProps;
    if (buttonProps.variant === 'image') {
      const {
        onUpload,
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
        // onUpload,
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
              await handleUpload(props, updateFiles);
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
              await handleUpload(props, updateFiles);
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
              await handleUpload(props, updateFiles);
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
              await handleUpload(props, updateFiles);
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
    <Container disableGutters sx={{ height: 500, width: 500 }}>
      {renderButton(props)}
      <UploadList
        data={files}
        deleteData={deleteFile}
        variant={props.variant}
        previewStyle={props.variant === 'image' ? props.previewStyle : undefined}
      />
    </Container>
  );
});

export default FileUpload;
