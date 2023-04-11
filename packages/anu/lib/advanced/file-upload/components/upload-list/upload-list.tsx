import { useTheme } from 'anu/config';
import { ScrollView } from 'react-native';

import { getUploadListStyles } from '../../utils';
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

/**
 * Uploaded Files List Component
 *
 * @param props - props for the uploaded Files List Component
 */
const UploadList = (props: UploadListProps) => {
  const theme = useTheme();
  const styles = getUploadListStyles(theme, props.data.length <= 1, props.previewStyle === 'carousel');
  return (
    <ScrollView horizontal={props.previewStyle === 'carousel'} style={styles.container}>
      {props.data.map((dataItem, index) => {
        const propList = {
          dataItem,
          uri: props.uriData ? props.uriData[index ?? 0] : undefined,
          id: index,
          deleteData: props.deleteData,
          variant: props.variant,
          single: props.data.length <= 1,
          error: props.errors ? props.errors[index] : false,
          errorMessage: props.errorMessages ? props.errorMessages[index] : '',
          previewStyle: props.previewStyle,
        };

        return <UploadItem key={index} {...propList} />;
      })}
    </ScrollView>
  );
};

export default UploadList;
