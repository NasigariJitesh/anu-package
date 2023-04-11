/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Button, Container } from 'anu/lib/primitives';
import * as FilePicker from 'expo-document-picker';
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { Pressable } from 'react-native';

import { FileDropZoneProps, FileDropZoneReferenceProps } from '../../types';
import { compressFile, getDropZoneStyles, getFileTypes } from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

/**
 * Function to handle file upload
 *
 * @param props - props of the file upload component
 * @param updateFiles - function to update the uploaded files to existing files list
 */
const handleFileUpload = async (props: FileDropZoneProps, updateFiles: { (files: Blob[], uris: string[]): void }) => {
  const result = await FilePicker.getDocumentAsync({
    multiple: props.multiple,
    type: getFileTypes(props.fileType),
  });
  if (result.type === 'success') {
    const file = new File([result.uri], result.name, { type: result.mimeType });

    if (props.variant === 'image' && props.optimization) {
      const compressedImage = await compressFile(file, props.optimizationConfig);

      updateFiles([compressedImage], [result.uri]);
    } else {
      updateFiles([file], [result.uri]);
    }
  }
};

const FileDropZone = forwardRef<FileDropZoneReferenceProps, FileDropZoneProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [files, setFiles] = useState<Blob[]>([]);
  const [fileUris, setFileUris] = useState<string[]>([]);

  useImperativeHandle(reference, () => ({ files }), [files]);

  const onCancel = () => {
    setFiles([]);
  };

  const theme = useTheme();
  const { dropZoneStyle, childrenContainerStyle, buttonContainerStyle } = getDropZoneStyles(theme);

  const handleUpload = useMemo(() => handleFileUpload, []);

  const updateFiles = (resultFiles: Blob[], resultUris: string[]) => {
    if (finalProps.multiple) {
      const allFiles = [...files, ...resultFiles];
      const allUris = [...fileUris, ...resultUris];
      setFiles(allFiles);
      setFileUris(allUris);
      if (finalProps.onChange) finalProps.onChange(allFiles, allUris);
    } else {
      setFiles(resultFiles);
      setFileUris(resultUris);
      if (finalProps.onChange) finalProps.onChange(resultFiles[0], resultUris[0]);
    }
  };

  const deleteFile = (index: number) => {
    const array = [...files];
    array.splice(index, 1);
    setFiles(array);
    const uriArray = [...fileUris];
    uriArray.splice(index, 1);
    setFileUris(uriArray);
    if (finalProps.onChange)
      finalProps.onChange(array.length > 0 ? array : null, uriArray.length > 0 ? uriArray : null);
  };

  return (
    <Container disableGutters style={finalProps.style}>
      <Container disableGutters>
        <Pressable
          onPress={async () => {
            await handleUpload(finalProps, updateFiles);
          }}
        >
          <Container disableGutters style={getCombinedStylesForView(dropZoneStyle, props.dropZoneStyle)}>
            <Container disableGutters style={childrenContainerStyle}>
              {props.children}
            </Container>
          </Container>
        </Pressable>
        <Container disableGutters style={buttonContainerStyle}>
          <Button.Text title='Submit' onPress={finalProps.onSubmit} />
          <Button.Text title='Cancel' onPress={onCancel} />
        </Container>
      </Container>

      <UploadList
        data={files}
        uriData={fileUris}
        deleteData={deleteFile}
        variant={finalProps.variant}
        previewStyle={finalProps.variant === 'image' ? finalProps.previewStyle : undefined}
      />
    </Container>
  );
});

export default FileDropZone;
