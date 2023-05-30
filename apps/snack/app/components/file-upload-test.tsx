/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, FileUpload } from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const style = { margin: 10 };

const FileUploadScreen = () => {
  return (
    <ScrollView style={{ height: '100%' }}>
      <Container disableGutters style={style}>
        <FileUpload category='common' variant='filled' size='medium' title='Upload' icon={{ name: 'file-upload' }} />
      </Container>
      <Container disableGutters style={style}>
        <FileUpload category='common' variant='filled' size='medium' title='Choose a file' multiple />
      </Container>

      <Container disableGutters style={style}>
        <FileUpload
          category='common'
          variant='filled'
          size='medium'
          title='Choose a file'
          uploadVariant='image'
          previewType='list'
          multiple
        />
      </Container>
      <Container disableGutters style={style}>
        <FileUpload
          category='common'
          variant='filled'
          size='medium'
          title='Choose a file'
          uploadVariant='image'
          previewType='carousel'
          listWidth={200}
          itemWidth={150}
          multiple
        />
      </Container>
      <PanGestureHandler>
        <Container disableGutters style={style}>
          <FileUpload
            category='common'
            variant='filled'
            size='medium'
            title='Choose a file'
            uploadVariant='image'
            previewType='list'
            multiple
            listWidth={200}
            itemWidth={150}
            sortable
          />
        </Container>
      </PanGestureHandler>
    </ScrollView>
  );
};

export default FileUploadScreen;
