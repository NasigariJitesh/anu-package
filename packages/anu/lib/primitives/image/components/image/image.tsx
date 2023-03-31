import { getCombinedStylesForImage } from 'anu/common/utils';
import { Image as DripsyImage } from 'dripsy';
import { useState } from 'react';
import { ImageErrorEventData, ImageLoadEventData, NativeSyntheticEvent } from 'react-native';

import { ImageProps } from '../../types';
import { getImageStyle } from '../../utils';
import FallbackImage from './fallback-image';

const Image = (props: ImageProps) => {
  const [error, setError] = useState(false);

  const imageStyle = getImageStyle();

  /**
   * Handler for the onError callback of the image
   *
   * @param {NativeSyntheticEvent<ImageErrorEventData>} event - error event
   */
  const onErrorHandler = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    setError(true);
    if (props.onError) props.onError(event);
  };

  /**
   * Handler for the onPartialLoad callback of the image
   */
  const onPartialLoadHandler = () => {
    setError(true);
    if (props.onPartialLoad) props.onPartialLoad();
  };

  /**
   * Handler for the onLoad callback of the image
   *
   * @param {NativeSyntheticEvent<ImageLoadEventData>}event -load event
   */
  const onLoadHandler = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setError(false);
    if (props.onLoad) props.onLoad(event);
  };

  if (error) return <FallbackImage {...props} style={getCombinedStylesForImage(imageStyle, props.style)} />;
  return (
    <DripsyImage
      {...props}
      onError={onErrorHandler}
      onPartialLoad={onPartialLoadHandler}
      onLoad={onLoadHandler}
      style={getCombinedStylesForImage(imageStyle, props.style)}
    />
  );
};

export default Image;
