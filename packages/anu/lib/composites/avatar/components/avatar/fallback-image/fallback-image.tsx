import { getCombinedStylesForImage } from 'anu/common/utils';
import { Image } from 'anu/lib';

import { ImageAvatarProps } from '../../../types';
import { getImageAvatarStyle } from '../../../utils';

/**
 * Fallback Component for iOS & android
 *
 * @param props
 * @returns - ImageAvatarProps
 */
const FallbackImage = (props: ImageAvatarProps) => {
  const link = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  const { imageStyle } = getImageAvatarStyle(props);
  const { size, variant, alt, source, ...otherProps } = props;

  return (
    <Image
      {...otherProps}
      alt={alt ?? ''}
      source={{ uri: link }}
      style={getCombinedStylesForImage(imageStyle, props.style)}
    />
  );
};

export default FallbackImage;
