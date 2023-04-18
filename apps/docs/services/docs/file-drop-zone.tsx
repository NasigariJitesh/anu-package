/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Container, Image } from 'anu/lib';
import exampleDark from 'assets/file-upload-example4-dark.jpg';
import exampleLight from 'assets/file-upload-example4-light.jpg';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useMenuContext } from 'screens/common/provider';

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
  overflow: 'scroll',
} as const;

const style = { margin: 15 };

const Example1 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: exampleDark.src }} style={{ width: 460, height: 250 }} alt='file-drop-zone-example' />
      ) : (
        <Image source={{ uri: exampleLight.src }} style={{ width: 460, height: 250 }} alt='file-drop-zone-example' />
      )}
    </Container>
  );
};

export const fileDropZoneDocumentation: ContentValues = {
  mainHeading: 'fileDropZoneDocumentation:mainHeading',
  mainDescription: 'fileDropZoneDocumentation:mainDescription',
  examples: [
    {
      name: 'fileDropZoneDocumentation:example1-name',

      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: '<FileDropZone>Drop your files here<FileDropZone>',
    },
  ],
  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'fileDropZoneDocumentation:property-children-description',
    },
    {
      name: 'dragActivePlaceholder',
      type: 'ReactChildren',
      description: 'fileDropZoneDocumentation:property-dragActivePlaceholder-description',
      optional: true,
    },
    {
      name: 'variant',
      optional: true,
      type: "'image'|'file'",
      description: 'fileDropZoneDocumentation:property-variant-description',
      defaultValue: "'image'",
    },
    {
      name: 'previewType',
      optional: true,
      type: "'list' | 'carousel'",
      description: 'fileDropZoneDocumentation:property-previewType-description',
      defaultValue: "'image'",
    },

    {
      name: 'fileType',
      description: 'fileDropZoneDocumentation:property-fileType-description',
      optional: true,
      type: '{[key:string]:string[]}',
    },
    {
      name: 'onChange',
      description: 'fileDropZoneDocumentation:property-onChange-description',
      optional: true,
      type: '(data: Blob | Blob[] | null, fileUri?: string | string[] | null) => void',
    },
    {
      name: 'onSubmit',
      description: 'fileDropZoneDocumentation:property-onSubmit-description',
      optional: true,
      type: '() => void',
    },
    {
      name: 'multiple',
      optional: true,
      type: 'boolean',
      description: 'fileDropZoneDocumentation:property-multiple-description',
      defaultValue: 'false',
    },
    {
      name: 'sortable',
      description: 'fileDropZoneDocumentation:property-sortable-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      description: 'fileDropZoneDocumentation:property-disabled-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'optimization',
      description: 'fileDropZoneDocumentation:property-optimization-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },

    {
      name: 'copyToCacheDirectory',
      description: 'fileDropZoneDocumentation:property-copyToCacheDirectory-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },

    {
      name: 'errors',
      description: 'fileDropZoneDocumentation:property-errors-description',
      optional: true,
      type: '{ error: boolean; errorMessage: string }[]',
    },
    {
      name: 'errorMessageForDuplicateFiles',
      description: 'fileDropZoneDocumentation:property-errorMessageForDuplicateFiles-description',
      optional: true,
      type: 'string',
    },
    {
      name: 'listWidth',
      description: 'fileDropZoneDocumentation:property-listWidth-description',
      optional: true,
      type: 'number',
    },
    {
      name: 'dropZoneStyle',
      description: 'fileDropZoneDocumentation:property-dropZoneStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'style',
      description: 'fileDropZoneDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'listStyle',
      description: 'fileDropZoneDocumentation:property-listStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'fileDropZoneDocumentation:external-properties-title',
  },
};

export const fileDropZoneIndex: HeadingProps = {
  heading: 'fileDropZoneDocumentation:mainHeading',
  links: [
    {
      title: 'fileDropZoneDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
