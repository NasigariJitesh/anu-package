/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-native/no-inline-styles */
import { Container, Image } from 'anu/lib';
import BottomSheetExample31Dark from 'assets/bottom-sheet-example-3.1-dark.jpg';
import BottomSheetExample31Light from 'assets/bottom-sheet-example-3.1-light.jpg';
import BottomSheetExample32Dark from 'assets/bottom-sheet-example-3.2-dark.jpg';
import BottomSheetExample32Light from 'assets/bottom-sheet-example-3.2-light.jpg';
import BottomSheetExample1Dark from 'assets/bottom-sheet-standard-dark.gif';
import BottomSheetExample1Light from 'assets/bottom-sheet-standard-light.gif';
import BottomSheetExample2Dark from 'assets/bottom-sheet-with-modal-dark.gif';
import BottomSheetExample2Light from 'assets/bottom-sheet-with-modal-light.gif';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { View } from 'react-native';
import { useMenuContext } from 'screens/common/provider';

const flexStyle = {
  flexWrap: 'wrap',
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

const Example3 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters sx={flexStyle as never}>
      {isDarkTheme ? (
        <Image
          source={{ uri: BottomSheetExample31Light.src }}
          style={{ height: 300, width: 359 }}
          alt='bottom-sheet-full'
        />
      ) : (
        <Image source={{ uri: BottomSheetExample31Dark.src }} style={{ height: 300, width: 359 }} alt='bottom-sheet' />
      )}
      <View style={{ marginVertical: 30 }} />
      {isDarkTheme ? (
        <Image
          source={{ uri: BottomSheetExample32Light.src }}
          style={{ height: 150, width: 369 }}
          alt='bottom-sheet-full'
        />
      ) : (
        <Image source={{ uri: BottomSheetExample32Dark.src }} style={{ height: 150, width: 369 }} alt='bottom-sheet' />
      )}
    </Container>
  );
};

const Example2 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters sx={flexStyle as never}>
      {isDarkTheme ? (
        <img src={BottomSheetExample2Light.src} style={{ height: 848, width: 384 }} alt='bottom-sheet-full' />
      ) : (
        <img src={BottomSheetExample2Dark.src} style={{ height: 848, width: 384 }} alt='bottom-sheet' />
      )}
      <View style={{ marginVertical: 30 }} />
    </Container>
  );
};

const Example1 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters sx={flexStyle as never}>
      {isDarkTheme ? (
        <img src={BottomSheetExample1Dark.src} style={{ height: 848, width: 384 }} alt='bottom-sheet' />
      ) : (
        <img src={BottomSheetExample1Light.src} style={{ height: 848, width: 384 }} alt='bottom-sheet-full' />
      )}
      <View style={{ marginVertical: 30 }} />
    </Container>
  );
};

export const bottomSheetDocumentation: ContentValues = {
  mainHeading: 'bottomSheetDocumentation:mainHeading',
  mainDescription: 'bottomSheetDocumentation:mainDescription',
  examples: [
    {
      name: 'bottomSheetDocumentation:example1-name',
      description: 'bottomSheetDocumentation:example1-description',
      id: 'default',
      component: <Example1 />,
      code: '',
    },
    {
      name: 'bottomSheetDocumentation:example2-name',
      description: 'bottomSheetDocumentation:example2-description',
      id: 'sheet-with-modal',
      component: <Example2 />,
      code: '',
    },
    {
      name: 'bottomSheetDocumentation:example3-name',
      description: 'bottomSheetDocumentation:example3-description',
      id: 'sheet-with-menu',
      component: <Example3 />,
      code: '',
    },
  ],
  properties: [
    {
      name: 'height',
      optional: true,
      type: 'number',
      description: 'bottomSheetDocumentation:property-height-description',
      defaultValue: 'equal to screen height',
    },
    {
      name: 'startCoordinate',
      optional: true,
      type: 'number',
      description: 'bottomSheetDocumentation:property-startCoordinate-description',
      defaultValue: '0',
    },
    {
      name: 'damping',
      description: 'bottomSheetDocumentation:property-damping-description',
      optional: true,
      type: 'number',
      defaultValue: '50',
    },
    {
      name: 'children',
      description: 'bottomSheetDocumentation:property-children-description',
      optional: true,
      type: 'ReactChildren',
    },
    {
      name: 'hideDragHandle',
      description: 'bottomSheetDocumentation:property-hideDragHandle-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'handleStyles',
      description: 'bottomSheetDocumentation:property-handleStyles-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'containerStyles',
      description: 'bottomSheetDocumentation:property-containerStyles-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
};

export const bottomSheetIndex: HeadingProps = {
  heading: 'bottomSheetDocumentation:mainHeading',
  links: [
    {
      title: 'bottomSheetDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'bottomSheetDocumentation:example2-name',
      link: '#sheet-with-modal',
    },
    {
      title: 'bottomSheetDocumentation:example3-name',
      link: '#sheet-with-menu',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
