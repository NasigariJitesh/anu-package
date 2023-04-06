import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { useState } from 'react';
import { Pressable, PressableStateCallbackType } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import { getUploadListStyles } from '../../utils';

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

  const styles = getUploadListStyles(theme, single);

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

  const styles = getUploadListStyles(theme, single);
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

  const styles = getUploadListStyles(theme, single);
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
  const RenderItem = (renderItemProps: RenderItemParams<Blob>) => {
    const index = renderItemProps.getIndex();
    const propList = {
      dataItem: renderItemProps.item,
      id: index ?? 0,
      deleteData: props.deleteData,
      variant: props.variant,
      single: props.data.length <= 1,
      error: props.errors ? props.errors[index ?? 0] : false,
      errorMessage: props.errorMessages ? props.errorMessages[index ?? 0] : '',
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
  };
  return (
    <DraggableFlatList data={props.data} keyExtractor={(item) => item.name} renderItem={RenderItem} />

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
