import Icon from 'lib/primitives/icon/components/icon';
import { Container } from 'lib/primitives/layout/components/container/container';
import Typography from 'lib/primitives/typography/components';

import { AccordionHeaderProps } from '../../types';
import { getAccordionHeaderStyles } from '../../utils';
import { useAccordionContext } from '../accordion/accordion';

const AccordionHeader = (props: AccordionHeaderProps) => {
  const { collapse } = useAccordionContext();

  const style = getAccordionHeaderStyles(props);

  return (
    <Container sx={style.container} disableGutters flexDirection='row' align='center'>
      <Typography.Title {...props} />
      <Icon
        name={collapse ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
        {...props.iconProps}
        style={[style.icon, props.iconProps?.style]}
      />
    </Container>
  );
};

export default AccordionHeader;
