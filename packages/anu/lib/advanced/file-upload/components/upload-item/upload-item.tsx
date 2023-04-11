import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { Pressable } from 'react-native';

import { getUploadListStyles } from '../../utils';

interface ListItemProps {
  id: number;
  dataItem: Blob | File;
  uri?: string;
  error?: boolean;
  errorMessage?: string;
  single?: boolean;
  variant?: 'image' | 'file';
  deleteData: (index: number) => void;
  previewStyle?: 'list' | 'carousel';
}

/**
 * To Render a regular list item
 *
 * @param props - props for the list item
 */
const RegularListItem = (props: ListItemProps) => {
  const { id, dataItem, single, deleteData, variant, error, errorMessage } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, single);

  return (
    <Pressable key={id} style={styles.listItem}>
      <Container disableGutters style={styles.listItemContainer}>
        {/* <Icon
          name={variant === 'image' ? 'image' : 'insert-drive-file'}
          size={16}
          style={error === true ? { ...styles.fileIcon, color: theme.colors.$error } : styles.fileIcon}
        /> */}
        <Typography.Body
          style={error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        {/* <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          type='standard'
          onPress={() => {
            deleteData(id);
          }}
        /> */}
      </Container>
      {error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {errorMessage}
          </Typography.Body>
        </Container>
      ) : null}
    </Pressable>
  );
};

/**
 * To Render a image preview list item
 *
 * @param props - props for the list item
 */
const PreviewListItem = (props: ListItemProps) => {
  const { id, dataItem, single, deleteData, error, errorMessage, uri } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, single);

  return (
    <Pressable key={id} style={styles.listItem}>
      <Container disableGutters style={styles.listItemContainer}>
        <Image source={{ uri: uri }} alt={dataItem.name} style={styles.listPreviewImage} />
        <Typography.Body
          style={error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        {/* <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          type='standard'
          onPress={() => {
            deleteData(id);
          }}
        /> */}
      </Container>
      {error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {errorMessage}
          </Typography.Body>
        </Container>
      ) : null}
    </Pressable>
  );
};

/**
 * To Render a image carousel list item
 *
 * @param props - props for the list item
 */
const CarouselListItem = (props: ListItemProps) => {
  const { id, dataItem, single, deleteData, error, errorMessage, uri } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, single);

  return (
    <Container disableGutters style={styles.carouselItem} key={id}>
      <Pressable style={styles.carouselListItem}>
        <Image style={styles.carouselImage} source={{ uri: uri }} alt={dataItem.name} />

        {/* <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.carouselDeleteIcon } }}
          type='standard'
          containerStyle={styles.carouselDeleteButton}
          onPress={() => {
            deleteData(id);
          }}
        /> */}

        {error === true ? (
          <Container disableGutters>
            <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
              {errorMessage}
            </Typography.Body>
          </Container>
        ) : null}
      </Pressable>
    </Container>
  );
};

const UploadItem = (props: ListItemProps) => {
  switch (props.previewStyle) {
    case 'list': {
      return <PreviewListItem {...props} />;
    }
    case 'carousel': {
      return <CarouselListItem {...props} />;
    }
    default: {
      return <RegularListItem {...props} />;
    }
  }
};

export default UploadItem;
