import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config/dripsy/theme';
import { Container } from 'anu/lib/primitives';

import { CardProps } from '../../types/card';
import { getCardStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Container
 *
 * @param {CardProps} props - all the properties related to the card component
 */
const Card = (props: CardProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };

  const { style } = getCardStyles(finalProps, theme);
  const { variant, ...componentProps } = finalProps;

  return (
    <Container disableGutters {...componentProps} style={getCombinedStylesForView(style, finalProps.style)}>
      {props.children}
    </Container>
  );
};

export default Card;
