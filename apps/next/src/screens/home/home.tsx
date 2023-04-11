/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Container, FileUpload, Typography } from 'anu/lib';
import { FileDropZone } from 'anu/lib/advanced/file-upload/components';
import SortableList from 'anu/lib/advanced/sortable-list/components/sortable-list';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <Container
      disableGutters
      sx={{ marginTop: 50, height: '100%', width: '100%', backgroundColor: 'red', overflow: 'scroll' }}
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
        {/* <FileUpload
          category='regular'
          type='outlined'
          title='Upload'
          size='medium'
          variant='image'
          multiple
          sortable
          previewStyle='list'
          style={{ width: 500, height: 300 }}
          onChange={(data: Blob[] | Blob | null, uri?: string[] | string | null) => console.log(data, uri)}
        /> */}

        <FileDropZone
          variant='image'
          multiple
          sortable
          previewStyle='list'
          style={{ height: 700, flexDirection: 'column-reverse' }}
          dropZoneStyle={{ width: 300, height: 250 }}
          // onChange={(data: Blob[] | Blob | null, uri?: string[] | string | null) => console.log(data, uri)}
        >
          <Typography.Body>Drop Your files here</Typography.Body>
        </FileDropZone>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
