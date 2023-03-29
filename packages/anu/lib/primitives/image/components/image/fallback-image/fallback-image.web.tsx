import PlaceHolderImage from 'anu/assets/image-placeholder.png';

import { ImageProps } from '../../../types';
import Image from '../';

/**
 * Fallback Component for Web
 *
 * @param props
 * @returns - ImageAvatarProps
 */
const FallbackImage = (props: ImageProps) => {
  const { alt, source, ...otherProps } = props;
  return <Image {...otherProps} alt={alt ?? ''} source={{ uri: PlaceHolderImage.src }} />;
};

export default FallbackImage;
