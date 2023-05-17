import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { Pressable } from 'react-native';

import { ListItemProps } from '../../types';
import { getUploadListStyles } from '../../utils';

/**
 * To Render a regular list item
 *
 * @param props - props for the list item
 */
const RegularListItem = (props: ListItemProps) => {
  const { id, dataItem, single, deleteData, variant, error, sortable, listWidth, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, false);

  return (
    <Pressable key={id} style={getCombinedStylesForView(styles.listItem, listItemStyle)}>
      <Container disableGutters style={styles.listItemContainer}>
        {!single && sortable && (
          <Container disableGutters style={styles.dragIconContainer}>
            <Icon name='drag-indicator' size={16} style={styles.dragIcon} />
          </Container>
        )}
        <Icon
          name={variant === 'image' ? 'image' : 'insert-drive-file'}
          size={16}
          style={error?.error === true ? { ...styles.fileIcon, color: theme.colors.$error } : styles.fileIcon}
        />
        <Typography.Body
          style={error?.error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          variant='standard'
          onPress={() => {
            deleteData(id);
          }}
          style={styles.deleteIconButton}
        />
      </Container>
      {error?.error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {error.errorMessage}
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
  const { id, dataItem, single, deleteData, error, listWidth, uri, sortable, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, false);

  return (
    <Pressable key={id} style={getCombinedStylesForView(styles.listItem, listItemStyle)}>
      <Container disableGutters style={styles.listItemContainer}>
        {!single && sortable && (
          <Container disableGutters style={styles.dragIconContainer}>
            <Icon name='drag-indicator' size={16} style={styles.dragIcon} />
          </Container>
        )}
        <Image source={{ uri: uri }} alt={dataItem.name} style={styles.listPreviewImage} />
        <Typography.Body
          style={error?.error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          variant='standard'
          onPress={() => {
            deleteData(id);
          }}
          style={styles.deleteIconButton}
        />
      </Container>
      {error?.error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {error.errorMessage}
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
  const { id, dataItem, single, deleteData, error, uri, listWidth, sortable, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, true);

  return (
    <Container disableGutters style={getCombinedStylesForView(styles.carouselItem, listItemStyle)} key={id}>
      <Pressable style={styles.carouselListItem}>
        <Image style={styles.carouselImage} source={{ uri: uri }} alt={dataItem.name} />

        {!single && sortable && (
          <Container disableGutters style={styles.carouselDragIconContainer}>
            <Icon name='drag-indicator' size={16} style={styles.dragIcon} />
          </Container>
        )}

        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.carouselDeleteIcon } }}
          variant='standard'
          style={styles.carouselDeleteButton}
          onPress={() => {
            deleteData(id);
          }}
        />

        {error?.error === true ? (
          <Container disableGutters>
            <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
              {error.errorMessage}
            </Typography.Body>
          </Container>
        ) : null}
      </Pressable>
    </Container>
  );
};

const UploadItem = (props: ListItemProps) => {
  switch (props.previewType) {
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
