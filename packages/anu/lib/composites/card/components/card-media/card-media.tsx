import { getCombinedStylesForImage } from 'common/utils';
import { Image } from 'lib/primitives';

import { CardMediaProps } from '../../types/card';
import { getCardMediaStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Card Actions
 *
 * @param {CardMediaProps} props - all the properties related to the card actions
 */
const CardMedia = (props: CardMediaProps) => {
  const finalProps = { ...defaultProps, ...props } as CardMediaProps;

  const { style } = getCardMediaStyle(finalProps);

  return (
    <Image
      {...finalProps}
      alt={finalProps.alt ?? 'cardMedia'}
      style={getCombinedStylesForImage(style, finalProps.style)}
    />
  );
};

export default CardMedia;
