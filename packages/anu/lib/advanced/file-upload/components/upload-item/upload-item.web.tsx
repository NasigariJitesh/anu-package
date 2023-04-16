import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { useState } from 'react';
import { Pressable, PressableStateCallbackType } from 'react-native';

import { getUploadListStyles } from '../../utils';
interface ListItemProps {
  id: number;
  dataItem: Blob | File;
  error?: boolean;
  uri?: string;
  errorMessage?: string;
  single?: boolean;
  variant?: 'image' | 'file';
  deleteData: (index: number) => void;
  previewStyle?: 'list' | 'carousel';
  sortable?: boolean;
  listWidth?: number;
}

/**
 * To check whether an item is hovered pressed or focused
 *
 * @param state - state of pressable
 * @param setHovered
 */
const hoverFromState = (
  state: PressableStateCallbackType,
  setHovered: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (state.hovered) setHovered(true);
  else if (state.pressed) setHovered(true);
  else if (state.focused) setHovered(true);
  else setHovered(false);
};

/**
 * To Render a regular list item
 *
 * @param props - props for the list item
 */
const RegularListItem = (props: ListItemProps) => {
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, variant, error, errorMessage, sortable, listWidth } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, false);

  return (
    <Pressable
      style={(state) => {
        hoverFromState(state, setHovered);
        return styles.listItem;
      }}
    >
      <Container disableGutters style={styles.listItemContainer}>
        {!single && sortable && (
          <Container disableGutters style={styles.dragIconContainer}>
            {hovered ? <Icon name='drag-indicator' size={16} style={styles.dragIcon} /> : null}
          </Container>
        )}

        <Icon
          name={variant === 'image' ? 'image' : 'insert-drive-file'}
          size={16}
          style={error === true ? { ...styles.fileIcon, color: theme.colors.$error } : styles.fileIcon}
        />
        <Typography.Body
          style={error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          type='standard'
          onPress={() => {
            deleteData(id);
          }}
        />
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
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, error, errorMessage, listWidth, sortable } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, false);
  const url = URL.createObjectURL(dataItem);

  return (
    <Pressable
      key={id}
      style={(state) => {
        hoverFromState(state, setHovered);
        return styles.listItem;
      }}
    >
      <Container disableGutters style={styles.listItemContainer}>
        {!single && sortable && (
          <Container disableGutters style={styles.dragIconContainer}>
            {hovered ? <Icon name='drag-indicator' size={16} style={styles.dragIcon} /> : null}
          </Container>
        )}

        <Image
          source={{ uri: url }}
          onLoad={() => URL.revokeObjectURL(url)}
          alt={dataItem.name}
          style={styles.listPreviewImage}
        />
        <Typography.Body
          style={error === true ? { ...styles.fileName, color: theme.colors.$error } : styles.fileName}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {dataItem.name}
        </Typography.Body>
        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.deleteIcon } }}
          type='standard'
          onPress={() => {
            deleteData(id);
          }}
        />
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
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, error, errorMessage, listWidth, sortable } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, listWidth, true);
  const url = URL.createObjectURL(dataItem);

  return (
    <Container disableGutters style={styles.carouselItem} key={id}>
      <Pressable
        style={(state) => {
          hoverFromState(state, setHovered);
          return styles.carouselListItem;
        }}
      >
        <Image
          style={styles.carouselImage}
          source={{ uri: url }}
          onLoad={() => URL.revokeObjectURL(url)}
          alt={dataItem.name}
        />

        {!single && sortable && (
          <Container disableGutters style={styles.carouselDragIconContainer}>
            {hovered ? <Icon name='drag-indicator' size={16} style={styles.dragIcon} /> : null}
          </Container>
        )}
        <IconButton
          icon={{ name: 'delete-outline', props: { size: 16, style: styles.carouselDeleteIcon } }}
          type='standard'
          containerStyle={styles.carouselDeleteButton}
          onPress={() => {
            deleteData(id);
          }}
        />

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
