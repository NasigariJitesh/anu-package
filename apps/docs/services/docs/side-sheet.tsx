/* eslint-disable react-native/no-inline-styles */
import { Image } from 'anu/lib';
import sidesheet from 'assets/sidesheet.png';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

export const sideSheetDocumentation: ContentValues = {
  mainHeading: 'sideSheetDocumentation:mainHeading',
  mainDescription: 'sideSheetDocumentation:mainDescription',
  examples: [
    {
      name: 'sideSheetDocumentation:example1-name',
      description: 'sideSheetDocumentation:example1-description',
      id: 'default',
      component: <Image source={{ uri: sidesheet.src }} style={{ width: 720, height: 400 }} alt='side-sheet' />,
      code: "<SideSheet width={300} headline= 'Title' startCoordinate={-100} align='right' divider />",
    },
  ],
  properties: [
    {
      name: 'width',
      optional: true,
      type: 'number',
      description: 'sideSheetDocumentation:property-width-description',
      defaultValue: '256px',
    },
    {
      name: 'startCoordinate',
      optional: true,
      type: 'number',
      description: 'sideSheetDocumentation:property-startCoordinate-description',
      defaultValue: '0',
    },
    {
      name: 'damping',
      description: 'sideSheetDocumentation:property-damping-description',
      optional: true,
      type: 'number',
      defaultValue: '50',
    },
    {
      name: 'align',
      description: 'sideSheetDocumentation:property-align-description',
      optional: true,
      type: "'left' | 'right'",
      defaultValue: "'right'",
    },
    {
      name: 'headline',
      description: 'sideSheetDocumentation:property-headline-description',
      optional: true,
      type: 'string',
    },
    {
      name: 'onBackButtonPress',
      description: 'sideSheetDocumentation:property-onBackButtonPress-description',
      optional: true,
      type: '() => void',
    },
    {
      name: 'onCloseButtonPress',
      description: 'sideSheetDocumentation:property-onCloseButtonPress-description',
      optional: true,
      type: '() => void',
    },
    {
      name: 'headline',
      description: 'sideSheetDocumentation:property-headline-description',
      optional: true,
      type: 'string',
    },
    {
      name: 'children',
      description: 'sideSheetDocumentation:property-children-description',
      optional: true,
      type: 'ReactChildren',
    },
    {
      name: 'divider',
      description: 'sideSheetDocumentation:property-divider-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'handleStyles',
      description: 'sideSheetDocumentation:property-handleStyles-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'containerStyles',
      description: 'sideSheetDocumentation:property-containerStyles-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
};

export const sideSheetIndex: HeadingProps = {
  heading: 'sideSheetDocumentation:mainHeading',
  links: [
    {
      title: 'sideSheetDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
