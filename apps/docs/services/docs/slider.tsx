import { Container, Icon, Slider } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
  width: '100%',
  maxWidth: 350,
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',
} as const;

const otherStyle = { height: 350 };
const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const sliderDocumentation: ContentValues = {
  mainHeading: 'sliderDocumentation:mainHeading',
  mainDescription: 'sliderDocumentation:mainDescription',
  properties: [
    {
      name: 'value',
      type: 'number  | number[]',
      description: 'sliderDocumentation:property-value-description',
    },
    {
      name: 'minimumValue',
      type: 'number (optional)',
      description: 'sliderDocumentation:property-minimumValue-description',
    },
    {
      name: 'maximumValue',
      type: 'number (optional)',
      description: 'sliderDocumentation:property-maximumValue-description',
    },
    {
      name: 'step',
      type: 'number (optional)',
      description: 'sliderDocumentation:property-step-description',
    },
    {
      name: 'onValueChange',
      type: ' (value: number) => void | (value: Array<number>) => void (optional)',
      description: 'sliderDocumentation:property-onValueChange-description',
    },
    {
      name: 'onSlidingStart',
      type: ' (value: number) => void | (value: Array<number>) => void (optional)',
      description: 'sliderDocumentation:property-onSlidingStart-description',
    },
    {
      name: 'onSlidingComplete',
      type: ' (value: number) => void | (value: Array<number>) => void (optional)',
      description: 'sliderDocumentation:property-onSlidingComplete-description',
    },
    {
      name: 'startFromZero',
      description: 'sliderDocumentation:property-startFromZero-description',
      type: 'boolean (optional)',
    },
    {
      name: 'vertical',
      description: 'sliderDocumentation:property-vertical-description',
      type: 'boolean (optional)',
    },
    {
      name: 'disabled',
      description: 'sliderDocumentation:property-disabled-description',
      type: 'boolean (optional)',
    },
    {
      name: 'thumbSize',
      description: 'sliderDocumentation:property-thumbSize-description',
      type: 'number (optional)',
    },
    {
      name: 'thumbTouchSize',
      description: 'sliderDocumentation:property-thumbTouchSize-description',
      type: 'number (optional)',
    },
    {
      name: 'trackClickable',
      description: 'sliderDocumentation:property-trackClickable-description',
      type: 'boolean (optional)',
      defaultValue: 'true',
    },
    {
      name: 'trackMarks',
      description: 'sliderDocumentation:property-trackMarks-description',
      type: 'number[] (optional)',
    },
    {
      name: 'activeTrackMarksColor',
      description: 'sliderDocumentation:property-activeTrackMarksColor-description',
      type: 'string (optional)',
    },
    {
      name: 'inactiveTrackMarksColor',
      description: 'sliderDocumentation:property-inactiveTrackMarksColor-description',
      type: 'string (optional)',
    },
    {
      name: 'activeTrackTintColor',
      description: 'sliderDocumentation:property-activeTrackTintColor-description',
      type: 'string (optional)',
    },
    {
      name: 'inactiveTrackTintColor',
      description: 'sliderDocumentation:property-inactiveTrackTintColor-description',
      type: 'string (optional)',
    },
    {
      name: 'thumbTintColor',
      description: 'sliderDocumentation:property-thumbTintColor-description',
      type: 'string (optional)',
    },
    {
      name: 'activeTrackStyle',
      description: 'sliderDocumentation:property-activeTrackStyle-description',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'inactiveTrackStyle',
      description: 'sliderDocumentation:property-inactiveTrackStyle-description',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'containerStyle',
      description: 'sliderDocumentation:property-containerStyle-description',
      type: 'StyleProp<ViewStyle> (optional)',
    },
  ],
  examples: [
    {
      name: 'sliderDocumentation:example1-name',
      id: 'continuous-slider',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Slider value={0.3} startFromZero />
          </Container>
          <Container disableGutters style={style}>
            <Slider value={0.3} startFromZero disabled />
          </Container>
        </Container>
      ),
      code: `<Slider value={0.3} startFromZero />
<Slider value={0.3} startFromZero disabled/>`,
    },
    {
      name: 'sliderDocumentation:example2-name',
      id: 'discrete-slider',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Slider value={3} minimumValue={1} maximumValue={7} step={1} />
          </Container>

          <Container disableGutters style={style}>
            <Slider value={3} minimumValue={1} maximumValue={7} step={1} disabled />
          </Container>
        </Container>
      ),
      code: `<Slider value={3} minimumValue={1} maximumValue={7} step={1} />
<Slider value={3} minimumValue={1} maximumValue={7} step={1} disabled />`,
    },
    {
      name: 'sliderDocumentation:example3-name',
      id: 'discrete-slider-with-trackmarks',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Slider
              value={3}
              minimumValue={1}
              maximumValue={7}
              step={1}
              trackMarks={[4, 6]}
              renderTrackMarkComponent={() => <Icon name='brightness-medium' size={16} />}
            />
          </Container>
        </Container>
      ),
      code: `<Slider
  value={3}
  minimumValue={1}
  maximumValue={7}
  step={1}
  trackMarks={[4, 6]}
  renderTrackMarkComponent={() => <Icon name='brightness-medium' size={16} />}
/>`,
    },
    {
      name: 'sliderDocumentation:example4-name',
      id: 'vertical-slider',
      component: (
        <Container disableGutters sx={{ ...flexStyle, ...otherStyle } as never}>
          <Container disableGutters style={style}>
            <Slider value={0.5} startFromZero vertical />
          </Container>
        </Container>
      ),
      code: '<Slider value={0.5} startFromZero vertical />',
    },
    {
      name: 'sliderDocumentation:example5-name',
      id: 'range-slider',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Slider value={[4, 6]} step={1} minimumValue={3} maximumValue={10} />
          </Container>
        </Container>
      ),
      code: '<Slider value={[4, 6]} step={1} minimumValue={3} maximumValue={10} />',
    },
  ],
  isExperimental: true,
};

export const sliderIndex: HeadingProps = {
  heading: 'sliderDocumentation:mainHeading',
  links: [
    {
      title: 'sliderDocumentation:example1-name',
      link: '#continuous-slider',
    },
    {
      title: 'sliderDocumentation:example2-name',
      link: '#discrete-slider',
    },

    {
      title: 'sliderDocumentation:example3-name',
      link: '#discrete-slider-with-trackmarks',
    },
    {
      title: 'sliderDocumentation:example4-name',
      link: '#vertical-slider',
    },
    {
      title: 'sliderDocumentation:example5-name',
      link: '#range-slider',
    },

    {
      link: '#props',
      title: 'content:props',
    },
  ],
};
