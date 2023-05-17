/* eslint-disable react/display-name */
import { useTheme } from 'anu/config';
import { Button, Container, Typography } from 'anu/lib/primitives';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { FileDropZoneProps, FileDropZoneReferenceProps } from '../../types';
import { compressFile, convertToFile, getDropZoneStyles, getErrorMessageStyle } from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

const FileDropZone = forwardRef<FileDropZoneReferenceProps, FileDropZoneProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [files, setFiles] = useState<File[]>([]);
  const [duplicateFileNameError, setDuplicateFileNameError] = useState(false);

  useImperativeHandle(reference, () => ({ files }), [files]);

  const theme = useTheme();
  const { dropZoneStyle, divStyle, childrenContainerStyle, buttonContainerStyle } = getDropZoneStyles(theme);
  const errorMessageStyle = getErrorMessageStyle(theme);

  const updateFiles = (resultFiles: File[]) => {
    if (finalProps.multiple) {
      const uniqueResultFiles: File[] = [];
      if (finalProps.sortable) {
        for (const file of resultFiles) {
          const similarNameFiles = files.filter((item) => item.name === file.name);

          const similarNameFilesInSameUpload = uniqueResultFiles.filter((item) => item.name === file.name);

          if (similarNameFiles.length > 0 || similarNameFilesInSameUpload.length > 0) {
            setDuplicateFileNameError(true);
          } else {
            uniqueResultFiles.push(file);
          }
        }
      } else {
        uniqueResultFiles.push(...resultFiles);
      }

      setFiles((previous) => {
        const allFiles = [...previous, ...uniqueResultFiles];
        if (finalProps.onChange) finalProps.onChange(allFiles);
        return allFiles;
      });
    } else {
      setFiles(resultFiles);
      if (finalProps.onChange && resultFiles[0]) finalProps.onChange(resultFiles[0]);
    }
  };

  const deleteFile = (index: number) => {
    const array = [...files];
    array.splice(index, 1);
    setFiles(array);
    if (finalProps.onChange) finalProps.onChange(array.length > 0 ? array : null);
  };

  const onCancel = () => {
    setFiles([]);
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

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setDuplicateFileNameError(false);

    if (finalProps.uploadVariant === 'image' && finalProps.optimization) {
      const compressedImages = [];
      for (const file of acceptedFiles) {
        const compressedImage = await compressFile(file, finalProps.optimizationConfig);
        const image = convertToFile(compressedImage, file.name);
        compressedImages.push(image);
      }
      updateFiles(compressedImages);
    } else {
      updateFiles(acceptedFiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      finalProps.fileType ?? finalProps.uploadVariant === 'image'
        ? {
            'image/*': [
              '.jpeg',
              '.png',
              '.webp',
              '.svg+xml',
              '.tiff',
              '.png',
              '.gif',
              '.vnd.microsoft.icon',
              '.jpeg',
              '.avif',
              '.bmp',
            ],
          }
        : undefined,
    disabled: finalProps.disabled,
    multiple: finalProps.multiple,
  });

  return (
    <Container disableGutters style={finalProps.style}>
      <Container disableGutters>
        <Container disableGutters>
          <Container disableGutters style={dropZoneStyle}>
            <div {...getRootProps()} style={divStyle}>
              <input {...getInputProps()} />
              <Container disableGutters style={childrenContainerStyle}>
                {props.dragActivePlaceholder !== undefined && isDragActive
                  ? props.dragActivePlaceholder
                  : props.children}
              </Container>
            </div>
          </Container>
          <Container disableGutters style={buttonContainerStyle}>
            <Button.Text title='Submit' onPress={finalProps.onSubmit} />
            <Button.Text title='Cancel' onPress={onCancel} />
          </Container>
        </Container>
        {duplicateFileNameError ? (
          <Typography.Body style={errorMessageStyle}>{finalProps.errorMessageForDuplicateFiles}</Typography.Body>
        ) : null}
      </Container>

      <UploadList
        errors={finalProps.errors}
        sortable={finalProps.sortable}
        data={[...files]}
        onSort={onSortHandler}
        deleteData={deleteFile}
        variant={finalProps.uploadVariant}
        previewType={finalProps.uploadVariant === 'image' ? finalProps.previewType : undefined}
        listStyle={finalProps.listStyle}
        listWidth={finalProps.listWidth}
        listItemStyle={finalProps.listItemStyle}
      />
    </Container>
  );
});

export default FileDropZone;
