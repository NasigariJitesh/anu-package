/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, FileDropZone, Typography } from 'anu/lib';
import React from 'react';

const FileUploadScreen = () => {
  return (
    <Container style={{ flex: 1 }}>
      <FileDropZone>
        <Typography.Body> Drop your files here</Typography.Body>
      </FileDropZone>
    </Container>
  );
};

export default FileUploadScreen;
