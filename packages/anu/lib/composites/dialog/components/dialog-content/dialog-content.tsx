import { getCombinedStylesForView } from 'common/utils';
import { Container } from 'lib/primitives';

import { DialogContentProps } from '../../types';
import { getDialogContentStyle } from '../../utils';

/**
 * Component for Dialog Content
 *
 * @param {DialogContentProps} props - all the properties related to the Dialog content
 */
const DialogContent = (props: DialogContentProps) => {
  const finalProps = { ...props };

  const styles = getDialogContentStyle();

  return (
    <Container disableGutters style={getCombinedStylesForView(styles.container, finalProps.style)}>
      {finalProps.children}
    </Container>
  );
};

export default DialogContent;
