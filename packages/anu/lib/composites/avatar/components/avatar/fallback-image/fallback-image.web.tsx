import { getCombinedStylesForImage } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Image } from 'lib';

import PlaceHolderImage from '../../../assets/placeholder.png';
import { ImageAvatarProps } from '../../../types';
import { getImageAvatarStyle } from '../../../utils';

/**
 * Fallback Component for Web
 *
 * @param props
 * @returns - ImageAvatarProps
 */
const FallbackImage = (props: ImageAvatarProps) => {
  const theme = useTheme();

  const { imageStyle } = getImageAvatarStyle(props, theme);

  return (
    // @ts-ignore
    <Image
      {...props}
      alt={props.alt ?? ''}
      source={{ uri: PlaceHolderImage.src }}
      style={getCombinedStylesForImage(imageStyle, props.style)}
    />
  );
};

export default FallbackImage;
