/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Button, Container, Typography } from 'anu/lib/primitives';
import * as FilePicker from 'expo-document-picker';
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { Pressable } from 'react-native';

import { FileDropZoneReferenceProps, NativeFileDropZoneProps } from '../../types';
import { compressFileNative, getDropZoneStyles, getErrorMessageStyle, getFileTypes } from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

/**
 * Function to handle file upload
 *
 * @param props - props of the file upload component
 * @param updateFiles - function to update the uploaded files to existing files list
 */
const handleFileUpload = async (
  props: NativeFileDropZoneProps,
  updateFiles: { (files: File[], uris: string[]): void },
) => {
  const result = await FilePicker.getDocumentAsync({
    multiple: props.multiple,
    type: getFileTypes(props.fileType, props.uploadVariant),
  });

  if (result.type === 'success' && result.uri && result.name) {
    const file = new File([result.uri], result.name, { type: result.mimeType });

    if (props.uploadVariant === 'image' && props.optimization) {
      const { compressedImage, uri } = await compressFileNative(file, result.uri, props.optimizationConfig);
      const image = compressedImage;
      updateFiles([image], [uri]);
    } else {
      updateFiles([file], [result.uri]);
    }
  }
};

const FileDropZone = forwardRef<FileDropZoneReferenceProps, NativeFileDropZoneProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [files, setFiles] = useState<File[]>([]);
  const [fileUris, setFileUris] = useState<string[]>([]);
  const [duplicateFileNameError, setDuplicateFileNameError] = useState(false);

  useImperativeHandle(reference, () => ({ files }), [files]);

  const handleUpload = useMemo(() => handleFileUpload, []);

  const theme = useTheme();
  const { dropZoneStyle, childrenContainerStyle, buttonContainerStyle } = getDropZoneStyles(theme);
  const errorMessageStyle = getErrorMessageStyle(theme);

  const updateFiles = (resultFiles: File[], resultUris: string[]) => {
    if (finalProps.multiple) {
      if (finalProps.sortable) {
        for (const file of resultFiles) {
          const similarNameFiles = files.filter((item) => item.name === file.name);

          if (similarNameFiles.length > 0) {
            setDuplicateFileNameError(true);
            return;
          }
        }
      }

      const allFiles = [...files, ...resultFiles];
      const allUris = [...fileUris, ...resultUris];
      setFiles(allFiles);
      setFileUris(allUris);
      if (finalProps.onChange) finalProps.onChange(allFiles, allUris);
    } else {
      setFiles(resultFiles);
      setFileUris(resultUris);
      if (finalProps.onChange && resultFiles[0]) finalProps.onChange(resultFiles[0], resultUris[0]);
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

  const onSortHandler = (from: number, to: number) => {
    const array = [...files];
    const file = array[from];
    const uriArray = [...fileUris];
    const uri = uriArray[from];
    if (file === undefined || uri === undefined) return;
    array.splice(from, 1);
    array.splice(to, 0, file);
    setFiles(array);

    uriArray.splice(from, 1);
    uriArray.splice(to, 0, uri);
    setFileUris(uriArray);

    if (finalProps.onChange)
      finalProps.onChange(array.length > 0 ? array : null, uriArray.length > 0 ? uriArray : null);
  };

  const onCancel = () => {
    setFiles([]);
  };

  return (
    <Container disableGutters style={finalProps.style}>
      <Container disableGutters>
        <Container disableGutters>
          <Pressable
            onPress={async () => {
              setDuplicateFileNameError(false);
              await handleUpload(finalProps, updateFiles);
            }}
          >
            <Container disableGutters style={getCombinedStylesForView(dropZoneStyle, finalProps.dropZoneStyle)}>
              <Container disableGutters style={childrenContainerStyle}>
                {finalProps.children}
              </Container>
            </Container>
          </Pressable>
          {finalProps.hideActionButtons ? null : (
            <Container disableGutters style={buttonContainerStyle}>
              <Button.Text title={finalProps.submitLabel || ''} onPress={finalProps.onSubmit} />
              <Button.Text title={finalProps.cancelLabel || ''} onPress={onCancel} />
            </Container>
          )}
        </Container>
        {duplicateFileNameError ? (
          <Typography.Body style={errorMessageStyle}>{finalProps.errorMessageForDuplicateFiles}</Typography.Body>
        ) : null}
      </Container>

      <UploadList
        errors={finalProps.errors}
        sortable={finalProps.sortable}
        data={[...files]}
        uriData={[...fileUris]}
        onSort={onSortHandler}
        deleteData={deleteFile}
        variant={finalProps.uploadVariant}
        previewType={finalProps.uploadVariant === 'image' ? finalProps.previewType : undefined}
        listStyle={finalProps.listStyle}
        listHeight={finalProps.listHeight}
        listWidth={finalProps.listWidth}
        listItemStyle={finalProps.listItemStyle}
        itemWidth={finalProps.itemWidth}
        itemHeight={finalProps.itemHeight}
      />
    </Container>
  );
});

export default FileDropZone;
