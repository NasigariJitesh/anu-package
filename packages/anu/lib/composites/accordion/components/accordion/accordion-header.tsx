import { useTheme } from 'anu/config';
import Icon from 'anu/lib/primitives/icon';
import { Container } from 'anu/lib/primitives/layout';
import Typography from 'anu/lib/primitives/typography';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { getCombinedStylesForText } from '../../../../../common/utils';
import { AccordionHeaderProps } from '../../types';
import { getAccordionHeaderStyles } from '../../utils';
import { useAccordionContext } from './accordion';

/**
 * Icon component renderer
 *
 * @param props - header props for accordion
 */
const RenderIcon = (props: AccordionHeaderProps) => {
  const { collapse, animatedHeight, height } = useAccordionContext();

  const style = getAccordionHeaderStyles(useTheme());

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: interpolate(animatedHeight.value, [0, height], [0, 180], Extrapolate.IDENTITY) + 'deg',
        },
      ],
    };
  }, [animatedHeight, interpolate, Extrapolate, height]);

  if (props.icon?.collapsed && collapse) return <>{props.icon.collapsed}</>;
  else if (props.icon?.open && !collapse) return <>{props.icon.open}</>;

  return (
    <Animated.View style={animatedStyle}>
      <Icon name={'keyboard-arrow-down'} {...props.iconProps} style={[style.icon, props.iconProps?.style]} />
    </Animated.View>
  );
};

/**
 * Header component for Accordion
 *
 * @param props - header props for accordion
 */
const AccordionHeader = (props: AccordionHeaderProps) => {
  const style = getAccordionHeaderStyles(useTheme());

  return (
    <Container sx={style.container} disableGutters flexDirection='row' align='center'>
      <Typography.Title
        {...props}
        style={getCombinedStylesForText(props.supportingText ? {} : style.title, props.style)}
      />
      {props.supportingText ? (
        <Typography.Body style={style.supportingText}>{props.supportingText}</Typography.Body>
      ) : null}
      <RenderIcon {...props} />
    </Container>
  );
};

export default AccordionHeader;
