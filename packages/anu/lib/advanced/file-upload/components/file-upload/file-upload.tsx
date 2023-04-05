/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import { ExtendedFAB, FAB, IconButton } from 'anu/lib/primitives';
import { RegularButton } from 'anu/lib/primitives/button/components/regular';
import { Pressable } from 'dripsy';
// import * as FilePicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';

import { FileUploadProps, FileUploadReferenceProps } from '../../types';

const handleImageUpload = async (
  props: FileUploadProps,
  updateFiles: { (files: ImagePicker.ImagePickerAsset[]): void },
) => {
  if (props.variant === 'file') return;

  const results = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: props.mediaType,
    allowsMultipleSelection: props.multiple,
    selectionLimit: props.selectionLimit,
    orderedSelection: props.orderedSelection,
  });
  updateFiles(results.assets ?? []);
  props.onUpload(results);
};

// const handleFileUpload = async (
//   props: FileUploadProps,
//   updateFiles: { (files: FilePicker.DocumentResult[]): void },
// ) => {
//   if (props.variant === 'image') return;

//   const result = await FilePicker.getDocumentAsync({
//     multiple: props.multiple,
//     type: props.fileType,
//     copyToCacheDirectory: props.copyToCacheDirectory,
//   });
//   updateFiles(result.type === 'success' ? [result] : []);
//   props.onUpload(result);
// };

const FileUpload = forwardRef<FileUploadReferenceProps, FileUploadProps>((props, reference) => {
  const [isUploadingState, setIsUploadingState] = useState(false);
  const [files, setFiles] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const isUploading = useCallback(() => isUploadingState, [isUploadingState]);

  useImperativeHandle(reference, () => ({ isUploading, files }), [isUploading, files]);

  const handleUpload = useMemo(() => handleImageUpload, [props.variant]);

  const updateFiles = (resultFiles: ImagePicker.ImagePickerAsset[]) => {
    if (props.multiple) {
      const allFiles = [...files, ...resultFiles];
      setFiles(allFiles);
    } else {
      setFiles(resultFiles);
    }
  };

  // <Button.Filled
  //     title='Choose File'
  //     onPress={async () => {
  //       setIsUploadingState(true);
  //       await handleUpload(props, updateFiles);
  //       setIsUploadingState(false);
  //     }}
  //   />

  const renderButton = (buttonProps: FileUploadProps) => {
    let propsForButton;

    if (buttonProps.variant === 'image') {
      const {
        onUpload,
        variant,
        multiple,
        sortable,
        optimization,

        previewStyle,
        selectionLimit,
        orderedSelection,
        mediaType,
        ...otherButtonProps
      } = buttonProps;

      propsForButton = otherButtonProps;
    } else {
      const {
        // onUpload,
        variant,
        multiple,
        sortable,
        optimization,

        fileType,
        copyToCacheDirectory,

        ...otherButtonProps
      } = buttonProps;
      propsForButton = otherButtonProps;
    }

    switch (propsForButton.category) {
      case 'regular': {
        return <RegularButton {...propsForButton} />;
      }
      case 'icon-button': {
        return <IconButton {...propsForButton} />;
      }
      case 'floating-action': {
        return <FAB {...propsForButton} />;
      }
      case 'extended-floating-action': {
        return <ExtendedFAB {...propsForButton} />;
      }
      default: {
        {
          return <></>;
        }
      }
    }
  };

  return renderButton(props);
});

export default FileUpload;
