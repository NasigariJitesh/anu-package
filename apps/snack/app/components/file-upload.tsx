/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, FileUpload } from 'anu/lib';
import React from 'react';

const FileUploadScreen = () => {
  return (
    <Container style={{ flex: 1 }}>
      <FileUpload category='common' variant='filled' size='medium' title='Upload' icon={{ name: 'file-upload' }} />
    </Container>
  );
};

export default FileUploadScreen;
