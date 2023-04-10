/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { BottomSheet, Checkbox, Container, Image, RadioButtonGroup, Typography } from 'anu/lib';
import RadioButton from 'anu/lib/primitives/radio-button';

const HomeScreen = () => {
  return (
    <Container align='center' justify='center' disableGutters sx={{ height: '100%', width: '100%' }}>
      {/* <Switch /> */}
      {/* <Container>
        <Image
          alt={'hey'}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
          style={{ height: 100, width: 100 }}
        />
      </Container> */}
      <BottomSheet>
        <Typography.Body>Industry</Typography.Body>
        <Checkbox id='Software' label='Software' />
        <Checkbox id='Marketing' label='Marketing' />
        <Checkbox id='Designing' label='Designing' />
        <Checkbox id='Hardware' label='Hardware' />
      </BottomSheet>
    </Container>
  );
};

export default HomeScreen;
