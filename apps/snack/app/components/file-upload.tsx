/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { useTheme } from 'anu/config';
import { Container, FileUpload, Typography } from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native';

const FileUploadScreen = () => {
  const theme = useTheme();
  return (
    <Container style={{ flex: 1, backgroundColor: theme.colors.$surface }}>
      <ScrollView>
        <Container style={{ width: '100%', padding: 10 }}>
          <Typography.Title style={{ marginBottom: 5 }}>File Upload - Single</Typography.Title>
          <FileUpload
            category='common'
            variant='filled'
            size='medium'
            title='Upload'
            icon={{ name: 'file-upload' }}
            listStyle={{ width: 320 }}
            listItemStyle={{ width: '100%' }}
          />
        </Container>
        <Container style={{ width: '100%', padding: 10 }}>
          <Typography.Title style={{ marginBottom: 5 }}>File Upload - Multiple</Typography.Title>

          <FileUpload
            multiple
            category='common'
            variant='filled'
            size='medium'
            title='Upload'
            icon={{ name: 'file-upload' }}
            listStyle={{ width: 320 }}
            listItemStyle={{ width: '100%' }}
          />
        </Container>
        <Container style={{ width: '100%', padding: 10 }}>
          <Typography.Title style={{ marginBottom: 5 }}>File Upload - Image preview</Typography.Title>
          <FileUpload
            multiple
            uploadVariant='image'
            category='common'
            variant='filled'
            size='medium'
            title='Upload'
            icon={{ name: 'file-upload' }}
            previewType='list'
            listStyle={{ width: 320 }}
            listItemStyle={{ width: '100%' }}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};

export default FileUploadScreen;
