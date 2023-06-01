import { getCombinedStylesForView } from 'anu/common/utils';
import { Container } from 'anu/lib/primitives';

import { CardContentProps } from '../../types/card';
import { getCardContentStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Card Content
 *
 * @param {CardContentProps} props - all the properties related to the card content
 */
const CardContent = (props: CardContentProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { style } = getCardContentStyle();

  return (
    <Container disableGutters style={getCombinedStylesForView(style, finalProps.style)}>
      {finalProps.children}
    </Container>
  );
};

export default CardContent;
