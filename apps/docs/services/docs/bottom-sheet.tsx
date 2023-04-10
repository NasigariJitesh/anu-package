import { Container } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

export const bottomSheetDocumentation: ContentValues = {
  mainHeading: 'bottomSheetDocumentation:mainHeading',
  mainDescription: 'bottomSheetDocumentation:mainDescription',
  examples: [
    {
      name: 'bottomSheetDocumentation:example1-name',
      id: 'default',
      component: <Container width={800} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />,
      code: "<Container width={800} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />",
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
