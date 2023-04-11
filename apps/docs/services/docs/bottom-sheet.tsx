/* eslint-disable react-native/no-inline-styles */
import { Container, Image } from 'anu/lib';
import bottomsheetfull from 'assets/bottom-sheet.png';
import bottomsheet from 'assets/bottom-sheet-inactive.png';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;
const style = { width: 257, height: 558, margin: 10 };
export const bottomSheetDocumentation: ContentValues = {
  mainHeading: 'bottomSheetDocumentation:mainHeading',
  mainDescription: 'bottomSheetDocumentation:mainDescription',
  examples: [
    {
      name: 'bottomSheetDocumentation:example1-name',
      description: 'bottomSheetDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Image source={{ uri: bottomsheet.src }} style={style} alt='bottom-sheet' />
          <Image source={{ uri: bottomsheetfull.src }} style={style} alt='bottom-sheet-full' />
        </Container>
      ),
      code: `<BottomSheet >
  <Typography.Body>Industry</Typography.Body>
  <Checkbox id='Software' label='Software' />
  <Checkbox id='Marketing' label='Marketing' />
  <Checkbox id='Designing' label='Designing' />
  <Checkbox id='Hardware' label='Hardware' />
</BottomSheet>`,
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
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
