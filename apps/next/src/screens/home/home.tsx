import { Container } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';
import image from 'assets/icon.png';
import { Typography } from 'lib/primitives';

const HomeScreen = () => {
  return (
    <Container
      align='center'
      justify='center'
      sx={{ backgroundColor: 'red', height: 250, width: 250, margin: 10, padding: 10 }}
    >
      <Avatar source={{ uri: 'https://callstack.github.io/react-native-testing-library/img/owl.png0' }} />
    </Container>
  );
};

export default HomeScreen;
