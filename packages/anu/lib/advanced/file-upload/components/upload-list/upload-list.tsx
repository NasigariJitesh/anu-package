import { getColorInRGBA } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { DripsyFinalTheme } from 'dripsy';
import { useState } from 'react';
import { Pressable, PressableStateCallbackType, ScrollView } from 'react-native';

interface UploadListProps {
  data: Blob[] | File[];
  errors?: boolean[];
  errorMessages?: string[];
  variant: 'image' | 'file';
  sortable?: boolean;
  previewStyle?: 'list' | 'carousel';
  deleteData: (index: number) => void;
}

interface ListItemProps {
  id: number;
  dataItem: Blob | File;
  error?: boolean;
  errorMessage?: string;
  single?: boolean;
  variant: 'image' | 'file';
  deleteData: (index: number) => void;
}

const hoverFromState = (state: PressableStateCallbackType) => {
  if (state.hovered) return true;
  else if (state.pressed) return true;
  else if (state.focused) return true;
  else return false;
};

const RegularListItem = (props: ListItemProps) => {
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, variant, error, errorMessage } = props;
  const theme = useTheme();

  const styles = getStyles(theme, single);

  return (
    <Pressable
      style={(state) => {
        setHovered(hoverFromState(state));
        return styles.listItem;
      }}
    >
      <Container disableGutters style={styles.listItemContainer}>
        {!single && (
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

const PreviewListItem = (props: ListItemProps) => {
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, error, errorMessage } = props;
  const theme = useTheme();

  const styles = getStyles(theme, single);
  const url = URL.createObjectURL(dataItem);

  return (
    <Pressable
      style={(state) => {
        setHovered(hoverFromState(state));
        return styles.listItem;
      }}
    >
      <Container disableGutters style={styles.listItemContainer}>
        {!single && (
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

const CarouselListItem = (props: ListItemProps) => {
  const [hovered, setHovered] = useState(false);
  const { id, dataItem, single, deleteData, error, errorMessage } = props;
  const theme = useTheme();

  const styles = getStyles(theme, single);
  const url = URL.createObjectURL(dataItem);

  return (
    <Container disableGutters style={styles.carouselItem}>
      <Pressable
        style={(state) => {
          setHovered(hoverFromState(state));
          return styles.carouselListItem;
        }}
      >
        <Image
          style={styles.carouselImage}
          source={{ uri: url }}
          onLoad={() => URL.revokeObjectURL(url)}
          alt={dataItem.name}
        />

        {!single && (
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

const UploadList = (props: UploadListProps) => {
  const theme = useTheme();
  const styles = getStyles(theme, props.data.length <= 1, props.previewStyle === 'carousel');
  return (
    <ScrollView horizontal={props.previewStyle === 'carousel'} style={styles.container}>
      {props.data.map((dataItem, index) => {
        const propList = {
          dataItem,
          id: index,
          deleteData: props.deleteData,
          variant: props.variant,
          single: props.data.length <= 1,
          error: props.errors ? props.errors[index] : false,
          errorMessage: props.errorMessages ? props.errorMessages[index] : '',
        };

        switch (props.previewStyle) {
          case 'list': {
            return <PreviewListItem {...propList} />;
          }
          case 'carousel': {
            return <CarouselListItem {...propList} />;
          }
          default: {
            return <RegularListItem {...propList} />;
          }
        }
      })}
    </ScrollView>
  );
};

const getStyles = (theme: DripsyFinalTheme, single?: boolean, isHorizontal?: boolean) => {
  const styles = {
    listItem: {
      width: '100%',
      minHeight: 48,
      marginVertical: 5,
    },
    container: {
      marginTop: 15,
      marginLeft: single ? 0 : -16,
      width: '100%',
      flexDirection: isHorizontal ? ('row' as const) : ('column' as const),
    },
    fileIcon: {
      margin: 16,
      color: theme.colors.$surfaceVariant,
    },
    dragIcon: {
      color: getColorInRGBA(theme.colors.$surfaceVariant, 75),
    },
    dragIconContainer: {
      width: 16,
      height: 16,
    },
    deleteIcon: {
      margin: 16,
      color: theme.colors.$error,
    },
    carouselDeleteIcon: {
      color: theme.colors.$surface,
    },
    fileName: {
      fontSize: theme.fontSizes[7],
      lineHeight: theme.lineHeights[7],
      flexGrow: 1,
    },
    listItemContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
    },
    errorMessage: {
      fontSize: theme.fontSizes[9],
      lineHeight: theme.lineHeights[9],
      flexGrow: 1,
      marginTop: 5,
      marginHorizontal: 16,
      color: theme.colors.$error,
    },
    listPreviewImage: {
      height: 48,
      width: 48,
      borderRadius: 4,
      marginRight: 16,
    },
    carouselItem: {
      margin: 16,
    },
    carouselListItem: {
      height: 120,
      width: 120,
      borderRadius: 4,
      position: 'relative' as const,
    },
    carouselDragIconContainer: {
      position: 'absolute' as const,
      top: 8,
      left: 8,
      borderRadius: 100,
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 10),
    },
    carouselDeleteButton: {
      position: 'absolute' as const,
      top: 0,
      right: 0,
      '@hover': {
        backgroundColor: getColorInRGBA(theme.colors.$onSurface, 10),
      },
    },
    carouselImage: {
      height: 120,
      width: 120,
      borderRadius: 4,
    },
  };

  return styles;
};

export default UploadList;
