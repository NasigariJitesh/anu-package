/* eslint-disable unicorn/no-nested-ternary */
import { useTheme } from 'anu/config';
import { Container, Typography } from 'lib/primitives';

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
    imageContainerStyle,
    headingStyle,
    subHeadingStyle,
    sx,
  } = getCardHeaderStyle(theme);

  return (
    <Container disableGutters flexDirection='row' style={containerStyle} sx={sx}>
      {finalProps.avatar ? (
        <Container disableGutters style={avatarContainerStyle} sx={sx}>
          {finalProps.avatar}
        </Container>
      ) : null}
      <Container disableGutters style={headingContainerStyle} sx={sx}>
        <Typography.Body style={headingStyle}>{finalProps.heading}</Typography.Body>
        {finalProps.subHeading ? (
          <Typography.Body style={subHeadingStyle}>{finalProps.subHeading}</Typography.Body>
        ) : null}
      </Container>
      {'action' in finalProps && finalProps.action ? (
        <Container disableGutters style={actionContainerStyle} sx={sx}>
          {finalProps.action}
        </Container>
      ) : 'image' in finalProps && finalProps.image ? (
        <Container disableGutters style={imageContainerStyle} sx={sx}>
          {finalProps.image}
        </Container>
      ) : null}
    </Container>
  );
};

export default CardHeader;
