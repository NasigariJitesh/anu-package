/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config/dripsy/theme';
import { Button, Container, Typography } from 'anu/lib';
import { BottomSheet } from 'anu/lib/primitives';
import { BottomSheetReferenceProps } from 'anu/lib/primitives/bottom-sheet/types';
import { Text, View } from 'dripsy';
import { useCallback, useRef } from 'react';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const bottomSheetReference = useRef<BottomSheetReferenceProps | null>(null);
  const theme = useTheme();

  const onPress = useCallback(() => {
    const isActive = bottomSheetReference?.current?.isActive();

    if (isActive) bottomSheetReference?.current?.scrollTo(0);
    else bottomSheetReference?.current?.scrollTo(-700);
  }, []);

  const Example1 = () => {
    return (
      <Container>
        <Typography.Display>Header</Typography.Display>
        <Typography.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a repellat ab, magni reprehenderit libero
        </Typography.Body>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <View style={{ justifyContent: 'space-around', marginHorizontal: 10, height: 75 }}>
            <Text style={{ margin: 0, fontSize: 24, color: theme.colors?.$onSurface as never }}>List Item 1</Text>
            <Text style={{ margin: 0, fontSize: 16, color: theme.colors?.$onSurface as never }}>Price</Text>
          </View>
        </Container>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <View style={{ justifyContent: 'space-around', marginHorizontal: 10, height: 75 }}>
            <Text style={{ margin: 0, fontSize: 24, color: theme.colors?.$onSurface as never }}>List Item 2</Text>
            <Text style={{ margin: 0, fontSize: 16, color: theme.colors?.$onSurface as never }}>Price</Text>
          </View>
        </Container>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <View style={{ justifyContent: 'space-around', marginHorizontal: 10, height: 75 }}>
            <Text style={{ margin: 0, fontSize: 24, color: theme.colors?.$onSurface as never }}>List Item 3</Text>
            <Text style={{ margin: 0, fontSize: 16, color: theme.colors?.$onSurface as never }}>Price</Text>
          </View>
        </Container>
        <Button.Filled
          containerStyle={{ alignSelf: 'center', marginTop: 25 }}
          labelStyle={{ color: theme.colors?.$background as never }}
          title='Action Button'
        />
      </Container>
    );
  };

  // const Example3 = () => {
  //   return (
  //     <Container>
  //       <Container flexDirection='row' disableGutters align='center' style={{ hesight: 60 }}>
  //         <Icon name='share' size={30} />
  //         <Typography.Body size='large' style={{ marginLeft: 10 }}>
  //           Share
  //         </Typography.Body>
  //       </Container>
  //       <Container flexDirection='row' disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='cloud-upload' size={30} />
  //         <Typography.Body size='large' style={{ marginLeft: 10 }}>
  //           Upload
  //         </Typography.Body>
  //       </Container>
  //       <Container flexDirection='row' disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='content-copy' size={30} />
  //         <Typography.Body size='large' style={{ marginLeft: 10 }}>
  //           Copy
  //         </Typography.Body>
  //       </Container>
  //       <Container flexDirection='row' disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='print' size={30} />
  //         <Typography.Body size='large' style={{ marginLeft: 10 }}>
  //           Print
  //         </Typography.Body>
  //       </Container>
  //       <Container flexDirection='row' disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='delete' size={30} />
  //         <Typography.Body size='large' style={{ marginLeft: 10 }}>
  //           Delete
  //         </Typography.Body>
  //       </Container>
  //     </Container>
  //   );
  // };

  // const Example4 = () => {
  //   return (
  //     <Container flexDirection='row' justify='space-around'>
  //       <Container disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='share' size={30} />
  //         <Typography.Body size='large' style={{ top: -10 }}>
  //           Share
  //         </Typography.Body>
  //       </Container>
  //       <Container disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='cloud-upload' size={30} style={{ height: 30 }} />
  //         <Typography.Body size='large' style={{ top: -10 }}>
  //           Upload
  //         </Typography.Body>
  //       </Container>
  //       <Container disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='content-copy' size={30} style={{ height: 30 }} />
  //         <Typography.Body size='large' style={{ top: -10 }}>
  //           Copy
  //         </Typography.Body>
  //       </Container>
  //       <Container disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='print' size={30} style={{ height: 30 }} />
  //         <Typography.Body size='large' style={{ top: -10 }}>
  //           Print
  //         </Typography.Body>
  //       </Container>
  //       <Container disableGutters align='center' style={{ height: 60 }}>
  //         <Icon name='delete' size={30} style={{ height: 30 }} />
  //         <Typography.Body size='large' style={{ top: -10 }}>
  //           Delete
  //         </Typography.Body>
  //       </Container>
  //     </Container>
  //   );
  // };

  return (
    <View style={{ backgroundColor: '#E5E1E6' }}>
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, height: 500, width: 500, position: 'absolute', zIndex: 1 }}
      />
      <Container disableGutters sx={{ height: '100%', width: '100%' }}>
        <BottomSheet
          containerStyles={{ zIndex: 3, backgroundColor: 'white' }}
          startCoordinate={-300}
          ref={bottomSheetReference}
        >
          <Example1 />
        </BottomSheet>
      </Container>
    </View>
  );
};

export default HomeScreen;
