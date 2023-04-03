import { getCombinedStylesForView } from 'common/utils';
import { Container } from 'lib/primitives';

import { CardActionsProps } from '../../types/card';
import { getCardActionsStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Card Actions
 *
 * @param {CardActionsProps} props - all the properties related to the card actions
 */
const CardActions = (props: CardActionsProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { style, sx } = getCardActionsStyle();

  return (
    <Container
      disableGutters
      flexDirection='row'
      align={finalProps.align}
      justify={finalProps.justify}
      style={getCombinedStylesForView(style, finalProps.style)}
      sx={{ ...sx, ...finalProps.sx }}
    >
      {finalProps.children}
    </Container>
  );
};

export default CardActions;
