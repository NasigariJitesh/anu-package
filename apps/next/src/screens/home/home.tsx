/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Container, Image, Switch } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';

import IMAGE from '../../../assets/icon.png';

const HomeScreen = () => {
  return (
    <Container
      align='center'
      justify='center'
      sx={{ backgroundColor: 'red', height: 250, width: 250, margin: 10, padding: 10 }}
    >
      <Switch />
      {/* <Container>
        <Image
          alt={'hey'}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
          style={{ height: 100, width: 100 }}
        />
      </Container> */}
    </Container>
  );
};

export default HomeScreen;
