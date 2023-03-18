import { getCombinedStylesForImage } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { Image } from 'lib';
import React, { useState } from 'react';
import { ImageErrorEventData, ImageLoadEventData, NativeSyntheticEvent } from 'react-native';

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
  const [error, setError] = useState(false);
  const theme = useTheme();
  const finalProps: ImageAvatarProps = { ...defaultImageProps, ...props };

  const { size, variant, alt, ...otherProps } = finalProps;

  const { source } = otherProps;

  const { imageStyle } = getImageAvatarStyle(finalProps, theme);

  /**
   * Handler for the onLoadStart callback of the image
   */
  const onLoadStartHandler = () => {
    setIsLoading(true);
    if (finalProps.onLoadStart) finalProps.onLoadStart();
  };

  /**
   * Handler for the onLoadEnd callback of the image
   */
  const onLoadEndHandler = () => {
    setIsLoading(false);
    if (finalProps.onLoadEnd) finalProps.onLoadEnd();
  };

  /**
   * Handler for the onError callback of the image
   *
   * @param {NativeSyntheticEvent<ImageErrorEventData>}event - error event
   */
  const onErrorHandler = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    setError(true);
    if (finalProps.onError) finalProps.onError(event);
  };

  /**
   * Handler for the onPartialLoad callback of the image
   */
  const onPartialLoadHandler = () => {
    setError(true);
    if (finalProps.onPartialLoad) finalProps.onPartialLoad();
  };

  /**
   * Handler for the onLoad callback of the image
   *
   * @param {NativeSyntheticEvent<ImageLoadEventData>}event -load event
   */
  const onLoadHandler = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setError(false);
    setIsLoading(false);
    if (finalProps.onLoad) finalProps.onLoad(event);
  };

  return (
    <Image
      alt={alt ?? ''}
      {...otherProps}
      source={error || isLoading ? defaultImageProps.source : source}
      style={getCombinedStylesForImage(imageStyle, finalProps.style)}
      onLoadStart={onLoadStartHandler}
      onLoadEnd={onLoadEndHandler}
      onError={onErrorHandler}
      onPartialLoad={onPartialLoadHandler}
      onLoad={onLoadHandler}
    />
  );
};

export default ImageAvatar;
