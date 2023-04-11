import { useTheme } from 'anu/config';
import SortableList from 'anu/lib/advanced/sortable-list';
import { ScrollView } from 'react-native';

import { getUploadListStyles } from '../../utils';
import UploadItem from '../upload-item';

interface UploadListProps {
  data: Blob[] | File[];
  uriData?: string[];
  errors?: { error: boolean; errorMessage: string }[];
  variant?: 'image' | 'file';
  sortable?: boolean;
  previewStyle?: 'list' | 'carousel';
  deleteData: (index: number) => void;
  onSort: (from: number, to: number) => void;
}

/**
 * Uploaded Files List Component
 *
 * @param props - props for the uploaded Files List Component
 */
const UploadList = (props: UploadListProps) => {
  const theme = useTheme();
  const styles = getUploadListStyles(theme, props.data.length <= 1, props.previewStyle === 'carousel');

  const renderItem = (item: Blob, index: number) => {
    const propList = {
      dataItem: item,
      uri: props.uriData ? props.uriData[index ?? 0] : undefined,
      id: index ?? 0,
      deleteData: props.deleteData,
      variant: props.variant,
      single: props.data.length <= 1,
      error: props.errors ? props.errors[index ?? 0] : { error: false, errorMessage: '' },
      previewStyle: props.previewStyle,
      sortable: props.sortable,
    };

    return <UploadItem key={index} {...propList} />;
  };

  return props.sortable ? (
    <SortableList
      horizontal={props.previewStyle === 'carousel'}
      itemHeight={props.previewStyle === 'carousel' ? 162 : 68}
      itemWidth={props.previewStyle === 'carousel' ? 162 : 280}
      containerWidth={300}
      data={props.data}
      keyExtractor={(item: Blob, index: number) => item.name + index}
      renderItem={renderItem}
      onSort={props.onSort}
    />
  ) : (
    <ScrollView horizontal={props.previewStyle === 'carousel'} style={styles.container}>
      {props.data.map((dataItem, index) => renderItem(dataItem, index))}
    </ScrollView>
  );
};

export default UploadList;
