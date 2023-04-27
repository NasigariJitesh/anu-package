import { getCombinedStylesForView } from 'common/utils';
import { Container } from 'lib/primitives';

import { DialogActionsProps } from '../../types';
import { getDialogActionsStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Dialog Actions
 *
 * @param {DialogActionsProps} props - all the properties related to the dialog actions
 */
const DialogActions = (props: DialogActionsProps) => {
  const finalProps = { ...defaultProps, ...props };

  const styles = getDialogActionsStyle();

  return (
    <Container
      disableGutters
      flexDirection='row'
      align={finalProps.align}
      justify={finalProps.justify}
      style={getCombinedStylesForView(styles.container, finalProps.style)}
    >
      {finalProps.children}
    </Container>
  );
};

export default DialogActions;
