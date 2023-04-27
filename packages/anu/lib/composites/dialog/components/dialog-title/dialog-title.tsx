import { useTheme } from 'config/dripsy/theme';
import { Container, Icon, TouchableRipple, Typography } from 'lib/primitives';

import { DialogTitleProps } from '../../types';
import { getDialogTitleStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Dialog Title
 *
 * @param {DialogTitleProps} props - all the properties related to the dialog title
 */
const DialogTitle = (props: DialogTitleProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };

  const styles = getDialogTitleStyles(theme, finalProps);

  if (finalProps.type === 'full-screen') {
    return (
      <Container disableGutters style={styles.container}>
        <TouchableRipple style={styles.iconPressableStyle} onPress={finalProps.onDismiss}>
          <Icon name='close' size={24} color={theme.colors.$onSurface} />
        </TouchableRipple>
        <Typography.Body style={styles.titleStyle}>{finalProps.title}</Typography.Body>
        {finalProps.action}
      </Container>
    );
  }

  return finalProps.type === 'custom' ? (
    <Container disableGutters style={styles.container}>
      {finalProps.children}
    </Container>
  ) : (
    <Container disableGutters style={styles.container}>
      {finalProps.icon ? (
        'name' in finalProps.icon ? (
          <Icon style={styles.iconStyle} size={32} name={finalProps.icon.name as never} {...finalProps.icon.props} />
        ) : (
          finalProps.icon
        )
      ) : null}
      <Typography.Body style={styles.titleStyle}>{finalProps.title}</Typography.Body>
    </Container>
  );
};

export default DialogTitle;
