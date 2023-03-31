/* eslint-disable no-secrets/no-secrets */
import { ImageProps } from '../../../types';
import Image from '../';

/**
 * Fallback Component for iOS & android
 *
 * @param props
 * @returns - ImageAvatarProps
 */
const FallbackImage = (props: ImageProps) => {
  const link =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png';
  const { alt, source, ...otherProps } = props;

  return <Image {...otherProps} alt={alt ?? ''} source={{ uri: link }} />;
};

export default FallbackImage;
