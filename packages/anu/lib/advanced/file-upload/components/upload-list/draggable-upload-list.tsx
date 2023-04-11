import { Container } from 'anu/lib/primitives';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import UploadItem from '../upload-item';

interface UploadListProps {
  data: Blob[] | File[];
  uriData?: string[];
  errors?: boolean[];
  errorMessages?: string[];
  variant?: 'image' | 'file';
  sortable?: boolean;
  previewStyle?: 'list' | 'carousel';
  deleteData: (index: number) => void;
}

const UploadList = (props: UploadListProps) => {
  const listStyle = { flexDirection: props.previewStyle === 'carousel' ? 'row' : 'column' } as const;

  const RenderItem = (renderItemProps: RenderItemParams<Blob>) => {
    const index = renderItemProps.getIndex();
    const propList = {
      dataItem: renderItemProps.item,
      uri: props.uriData ? props.uriData[index ?? 0] : undefined,
      id: index ?? 0,
      deleteData: props.deleteData,
      variant: props.variant,
      single: props.data.length <= 1,
      error: props.errors ? props.errors[index ?? 0] : false,
      errorMessage: props.errorMessages ? props.errorMessages[index ?? 0] : '',
      previewStyle: props.previewStyle,
    };

    return <UploadItem key={index} {...propList} />;
  };
  return (
    <Container sx={{ backgroundColor: 'red' }}>
      <DraggableFlatList
        contentContainerStyle={listStyle}
        horizontal={props.previewStyle === 'carousel'}
        data={props.data}
        keyExtractor={(item) => item.name}
        renderItem={RenderItem}
      />
    </Container>
    // <ScrollView horizontal={props.previewStyle === 'carousel'} style={styles.container}>
    //   {props.data.map((dataItem, index) => {
    //     const propList = {
    //       dataItem,
    //       id: index,
    //       deleteData: props.deleteData,
    //       variant: props.variant,
    //       single: props.data.length <= 1,
    //       error: props.errors ? props.errors[index] : false,
    //       errorMessage: props.errorMessages ? props.errorMessages[index] : '',
    //     };

    //     switch (props.previewStyle) {
    //       case 'list': {
    //         return <PreviewListItem {...propList} />;
    //       }
    //       case 'carousel': {
    //         return <CarouselListItem {...propList} />;
    //       }
    //       default: {
    //         return <RegularListItem {...propList} />;
    //       }
    //     }
    //   })}
    // </ScrollView>
  );
};

export default UploadList;
