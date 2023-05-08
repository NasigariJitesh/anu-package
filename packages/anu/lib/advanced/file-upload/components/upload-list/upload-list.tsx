import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import SortableList from 'anu/lib/advanced/sortable-list';
import { ScrollView } from 'react-native';

import { UploadListProps } from '../../types';
import { getUploadListStyles } from '../../utils';
import UploadItem from '../upload-item';

const keyExtractor = (item: File, index: number) => item.name + index;

/**
 * Uploaded Files List Component
 *
 * @param props - props for the uploaded Files List Component
 */
const UploadList = (props: UploadListProps) => {
  const theme = useTheme();
  const styles = getUploadListStyles(theme, props.listWidth, props.previewType === 'carousel');

  const renderItem = (item: File, index: number) => {
    const propList = {
      dataItem: item,
      uri: props.uriData ? props.uriData[index ?? 0] : undefined,
      id: index ?? 0,
      deleteData: props.deleteData,
      variant: props.variant,
      single: props.data.length <= 1,
      error: props.errors ? props.errors[index ?? 0] : { error: false, errorMessage: '' },
      previewType: props.previewType,
      sortable: props.sortable,
      listItemStyle: props.listItemStyle,
    };

    return <UploadItem key={index} {...propList} />;
  };

  return (
    <Container disableGutters style={props.listStyle}>
      {props.sortable ? (
        <SortableList
          horizontal={props.previewType === 'carousel'}
          itemHeight={props.previewType === 'carousel' ? 152 : 68}
          itemWidth={props.previewType === 'carousel' ? 152 : 300}
          containerWidth={300}
          data={props.data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onSort={props.onSort}
        />
      ) : (
        <ScrollView horizontal={props.previewType === 'carousel'} style={styles.container}>
          {props.data.map((dataItem, index) => renderItem(dataItem, index))}
        </ScrollView>
      )}
    </Container>
  );
};

export default UploadList;
