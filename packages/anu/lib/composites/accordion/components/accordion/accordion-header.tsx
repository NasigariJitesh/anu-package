import { useTheme } from 'anu/config';
import Icon from 'anu/lib/primitives/icon';
import { Container } from 'anu/lib/primitives/layout';
import Typography from 'anu/lib/primitives/typography';

import { AccordionHeaderProps } from '../../types';
import { getAccordionHeaderStyles } from '../../utils';
import { useAccordionContext } from './accordion';

/**
 * Icon component renderer
 *
 * @param props - header props for accordion
 */
const RenderIcon = (props: AccordionHeaderProps) => {
  const { collapse } = useAccordionContext();

  const style = getAccordionHeaderStyles(useTheme());

  if (props.icon?.collapsed && collapse) return <>{props.icon.collapsed}</>;
  else if (props.icon?.open && !collapse) return <>{props.icon.open}</>;

  return (
    <Icon
      name={collapse ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
      {...props.iconProps}
      style={[style.icon, props.iconProps?.style]}
    />
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
      <Typography.Title {...props} />
      <RenderIcon {...props} />
    </Container>
  );
};

export default AccordionHeader;
