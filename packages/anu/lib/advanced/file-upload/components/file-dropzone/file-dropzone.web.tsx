/* eslint-disable react/display-name */
import { useTheme } from 'anu/config';
import { Button, Container } from 'anu/lib/primitives';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { FileDropZoneProps, FileDropZoneReferenceProps } from '../../types';
import { compressFile, getDropZoneStyles } from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

const FileDropZone = forwardRef<FileDropZoneReferenceProps, FileDropZoneProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [files, setFiles] = useState<Blob[]>([]);

  useImperativeHandle(reference, () => ({ files }), [files]);

  const updateFiles = (resultFiles: Blob[]) => {
    if (finalProps.multiple)
      setFiles((previous) => {
        const a = [...previous, ...resultFiles];
        if (finalProps.onChange) finalProps.onChange(a);
        return a;
      });
    else {
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

  const onCancel = () => {
    setFiles([]);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (finalProps.variant === 'image' && finalProps.optimization) {
      const compressedImages = [];
      for (const file of acceptedFiles) {
        const compressedImage = await compressFile(file, finalProps.optimizationConfig);
        compressedImages.push(compressedImage);
      }
      updateFiles(compressedImages);
    } else {
      updateFiles(acceptedFiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: finalProps.fileType,
    disabled: finalProps.disabled,
    multiple: finalProps.multiple,
  });
  const theme = useTheme();
  const { dropZoneStyle, divStyle, childrenContainerStyle, buttonContainerStyle } = getDropZoneStyles(theme);

  return (
    <Container disableGutters style={finalProps.style}>
      <Container disableGutters>
        <Container disableGutters style={dropZoneStyle}>
          <div {...getRootProps()} style={divStyle}>
            <input {...getInputProps()} />
            <Container disableGutters style={childrenContainerStyle}>
              {props.dragActivePlaceholder !== undefined && isDragActive ? props.dragActivePlaceholder : props.children}
            </Container>
          </div>
        </Container>
        <Container disableGutters style={buttonContainerStyle}>
          <Button.Text title='Submit' onPress={finalProps.onSubmit} />
          <Button.Text title='Cancel' onPress={onCancel} />
        </Container>
      </Container>
      <UploadList
        data={files}
        deleteData={deleteFile}
        variant={finalProps.variant}
        previewStyle={finalProps.variant === 'image' ? finalProps.previewStyle : undefined}
      />
    </Container>
  );
});

export default FileDropZone;
