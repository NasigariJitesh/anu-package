import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import React from 'react';

import { ChildrenAvatarProps } from '../../types';
import { getLetterAvatarStyle } from '../../utils';
import { defaultChildrenProps } from './default';

/**
 * Component for Children Avatar
 *
 * @param {ChildrenAvatarProps} props - all the properties related to the children avatar component
 */
const ChildrenAvatar = (props: ChildrenAvatarProps) => {
  const theme = useTheme();
  const finalProps = { ...defaultChildrenProps, ...props };

  const { size, variant, children, ...otherProps } = finalProps;
  const { containerStyle, containerSx, typographyStyle } = getLetterAvatarStyle(finalProps, theme);

  return (
    <Container
      disableGutters
      {...otherProps}
      style={getCombinedStylesForView(containerStyle, otherProps.style)}
      sx={{ ...containerSx, ...otherProps.sx }}
    >
      {typeof children === 'string' || children instanceof String ? (
        <Typography.Body style={typographyStyle}>{children}</Typography.Body>
      ) : (
        <>{children}</>
      )}
    </Container>
  );
};

export default ChildrenAvatar;
