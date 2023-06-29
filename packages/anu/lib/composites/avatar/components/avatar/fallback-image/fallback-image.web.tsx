import PlaceHolderImage from 'anu/assets/avatar-placeholder.png';
import { getCombinedStylesForImage } from 'anu/common/utils';
import { Image } from 'anu/lib';

import { ImageAvatarProps } from '../../../types';
import { getImageAvatarStyle } from '../../../utils';

/**
 * Fallback Component for Web
 *
 * @param props
 * @returns - ImageAvatarProps
 */
const FallbackImage = (props: ImageAvatarProps) => {
  const { imageStyle } = getImageAvatarStyle(props);
  const { size, variant, alt, source, ...otherProps } = props;
  return (
    <Image
      {...otherProps}
      alt={alt ?? ''}
      source={{ uri: PlaceHolderImage.src }}
      style={getCombinedStylesForImage(imageStyle, props.style)}
    />
  );
};

export default FallbackImage;
