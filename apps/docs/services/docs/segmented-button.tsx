/* eslint-disable react-native/no-inline-styles */
import { Container, SegmentedButton, SegmentedButtonGroup } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ScrollView } from 'react-native';
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
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;
export const segmentedButtonDocumentation: ContentValues = {
  mainHeading: 'segmentedButtonDocumentation:mainHeading',
  mainDescription: 'segmentedButtonDocumentation:mainDescription',
  heading: 'segmentedButtonDocumentation:heading',
  subTitle: 'segmentedButtonDocumentation:subTitle',
  properties: [
    {
      name: 'id',
      description: 'segmentedButtonDocumentation:property-id-description',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
      description: 'segmentedButtonDocumentation:property-title-description',
    },
    {
      name: 'selected',
      type: 'string | string[]',
      optional: true,
      description: 'segmentedButtonDocumentation:property-selected-description',
    },
    {
      name: 'icon',
      description: 'segmentedButtonDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
      optional: true,
    },
    {
      name: 'onSelect',
      description: 'segmentedButtonDocumentation:property-onSelect-description',
      type: '(id: string) => void',
      optional: true,
    },
    {
      name: 'multiSelect',
      type: 'boolean',
      optional: true,
      groupProperty: true,
      description: 'segmentedButtonDocumentation:property-multiSelect-description',
      defaultValue: 'false',
    },
    {
      name: 'onPress',
      description: 'segmentedButtonDocumentation:property-onPress-description',
      type: '(id: string) => void',
      optional: true,
      groupProperty: true,
    },
    {
      name: 'containerStyle',
      description: 'segmentedButtonDocumentation:property-containerStyle-description',
      type: 'StyleProp<ViewStyle>',
      groupProperty: true,
      optional: true,
    },
    {
      name: 'style',
      description: 'segmentedButtonDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'titleStyle',
      description: 'segmentedButtonDocumentation:property-titleStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'segmentedButtonDocumentation:example1-name',
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
      name: 'segmentedButtonDocumentation:example2-name',
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
  heading: 'segmentedButtonDocumentation:heading',
  links: [
    {
      title: 'segmentedButtonDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'segmentedButtonDocumentation:example2-name',
      link: '#multi-select-segmented-button',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
