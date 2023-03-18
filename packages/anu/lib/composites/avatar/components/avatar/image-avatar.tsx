import { getCombinedStylesForImage } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { Image } from 'lib';
import React, { useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import { ImageAvatarProps } from '../../types';
import { getImageAvatarStyle } from '../../utils';
import { defaultImageProps } from './default';

/**
 * Component for Image avatar
 *
 * @param {ImageAvatarProps} props - all the properties related to the image avatar component
 */
const ImageAvatar = (props: ImageAvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const finalProps = { ...defaultImageProps, ...props };

  const { size, variant, alt, ...otherProps } = finalProps;

  let { source } = otherProps;

  const { imageStyle } = getImageAvatarStyle(finalProps, theme);

  const onLoadStartHandler = () => {
    setIsLoading(true);
    if (finalProps.onLoadStart) finalProps.onLoadStart();
  };
  const onLoadEndHandler = () => {
    setIsLoading(false);
    if (finalProps.onLoadEnd) finalProps.onLoadEnd();
  };

  const onErrorHandler = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    source = defaultImageProps.source;
    if (finalProps.onError) finalProps.onError(event);
  };

  const onPartialLoadHandler = () => {
    source = defaultImageProps.source;
    if (finalProps.onPartialLoad) finalProps.onPartialLoad();
  };

  return (
    <Image
      alt={alt ?? ''}
      {...otherProps}
      testID='image'
      source={isLoading ? defaultImageProps.source : source}
      style={getCombinedStylesForImage(imageStyle, finalProps.style)}
      onLoadStart={onLoadStartHandler}
      onLoadEnd={onLoadEndHandler}
      onError={onErrorHandler}
      onPartialLoad={onPartialLoadHandler}
    />
  );
};

export default ImageAvatar;
