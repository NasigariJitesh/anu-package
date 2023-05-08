import { getCombinedStylesForImage } from 'anu/common/utils';
import { Image } from 'anu/lib';
import { useState } from 'react';
import { ImageErrorEventData, ImageLoadEventData, NativeSyntheticEvent } from 'react-native';

import { ImageAvatarProps } from '../../types';
import { getImageAvatarStyle } from '../../utils';
import FallbackImage from './fallback-image';

/**
 * Component for Image avatar
 *
 * @param {ImageAvatarProps} props - all the properties related to the image avatar component
 */
const ImageAvatar = (props: ImageAvatarProps) => {
  const [error, setError] = useState(false);
  const finalProps: ImageAvatarProps = { ...props };

  const { size, variant, alt, ...otherProps } = finalProps;

  const { imageStyle } = getImageAvatarStyle(finalProps);

  /**
   * Handler for the onError callback of the image
   *
   * @param {NativeSyntheticEvent<ImageErrorEventData>} event - error event
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
    if (finalProps.onLoad) finalProps.onLoad(event);
  };

  if (error) return <FallbackImage {...finalProps} />;

  return (
    <Image
      alt={alt ?? ''}
      {...otherProps}
      style={getCombinedStylesForImage(imageStyle, finalProps.style)}
      onError={onErrorHandler}
      onPartialLoad={onPartialLoadHandler}
      onLoad={onLoadHandler}
    />
  );
};

export default ImageAvatar;
