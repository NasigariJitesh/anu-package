/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Container, Divider, FileUpload, Icon, IconButton, Typography } from 'anu/lib';
import { FileDropZone } from 'anu/lib/advanced/file-upload/components';
import SortableList from 'anu/lib/advanced/sortable-list/components/sortable-list';
import { useState } from 'react';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  const [files, setFiles] = useState<File | Blob[]>([]);
  return (
    <Container
      disableGutters
      sx={{ marginTop: 50, height: '100%', width: '100%', overflow: 'scroll', alignItems: 'center' }}
    >
      <ScrollView>
        {/* <Container sx={{ backgroundColor: 'yellow', height: 400 }}>
          <SortableList
            itemHeight={60}
            itemWidth={100}
            containerWidth={300}
            data={['hello', 'hii', 'heyyy']}
            keyExtractor={(item: string) => item}
            onSort={(from: number, to: number) => console.log(from, to)}
            renderItem={(item: string, index: number) => {
              return (
                <Typography.Body key={index} style={{ width: 100 }}>
                  {item}
                </Typography.Body>
              );
            }}
            onSortEnd={(to: number) => console.log(to, 'to')}
            onSortStart={(from: number) => console.log(from, 'from')}
          />
        </Container> */}

        <FileUpload
          category='regular'
          type='outlined'
          title='Upload'
          size='medium'
          variant='image'
          previewType='list'
          multiple
          sortable
          onChange={(data: Blob[] | Blob | null, uri?: string[] | string | null) => {
            if (Array.isArray(data)) setFiles(data);
          }}
        />

        {/* <FileDropZone
          variant='image'
          multiple
          previewType='list'
          style={{ height: 700, marginLeft: 30 }}
          dropZoneStyle={{ width: 300, height: 250 }}
          onChange={(data: Blob[] | Blob | null, uri?: string[] | string | null) => {
            if (Array.isArray(data)) setFiles(data);
          }}
        >
          <Typography.Body>Drop Your files here</Typography.Body>
        </FileDropZone> */}
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
