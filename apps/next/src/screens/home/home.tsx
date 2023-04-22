/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Button, useSnackbar } from 'anu/lib';
import Container from 'anu/lib/primitives/layout/components/container';

const HomeScreen = () => {
  const { add, close } = useSnackbar();

  return (
    <Container flexDirection='column' sx={{ flex: 1, paddingTop: 30 }}>
      <Button.Text
        title='add snack'
        onPress={() => {
          add({
            content: 'First Snack',
            style: { height: 70 },
          });
        }}
      />
      <Button.Text
        title='add snack 2'
        onPress={() => {
          add({
            content:
              'This is very long snack, This is very long snack , This is very long snack, This is very long snack ,   This is very long snack, This is very long snack , This is very long snack, This is very long snack , This is very long snack, This is very long snack  ',
            action: { title: 'Close', onPress: close },
            icon: { icon: { name: 'close' }, type: 'standard', onPress: close },
            duration: 10_000,
          });
        }}
      />
    </Container>
  );
};

export default HomeScreen;
