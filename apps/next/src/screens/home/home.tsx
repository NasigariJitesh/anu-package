/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config/dripsy/theme';
import { Button, Icon, Image, TouchableRipple } from 'anu/lib';
import BottomSheet from 'anu/lib/primitives/bottom-sheet/components';
import { BottomSheetReferenceProps } from 'anu/lib/primitives/bottom-sheet/types';
import Checkbox from 'anu/lib/primitives/checkbox/components/checkbox';
import Container from 'anu/lib/primitives/layout/components/container';
import Typography from 'anu/lib/primitives/typography/components';
import { Text, View } from 'dripsy';
import { useCallback, useRef } from 'react';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const bottomSheetReference = useRef<BottomSheetReferenceProps | null>(null);
  const theme = useTheme();

  const onPress = useCallback(() => {
    const isActive = bottomSheetReference?.current?.isActive();

    if (isActive) bottomSheetReference?.current?.scrollTo(-225);
    else bottomSheetReference?.current?.scrollTo(-400);
  }, []);

  const Example1 = () => {
    return (
      <Container>
        <Typography.Display>Header</Typography.Display>
        <Typography.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a repellat ab, magni reprehenderit libero
        </Typography.Body>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <Image
            source={{ uri: 'https;??adjkhadkj' }}
            style={{ height: 75, width: 75, borderRadius: 10 }}
            alt='hello'
          />
          <View style={{ justifyContent: 'space-around', marginHorizontal: 10, height: 75 }}>
            <Text style={{ margin: 0, fontSize: 24, color: theme.colors?.$onSurface as never }}>List Item 1</Text>
            <Text style={{ margin: 0, fontSize: 16, color: theme.colors?.$onSurface as never }}>Price</Text>
          </View>
        </Container>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <Image
            source={{ uri: 'https;??adjkhadkj' }}
            style={{ height: 75, width: 75, borderRadius: 10 }}
            alt='hello'
          />
          <View style={{ justifyContent: 'space-around', marginHorizontal: 10, height: 75 }}>
            <Text style={{ margin: 0, fontSize: 24, color: theme.colors?.$onSurface as never }}>List Item 2</Text>
            <Text style={{ margin: 0, fontSize: 16, color: theme.colors?.$onSurface as never }}>Price</Text>
          </View>
        </Container>
        <Container style={{ marginVertical: 20 }} flexDirection='row' align='center' disableGutters>
          <Image
            source={{ uri: 'https;??adjkhadkj' }}
            style={{ height: 75, width: 75, borderRadius: 10 }}
            alt='hello'
          />
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

  const Example2 = () => {
    return (
      <Container disableGutters>
        <Typography.Display size='small' style={{ marginBottom: 20, marginLeft: 10 }}>
          Industry
        </Typography.Display>

        <Container disableGutters flexDirection='row'>
          <View style={{ alignItems: 'flex-start', marginRight: 50 }}>
            <Checkbox id='1' label='Software' selected />
            <Checkbox id='2' label='Marketing' />
            <Checkbox id='3' label='Construction' />
          </View>
          <View style={{ alignItems: 'flex-start' }}>
            <Checkbox id='4' label='Hardware' />
            <Checkbox id='5' label='Designing' />
            <Checkbox id='6' label='Plumbing' />
          </View>
        </Container>
      </Container>
    );
  };

  const Example3 = () => {
    return (
      <Container flexDirection='row' justify='space-around'>
        <Container disableGutters align='center' style={{ height: 60 }}>
          <Icon name='share' size={30} />
          <Typography.Body size='large' style={{ top: -10 }}>
            Share
          </Typography.Body>
        </Container>
        <Container disableGutters align='center' style={{ height: 60 }}>
          <Icon name='cloud-upload' size={30} style={{ height: 30 }} />
          <Typography.Body size='large' style={{ top: -10 }}>
            Upload
          </Typography.Body>
        </Container>
        <Container disableGutters align='center' style={{ height: 60 }}>
          <Icon name='content-copy' size={30} style={{ height: 30 }} />
          <Typography.Body size='large' style={{ top: -10 }}>
            Copy
          </Typography.Body>
        </Container>
        <Container disableGutters align='center' style={{ height: 60 }}>
          <Icon name='print' size={30} style={{ height: 30 }} />
          <Typography.Body size='large' style={{ top: -10 }}>
            Print
          </Typography.Body>
        </Container>
        <Container disableGutters align='center' style={{ height: 60 }}>
          <Icon name='delete' size={30} style={{ height: 30 }} />
          <Typography.Body size='large' style={{ top: -10 }}>
            Delete
          </Typography.Body>
        </Container>
      </Container>
    );
  };

  return (
    <Container flexDirection='column' justify='center' align='center' sx={{ flex: 1, paddingTop: 20 }}>
      <TouchableRipple onPress={() => console.log('Pressed')}>
        <Container align='center' justify='center' sx={{ height: 200, width: 200 }}>
          <Typography.Body>Press anywhere</Typography.Body>
        </Container>
      </TouchableRipple>
    </Container>
  );
};

export default HomeScreen;
