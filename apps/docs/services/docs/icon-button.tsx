import { Container, IconButton, IconButtonType } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
};

const IconWithToggle = ({ type }: { type: 'filled' | 'tonal' | 'outlined' | 'standard' }) => {
  const [toggleState, setToggleState] = useState(true);

  return (
    <Container disableGutters flexDirection='row' sx={flexStyle as never}>
      <IconButton
        type={type as IconButtonType}
        icon={{ name: toggleState ? 'flag' : 'outlined-flag' }}
        toggle
        selected={toggleState}
        onPress={() => {
          setToggleState(!toggleState);
        }}
        containerStyle={style}
      />
      <IconButton
        type={type as IconButtonType}
        icon={{ name: toggleState ? 'flag' : 'outlined-flag' }}
        toggle
        selected={toggleState}
        onPress={() => {
          setToggleState(!toggleState);
        }}
        disabled
        containerStyle={style}
      />
    </Container>
  );
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;
export const iconButtonDocumentation: ContentValues = {
  mainHeading: 'iconButtonDocumentation:mainHeading',
  mainDescription: 'iconButtonDocumentation:mainDescription',
  heading: 'iconButtonDocumentation:heading',
  subTitle: 'iconButtonDocumentation:subTitle',
  properties: [
    {
      name: 'type',
      type: " 'filled' | 'tonal' | 'outlined' | 'standard'",
      description: 'iconButtonDocumentation:property-type-description',
    },
    {
      name: 'icon',
      description: 'iconButtonDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
    },
    {
      name: 'toggle',
      description: 'iconButtonDocumentation:property-toggle-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'selected',
      description: 'iconButtonDocumentation:property-selected-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'containerStyle',
      description: 'iconButtonDocumentation:property-containerStyle-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'iconButtonDocumentation:property-pressableProps-description',
      type: 'pressableProps',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'iconButtonDocumentation:example1-name',
      id: 'filled-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='filled' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='filled' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='filled' icon={{ name: 'favorite' }} /> 
<IconButton type='filled' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'iconButtonDocumentation:example2-name',
      id: 'filled-icon-button-toggle',
      description: "Toggle doesn't automatically update the icon or icon variant, it needs to be changed manually",
      component: <IconWithToggle type='filled' />,
      code: `<IconButton 
  type='filled' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
/> 
<IconButton 
  type='filled' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
  disabled 
/>`,
    },
    {
      name: 'iconButtonDocumentation:example3-name',
      id: 'filled-tonal-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='tonal' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='tonal' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='tonal' icon={{ name: 'favorite' }} /> 
<IconButton type='tonal' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'iconButtonDocumentation:example4-name',
      id: 'filled-tonal-icon-button-toggle',
      component: <IconWithToggle type='tonal' />,
      code: `<IconButton 
  type='tonal' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
/> 
<IconButton 
  type='tonal' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
  disabled 
/>`,
    },
    {
      name: 'iconButtonDocumentation:example5-name',
      id: 'outlined-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='outlined' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='outlined' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='outlined' icon={{ name: 'favorite' }} /> 
<IconButton type='outlined' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'iconButtonDocumentation:example6-name',
      id: 'outlined-icon-button-toggle',
      component: <IconWithToggle type='outlined' />,
      code: `<IconButton 
  type='outlined' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
/> 
<IconButton 
  type='outlined' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
  disabled 
/>`,
    },
    {
      name: 'iconButtonDocumentation:example7-name',
      id: 'standard-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='standard' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='standard' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='standard' icon={{ name: 'favorite' }} /> 
<IconButton type='standard' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'iconButtonDocumentation:example8-name',
      id: 'standard-icon-button-toggle',
      component: <IconWithToggle type='standard' />,
      code: `<IconButton 
  type='standard' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
/> 
<IconButton 
  type='standard' 
  icon={{ name: toggleState ? 'flag' : 'outlined-flag' }} 
  toggle 
  selected={toggleState} 
  onPress={() => { 
    setToggleState(!toggleState); 
  }} 
  disabled 
/>`,
    },
  ],
};

export const iconButtonIndex: HeadingProps = {
  heading: 'iconButtonDocumentation:heading',
  links: [
    {
      title: 'iconButtonDocumentation:example1-name',
      link: '#filled-icon-button',
    },
    {
      title: 'iconButtonDocumentation:example2-name',
      link: '#filled-icon-button-toggle',
    },
    {
      title: 'iconButtonDocumentation:example3-name',
      link: '#filled-tonal-icon-button',
    },
    {
      title: 'iconButtonDocumentation:example4-name',
      link: '#filled-tonal-icon-button-toggle',
    },
    {
      title: 'iconButtonDocumentation:example5-name',
      link: '#outlined-icon-button',
    },
    {
      title: 'iconButtonDocumentation:example6-name',
      link: '#outlined-icon-button-toggle',
    },
    {
      title: 'iconButtonDocumentation:example7-name',
      link: '#standard-icon-button',
    },
    {
      title: 'iconButtonDocumentation:example8-name',
      link: '#standard-icon-button-toggle',
    },

    {
      link: '#props',
      title: 'content:props',
    },
  ],
};
