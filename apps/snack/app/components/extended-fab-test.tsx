import { Container, ExtendedFAB } from 'anu/lib';
import React from 'react';

const ExtendedFABScreen = () => {
  return (
    <Container>
      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} style={styles.extendedFab} />
      <ExtendedFAB
        title='Contact'
        icon={{ name: 'phone', props: { style: styles.iconStyle } }}
        style={styles.extendedFab1}
      />
      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} style={styles.extendedFab2} />
      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} style={styles.extendedFab3} />
    </Container>
  );
};

export default ExtendedFABScreen;

const styles = {
  extendedFab: {
    margin: 10,
  },
  extendedFab1: {
    flexDirection: 'row-reverse',
    margin: 10,
  } as const,
  extendedFab2: {
    alignItems: 'flex-end',
    borderRadius: 150,
    height: 120,
    justifyContent: 'flex-end',
    padding: 20,
    width: 280,
  } as const,
  extendedFab3: {
    '@press': {
      backgroundColor: 'blue',
    },
    backgroundColor: 'yellow',
    margin: 10,
    borderColor: 'red',
    borderWidth: 3,
  },
  iconStyle: {
    paddingLeft: 8,
  },
};
