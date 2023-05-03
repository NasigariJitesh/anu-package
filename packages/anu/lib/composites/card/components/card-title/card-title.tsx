import { useTheme } from 'anu/config/dripsy/theme';
import { Container, Typography } from 'anu/lib/primitives';

import { CardTitleProps } from '../../types/card';
import { getCardTitleStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Card Title
 *
 * @param {CardTitleProps} props - all the properties related to the card title
 */
const CardTitle = (props: CardTitleProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };

  const { style, sx, titleStyle, subTitleStyle } = getCardTitleStyle(theme);

  return finalProps.type === 'custom' ? (
    <Container disableGutters style={style} sx={sx}>
      {finalProps.children}
    </Container>
  ) : (
    <Container disableGutters style={style} sx={sx}>
      <Typography.Body style={titleStyle}>{finalProps.title}</Typography.Body>
      {finalProps.subTitle ? <Typography.Body style={subTitleStyle}>{finalProps.subTitle}</Typography.Body> : null}
    </Container>
  );
};

export default CardTitle;
