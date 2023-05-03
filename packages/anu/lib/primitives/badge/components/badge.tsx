import { getCombinedStylesForText, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';

import { Container } from '../../layout';
import Typography from '../../typography';
import { BadgeProps, NumberBadgeProps, StringBadgeProps } from '../types';
import { getBadgeStyle, getBadgeValue, getContainerStyle, getContentStyle, isNumberBadge, showBadge } from '../utils';
import { defaultProps } from './default';

/**
 * The badge Component
 *
 * @param {BadgeProps} props - the properties of the badge component
 */
const Badge = (props: BadgeProps) => {
  const finalProps = isNumberBadge(props)
    ? ({ ...defaultProps, ...props } satisfies NumberBadgeProps)
    : ({ ...defaultProps, ...props } satisfies StringBadgeProps);

  const theme = useTheme();

  const containerStyle = getContainerStyle(props);

  const contentStyle = getContentStyle(props, theme);

  const { style: badgeStyle, sx: badgeSx } = getBadgeStyle(props, theme);

  return (
    <Container disableGutters style={containerStyle}>
      {showBadge(props) ? (
        <Container
          disableGutters
          style={getCombinedStylesForView(badgeStyle, finalProps.style)}
          sx={{ ...badgeSx, ...finalProps.sx }}
        >
          <Typography.Body style={getCombinedStylesForText(contentStyle, props.style)}>
            {getBadgeValue(props)}
          </Typography.Body>
        </Container>
      ) : null}

      {finalProps.children}
    </Container>
  );
};

export default Badge;
