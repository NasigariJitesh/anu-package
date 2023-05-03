import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config/dripsy/theme';
import { Container } from 'anu/lib/primitives';

import { CardProps } from '../../types/card';
import { getCardStyles } from '../../utils';
import { defaultProps, defaultSxProps } from './default';

/**
 * Component for Container
 *
 * @param {CardProps} props - all the properties related to the card component
 */
const Card = (props: CardProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, sx: defaultSxProps(theme), ...props };

  const { style, sx } = getCardStyles(finalProps, theme);
  const { variant, ...componentProps } = finalProps;

  return (
    <Container disableGutters {...componentProps} style={getCombinedStylesForView(style, finalProps.style)} sx={sx}>
      {props.children}
    </Container>
  );
};

export default Card;
