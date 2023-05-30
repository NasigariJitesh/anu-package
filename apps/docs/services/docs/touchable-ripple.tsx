/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Card, Container, TouchableRipple } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'scroll',
  width: '100%',
  padding: 10,
} as const;

export const touchableRippleDocumentation: ContentValues = {
  mainHeading: 'touchableRippleDocumentation:mainHeading',
  mainDescription: 'touchableRippleDocumentation:mainDescription',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'touchableRippleDocumentation:property-children-description',
    },
    {
      name: 'centered',
      type: 'boolean',
      optional: true,
      description: 'touchableRippleDocumentation:property-centered-description',
      defaultValue: 'false',
    },
    {
      name: 'borderless',
      type: 'boolean',
      optional: true,
      description: 'touchableRippleDocumentation:property-borderless-description',
      defaultValue: 'false',
    },
    {
      name: 'rippleColor',
      type: 'string',
      optional: true,
      description: 'touchableRippleDocumentation:property-rippleColor-description',
    },
    {
      name: 'underlayColor',
      type: 'string',
      optional: true,
      description: 'touchableRippleDocumentation:property-underlayColor-description',
    },
    {
      name: 'background',
      type: 'Object',
      optional: true,
      description: 'touchableRippleDocumentation:property-background-description',
    },
  ],

  examples: [
    {
      name: 'touchableRippleDocumentation:example1-name',
      description: 'touchableRippleDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <TouchableRipple style={{ borderRadius: 12 }}>
            <Card variant='elevated' width={360} style={{ height: 360 }} />
          </TouchableRipple>
        </Container>
      ),
      code: `<TouchableRipple>
  <Card variant='elevated' width={360} style={{ height: 360 }} />
</TouchableRipple>`,
    },
  ],
  externalProperties: {
    link: 'https://reactnative.dev/docs/pressable#props',
    title: 'touchableRippleDocumentation:external-properties-title',
  },
};

export const touchableRippleIndex: HeadingProps = {
  heading: 'touchableRippleDocumentation:mainHeading',
  links: [
    {
      title: 'touchableRippleDocumentation:example1-name',
      link: '#default',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
