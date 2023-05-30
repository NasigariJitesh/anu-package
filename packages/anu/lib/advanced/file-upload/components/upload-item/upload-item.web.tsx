import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, IconButton, Image, Typography } from 'anu/lib/primitives';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import Animated, { Layout, LightSpeedInLeft, LightSpeedOutRight } from 'react-native-reanimated';

import { ListItemProps } from '../../types';
import { getUploadListStyles } from '../../utils';

/**
 * To Render a regular list item
 *
 * @param props - props for the list item
 */
const RegularListItem = (props: ListItemProps) => {
  const { id, dataItem, single, deleteData, variant, error, sortable, itemHeight, itemWidth, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, itemHeight, itemWidth, false);

  return (
    <Pressable style={getCombinedStylesForView(styles.listItem, listItemStyle)}>
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
        />
      </Container>
      {error?.error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {error?.errorMessage}
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
  const { id, dataItem, single, deleteData, error, sortable, itemHeight, itemWidth, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, itemHeight, itemWidth, false);
  const url = URL.createObjectURL(dataItem);

  return (
    <Pressable key={id} style={getCombinedStylesForView(styles.listItem, listItemStyle)}>
      <Container disableGutters style={styles.listItemContainer}>
        {!single && sortable && (
          <Container disableGutters style={styles.dragIconContainer}>
            <Icon name='drag-indicator' size={16} style={styles.dragIcon} />
          </Container>
        )}

        <Image
          source={{ uri: url }}
          onLoad={() => URL.revokeObjectURL(url)}
          alt={dataItem.name}
          style={styles.listPreviewImage}
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
        />
      </Container>
      {error?.error === true ? (
        <Container disableGutters>
          <Typography.Body style={styles.errorMessage} numberOfLines={1} ellipsizeMode='tail'>
            {error?.errorMessage}
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
  const { id, dataItem, single, deleteData, error, sortable, itemHeight, itemWidth, listItemStyle } = props;
  const theme = useTheme();

  const styles = getUploadListStyles(theme, itemHeight, itemWidth, true);
  const url = URL.createObjectURL(dataItem);

  return (
    <Container disableGutters style={getCombinedStylesForView(styles.carouselItem, listItemStyle)} key={id}>
      <Pressable style={styles.carouselListItem}>
        <Image
          style={styles.carouselImage}
          source={{ uri: url }}
          onLoad={() => URL.revokeObjectURL(url)}
          alt={dataItem.name}
        />

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
              {error?.errorMessage}
            </Typography.Body>
          </Container>
        ) : null}
      </Pressable>
    </Container>
  );
};

const AnimatedEnterView = ({ children, sortable }: { children: ReactNode; sortable?: boolean }) => {
  if (sortable) return <>{children}</>;
  return (
    <Animated.View
      entering={LightSpeedInLeft.duration(500)}
      exiting={LightSpeedOutRight.delay(100).duration(500)}
      layout={Layout.springify()}
    >
      {children}
    </Animated.View>
  );
};

const UploadItem = (props: ListItemProps) => {
  switch (props.previewType) {
    case 'list': {
      return (
        <AnimatedEnterView sortable={props.sortable}>
          <PreviewListItem {...props} />
        </AnimatedEnterView>
      );
    }
    case 'carousel': {
      return (
        <AnimatedEnterView sortable={props.sortable}>
          <CarouselListItem {...props} />
        </AnimatedEnterView>
      );
    }
    default: {
      return (
        <AnimatedEnterView sortable={props.sortable}>
          <RegularListItem {...props} />
        </AnimatedEnterView>
      );
    }
  }
};
export default UploadItem;
