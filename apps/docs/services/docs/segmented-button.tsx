/* eslint-disable react-native/no-inline-styles */
import { Container, SegmentedButton, SegmentedButtonGroup } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ScrollView } from 'react-native';
import { ContentValues } from 'src/sections/content';
const style = {
  margin: 15,
};
const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', undefined, undefined, '600px', '750px'],
} as const;
export const segmentedButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
  mainDescription: 'Buttons help users navigate, interact, and engage with websites and apps.',

  heading: 'Segmented Buttons',
  subTitle:
    'Segmented buttons help people select options, switch views, or sort elements. There are two types of segmented buttons: single-select and multi-select.',
  properties: [
    {
      name: 'id',
      description: 'Id of the segmented button.',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
      description: 'The label/title for the regular button',
    },
    {
      name: 'selected',
      type: 'string | string[] (optional)',
      description: 'The ids of selected members of the segmented button group',
    },
    {
      name: 'icon',
      description: 'The icon component or the icon props for material icons.',
      type: 'IconType | ReactElement (optional)',
    },
    {
      name: 'onSelect',
      description: 'The callback when there is a press or click on the segmented button.',
      type: '(id: string) => void (optional)',
    },
    {
      name: 'multiSelect (Group Property)',
      type: 'boolean (optional)',
      description: 'whether the multiple segmented buttons can be selected at once',
      defaultValue: 'false',
    },
    {
      name: 'onPress (Group Property)',
      description: 'The callback when there is a press or click on the segmented buttons.',
      type: '(id: string) => void (optional)',
    },
    {
      name: 'containerStyle (Group Property)',
      description: 'The style for the segmented button group container.',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'style',
      description: 'The styles for the segmented button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'titleStyle',
      description: 'The styles for the label of the button.',
      type: 'StyleProp<TextStyle> (optional)',
    },
  ],
  examples: [
    {
      name: 'Default',
      id: 'default',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <SegmentedButtonGroup containerStyle={style}>
              <SegmentedButton id='segmentedButton1' title='Button 1' />
              <SegmentedButton id='segmentedButton2' title='Button 2' disabled />
              <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
              <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} />
            </SegmentedButtonGroup>
          </ScrollView>
        </Container>
      ),
      code: `<SegmentedButtonGroup>
  <SegmentedButton id='segmentedButton1' title='Button 1' />
  <SegmentedButton id='segmentedButton2' title='Button 2' disabled />
  <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
  <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} />
</SegmentedButtonGroup>`,
    },
    {
      name: 'Multi Select Segmented Button',
      id: 'multi-select-segmented-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <SegmentedButtonGroup multiSelect containerStyle={style}>
              <SegmentedButton id='segmentedButton1' title='Button 1' />
              <SegmentedButton id='segmentedButton2' title='Button 2' />
              <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
              <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
            </SegmentedButtonGroup>
          </ScrollView>
        </Container>
      ),
      code: `<SegmentedButtonGroup multiSelect>
  <SegmentedButton id='segmentedButton1' title='Button 1' />
  <SegmentedButton id='segmentedButton2' title='Button 2' />
  <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
  <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
</SegmentedButtonGroup>`,
    },
  ],
};

export const segmentedButtonIndex: HeadingProps = {
  heading: 'Segmented Button',
  links: [
    {
      title: 'Default',
      link: '#default',
    },
    {
      title: 'Multi Select Segmented Button ',
      link: '#multi-select-segmented-button',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
