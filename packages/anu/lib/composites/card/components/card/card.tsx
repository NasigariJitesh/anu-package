import { Container } from 'lib/primitives';

import { CardProps } from '../../types/card';
import { getCardStyles } from '../../utils';
import { defaultProps, defaultSxProps } from './default';

/**
 * Component for Container
 *
 * @param {Partial<CardProps>} props - all the properties related to the card component
 */
const Card = (props: Partial<CardProps>) => {
  const finalProps = { ...defaultProps, sx: defaultSxProps, ...props };
  const { style, sx } = getCardStyles(finalProps);
  const { variant, onHover, ...componentProps } = finalProps;

  return (
    <Container {...componentProps} style={[style, props.style]} sx={sx}>
      {props.children}
    </Container>
  );
};

export default Card;
