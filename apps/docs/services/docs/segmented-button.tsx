import { Container, SegmentedButton, SegmentedButtonGroup } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const segmentedButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
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
      name: 'Basic',
      id: 'basic',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <SegmentedButtonGroup>
            <SegmentedButton id='segmentedButton1' title='Button 1' />
            <SegmentedButton id='segmentedButton2' title='Button 2' disabled />
            <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
            <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} />
          </SegmentedButtonGroup>
        </Container>
      ),
      code: `<Container disableGutters flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 700 }}>
      <SegmentedButtonGroup>
        <SegmentedButton id='segmentedButton1' title='Button 1' />
        <SegmentedButton id='segmentedButton2' title='Button 2' disabled />
        <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
        <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} />
      </SegmentedButtonGroup>
    </Container>`,
    },
    {
      name: 'Multi Select',
      id: 'multi-select',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <SegmentedButtonGroup multiSelect>
            <SegmentedButton id='segmentedButton1' title='Button 1' />
            <SegmentedButton id='segmentedButton2' title='Button 2' />
            <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
            <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
          </SegmentedButtonGroup>
        </Container>
      ),
      code: `<Container disableGutters flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 700 }}>
      <SegmentedButtonGroup multiSelect>
        <SegmentedButton id='segmentedButton1' title='Button 1' />
        <SegmentedButton id='segmentedButton2' title='Button 2' />
        <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
        <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
      </SegmentedButtonGroup>
    </Container>`,
    },
  ],
};

export const segmentedButtonIndex: HeadingProps = {
  heading: 'Segmented Button',
  links: [
    {
      components: [
        {
          title: 'Basic',
          link: '#basic',
        },
        {
          title: 'Multi Select',
          link: '#multi-select',
        },
      ],
      title: 'Examples',
      link: '#example',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
