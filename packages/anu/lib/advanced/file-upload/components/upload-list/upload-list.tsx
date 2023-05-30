import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import SortableList from 'anu/lib/advanced/sortable-list';
import { ScrollView } from 'react-native';

import { getCombinedStylesForView } from '../../../../../common/utils';
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
  const styles = getUploadListStyles(theme, props.itemHeight, props.itemWidth, props.previewType === 'carousel');

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
      itemHeight: props.itemHeight,
      itemWidth: props.itemWidth,
    };

    return <UploadItem key={index} {...propList} />;
  };

  return props.sortable ? (
    <Container disableGutters style={getCombinedStylesForView(styles.container, props.listStyle)}>
      <SortableList
        horizontal={props.previewType === 'carousel'}
        itemHeight={props.itemHeight ? props.itemHeight + 20 : undefined}
        itemWidth={props.itemWidth}
        containerWidth={props.listWidth}
        containerHeight={props.listHeight}
        data={props.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onSort={props.onSort}
      />
    </Container>
  ) : (
    <ScrollView
      horizontal={props.previewType === 'carousel'}
      style={getCombinedStylesForView(styles.container, props.listStyle)}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {props.data.map((dataItem, index) => renderItem(dataItem, index))}
    </ScrollView>
  );
};

export default UploadList;
