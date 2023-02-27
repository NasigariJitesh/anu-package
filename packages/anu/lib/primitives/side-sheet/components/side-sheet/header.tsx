import { View } from 'dripsy';
import { IconButton } from 'lib/primitives/button/components/icon-button';
import Container from 'lib/primitives/layout/components/container';
import Typography from 'lib/primitives/typography/components';

import { SideSheetProps } from '../../types';

/**
 * Display the header part for the side sheet
 *
 * @param props - side sheet props along with scrollTo function
 */
const Header = (props: SideSheetProps & { scrollTo: (destination: number) => void }) => {
  if (!props.headerProps) return null;

  const { headline, onBackButtonPress, onCloseButtonPress } = props.headerProps;

  const onCloseButtonPressHandler = () => {
    props.scrollTo(0);

    if (onCloseButtonPress) onCloseButtonPress();
  };

  return (
    <Container
      maxWidth={props.width}
      sx={{ backgroundColor: 'red' }}
      flexDirection='row'
      align='center'
      justify='space-between'
    >
      <View>
        {onBackButtonPress ? (
          <IconButton
            onPress={onBackButtonPress}
            icon={{
              name: 'arrow-back',
            }}
            type='standard'
          />
        ) : null}
        <Typography.Title size='small'>{headline}</Typography.Title>
      </View>
      <IconButton
        onPress={onCloseButtonPressHandler}
        icon={{
          name: 'clear',
        }}
        type='standard'
      />
    </Container>
  );
};

export default Header;
