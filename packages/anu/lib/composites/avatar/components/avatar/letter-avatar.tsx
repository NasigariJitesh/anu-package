import { getCombinedStylesForText, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import React from 'react';

import { LetterAvatarProps } from '../../types';
import { getLetterAvatarStyle } from '../../utils';
import { defaultLetterProps } from './default';

/**
 * Component for Letter Avatar
 *
 * @param {LetterAvatarProps} props - all the properties related to the letter avatar component
 */
const LetterAvatar = (props: LetterAvatarProps) => {
  const theme = useTheme();
  const finalProps = { ...defaultLetterProps, ...props };

  const { size, variant, name, lastName, textStyle, ...otherProps } = finalProps;

  const { containerStyle, typographyStyle } = getLetterAvatarStyle(finalProps, theme);
  return (
    <Container disableGutters {...otherProps} style={getCombinedStylesForView(containerStyle, otherProps.style)}>
      <Typography.Body style={getCombinedStylesForText(typographyStyle, textStyle)}>
        {name[0] + (lastName && lastName[0] ? lastName[0] : '')}
      </Typography.Body>
    </Container>
  );
};

export default LetterAvatar;
