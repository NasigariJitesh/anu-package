/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { useTheme } from 'anu/config';
import { Container, FileDropZone, Typography } from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const FileUploadScreen = () => {
  const theme = useTheme();
  return (
    <Container style={{ flex: 1, backgroundColor: theme.colors.$surface }}>
      <ScrollView>
        <Container style={{ width: '100%', padding: 10 }}>
          <Typography.Title style={{ marginBottom: 5 }}>Dropzone</Typography.Title>
          <FileDropZone
            dropZoneStyle={{ width: 280 }}
            listStyle={{ width: 280 }}
            listItemStyle={{ width: '100%' }}
            style={{ width: 280 }}
          >
            <Typography.Body> Drop your files here</Typography.Body>
          </FileDropZone>
        </Container>
        <Container style={{ width: '100%', padding: 10 }}>
          <Typography.Title style={{ marginBottom: 5 }}>Dropzone - multiple</Typography.Title>
          <FileDropZone
            multiple
            dropZoneStyle={{ width: 280 }}
            listStyle={{ width: 280 }}
            listItemStyle={{ width: '100%' }}
            style={{ width: 280 }}
          >
            <Typography.Body> Drop your files here</Typography.Body>
          </FileDropZone>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default FileUploadScreen;
