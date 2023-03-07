import Icon from 'lib/primitives/icon/components/icon';
import { Container } from 'lib/primitives/layout/components/container/container';
import Typography from 'lib/primitives/typography/components';

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

  const style = getAccordionHeaderStyles();

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
  const style = getAccordionHeaderStyles();

  return (
    <Container sx={style.container} disableGutters flexDirection='row' align='center'>
      <Typography.Title {...props} />
      <RenderIcon {...props} />
    </Container>
  );
};

export default AccordionHeader;
