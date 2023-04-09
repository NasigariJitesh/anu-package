import { IconButton } from 'lib/primitives/button/components/icon-button';
import Container from 'lib/primitives/layout/components/container';
import Typography from 'lib/primitives/typography/components';

import { SideSheetProps } from '../../types';
import { getHeaderStyles } from '../../utils';

/**
 * Display the header part for the side sheet
 *
 * @param props - side sheet props along with scrollTo function
 */
const Header = (props: SideSheetProps & { scrollTo: (destination: number) => void }) => {
  const { headline, onBackButtonPress, onCloseButtonPress, width } = props;

  const onCloseButtonPressHandler = () => {
    props.scrollTo(0);

    if (onCloseButtonPress) onCloseButtonPress();
  };

  const { backIconStyle, closeIconStyle, containerStyle, headingStyle } = getHeaderStyles();

  return (
    <Container
      disableGutters
      maxWidth={width}
      flexDirection='row'
      align='center'
      justify='space-between'
      style={containerStyle}
    >
      <Container flexDirection='row' align='center' disableGutters>
        {onBackButtonPress ? (
          <IconButton
            onPress={onBackButtonPress}
            icon={{
              name: 'arrow-back',
            }}
            containerStyle={backIconStyle}
            type='standard'
          />
        ) : null}
        <Typography.Title size='small' style={headingStyle}>
          {headline}
        </Typography.Title>
      </Container>
      <IconButton
        onPress={onCloseButtonPressHandler}
        icon={{
          name: 'clear',
        }}
        type='standard'
        containerStyle={closeIconStyle}
      />
    </Container>
  );
};

export default Header;
