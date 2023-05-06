/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Container, Icon, Switch, SwitchProps } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const StateSwitch = (props: Partial<SwitchProps>) => {
  const [state, setState] = useState(props.value);

  const onChange = () => {
    setState((previous) => !previous);
  };

  return <Switch {...props} value={state} onValueChange={onChange} />;
};

export const switchDocumentation: ContentValues = {
  mainHeading: 'switchDocumentation:mainHeading',
  mainDescription: 'switchDocumentation:mainDescription',
  properties: [
    {
      name: 'value',
      description: 'switchDocumentation:property-value-description',
      type: 'boolean',
    },
    {
      name: 'size',
      description: 'switchDocumentation:property-size-description',
      type: 'number',
    },
    {
      name: 'iconOn',
      description: 'switchDocumentation:property-iconOn-description',
      type: 'React.ReactElement',
      optional: true,
    },
    {
      name: 'iconOff',
      description: 'switchDocumentation:property-iconOff-description',
      type: 'React.ReactElement',
      optional: true,
    },
    {
      name: 'onChange',
      description: 'switchDocumentation:property-onChange-description',
      type: '(() => Promise<void> | void)',
      optional: true,
    },
    {
      name: 'thumbStyle',
      description: 'switchDocumentation:property-thumbStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'trackStyle',
      description: 'switchDocumentation:property-trackStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'switchDocumentation:example1-name',
      id: 'default',
      code: `<Switch value={true} />
<Switch value={false} />
<Switch value={true} disabled />
<Switch value={false} disabled />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters sx={style as never}>
            <StateSwitch value={true} />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch value={false} />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch value={true} disabled />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch value={false} disabled />
          </Container>
        </Container>
      ),
    },
    {
      name: 'switchDocumentation:example2-name',
      id: 'icon',
      code: `<Switch value={true} iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />} iconOff={<Icon name='check' size={12} style={{ color: '#fff' }}}/>
<Switch value={false} iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />} iconOff={<Icon name='check' size={12} style={{ color: '#fff' }} />} />
<Switch value={true} disabled iconOn={<Icon name='check' style={{ color: '#4D53B73E' }} />} />
<Switch value={false} disabled iconOff={<Icon name='check' size={12} style={{ color: '#E4E1EC' }} />} />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters sx={style as never}>
            <StateSwitch
              value={true}
              iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />}
              iconOff={<Icon name='check' size={12} style={{ color: '#fff' }} />}
            />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch
              value={false}
              iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />}
              iconOff={<Icon name='check' size={12} style={{ color: '#fff' }} />}
            />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch value={true} disabled iconOn={<Icon name='check' style={{ color: '#4D53B73E' }} />} />
          </Container>
          <Container disableGutters sx={style as never}>
            <StateSwitch
              value={false}
              disabled
              iconOff={<Icon name='check' size={12} style={{ color: '#E4E1EC' }} />}
            />
          </Container>
        </Container>
      ),
    },
  ],
};

export const switchIndex: HeadingProps = {
  heading: 'switchDocumentation:mainHeading',
  links: [
    {
      title: 'switchDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'switchDocumentation:example2-name',
      link: '#icon',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
