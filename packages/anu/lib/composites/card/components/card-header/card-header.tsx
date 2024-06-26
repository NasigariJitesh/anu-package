/* eslint-disable unicorn/no-nested-ternary */
import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib/primitives';

import { CardHeaderProps } from '../../types/card';
import { getCardHeaderStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Card Header
 *
 * @param {CardHeaderProps} props - all the properties related to the card header
 */
const CardHeader = (props: CardHeaderProps) => {
  const theme = useTheme();
  const finalProps = { ...defaultProps, ...props };

  const {
    containerStyle,
    actionContainerStyle,
    avatarContainerStyle,
    headingContainerStyle,
    headingStyle,
    subHeadingStyle,
  } = getCardHeaderStyle(theme);

  return (
    <Container disableGutters flexDirection='row' style={containerStyle}>
      {finalProps.avatar ? (
        <Container disableGutters style={avatarContainerStyle}>
          {finalProps.avatar}
        </Container>
      ) : null}
      <Container disableGutters style={headingContainerStyle}>
        {typeof finalProps.heading === 'string' ? (
          <Typography.Body style={headingStyle}>{finalProps.heading}</Typography.Body>
        ) : (
          finalProps.heading
        )}
        {finalProps.subHeading && typeof finalProps.heading === 'string' ? (
          <Typography.Body style={subHeadingStyle}>{finalProps.subHeading}</Typography.Body>
        ) : (
          finalProps.subHeading
        )}
      </Container>
      {'action' in finalProps && finalProps.action ? (
        <Container disableGutters style={actionContainerStyle}>
          {finalProps.action}
        </Container>
      ) : null}
    </Container>
  );
};

export default CardHeader;
