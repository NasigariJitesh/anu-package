/* eslint-disable react-native/no-inline-styles */
import { Container, FileDropZone, FileUpload } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  overflow: 'scroll',
} as const;

const style = { margin: 15, alignItems: 'center', justifyContent: 'center' } as const;

export const fileUploadDocumentation: ContentValues = {
  mainHeading: 'fileUploadDocumentation:mainHeading',
  mainDescription: 'fileUploadDocumentation:mainDescription',
  examples: [
    {
      name: 'fileUploadDocumentation:example1-name',
      description: 'fileUploadDocumentation:example1-description',
      id: 'simple',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <FileUpload
              category='common'
              variant='filled'
              size='medium'
              title='Upload'
              icon={{ name: 'file-upload' }}
            />
          </Container>
        </Container>
      ),
      code: "<FileUpload category='common' variant='filled' size='medium' title='Upload' icon={{ name: 'file-upload' }} />",
    },
    {
      name: 'fileUploadDocumentation:example2-name',
      description: 'fileUploadDocumentation:example2-description',
      id: 'single',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <FileUpload category='common' variant='filled' size='medium' title='Choose a file' multiple={false} />
          </Container>
        </Container>
      ),
      code: "<FileUpload category='common' type='filled' title='Choose a file' multiple={false} />",
    },
    {
      name: 'fileUploadDocumentation:example3-name',
      description: 'fileUploadDocumentation:example3-description',
      id: 'list',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <FileUpload category='common' variant='filled' size='medium' title='Choose a file' multiple />
          </Container>
        </Container>
      ),
      code: "<FileUpload category='common' type='filled' title='Choose a file' multiple />",
    },
    {
      name: 'fileUploadDocumentation:example4-name',
      description: 'fileUploadDocumentation:example4-description',
      id: 'dropzone',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <FileDropZone>Drop your files here</FileDropZone>
          </Container>
        </Container>
      ),
      code: '<FileDropZone>Drop your files here</FileDropZone>',
    },
    {
      name: 'fileUploadDocumentation:example5-name',
      description: 'fileUploadDocumentation:example5-description',
      id: 'preview',
      component: (
        <Container disableGutters sx={{ ...flexStyle, overflow: undefined } as never}>
          <Container disableGutters style={style}>
            <FileUpload
              category='common'
              variant='filled'
              size='medium'
              title='Choose a file'
              uploadVariant='image'
              previewType='list'
              multiple
            />
          </Container>
          <Container disableGutters style={style}>
            <FileUpload
              category='common'
              variant='filled'
              size='medium'
              title='Choose a file'
              uploadVariant='image'
              previewType='carousel'
              multiple
            />
          </Container>
        </Container>
      ),
      code: `<FileUpload category='common' variant='filled' title='Choose a file' uploadVariant='image' previewType='list' multiple />
      
<FileUpload category='common' variant='filled' title='Choose a file' uploadVariant='image' previewType='carousel' multiple />`,
    },
    {
      name: 'fileUploadDocumentation:example6-name',
      id: 'sortable',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <FileUpload
              category='common'
              variant='filled'
              size='medium'
              title='Choose a file'
              uploadVariant='image'
              previewType='list'
              multiple
              sortable
            />
          </Container>
        </Container>
      ),
      code: "<FileUpload category='common' type='filled' title='Choose a file' uploadVariant='image' previewType='list' multiple sortable/>",
    },
  ],
  properties: [
    {
      name: 'uploadVariant',
      optional: true,
      type: "'image'|'file'",
      description: 'fileUploadDocumentation:property-uploadVariant-description',
      defaultValue: "'image'",
    },
    {
      name: 'previewType',
      optional: true,
      type: "'list' | 'carousel'",
      description: 'fileUploadDocumentation:property-previewType-description',
      defaultValue: "'image'",
    },

    {
      name: 'fileType',
      description: 'fileUploadDocumentation:property-fileType-description',
      optional: true,
      type: 'MimeType | MimeType[]',
    },
    {
      name: 'onChange',
      description: 'fileUploadDocumentation:property-onChange-description',
      optional: true,
      type: '(data: Blob | Blob[] | null, fileUri?: string | string[] | null) => void',
    },
    {
      name: 'multiple',
      optional: true,
      type: 'boolean',
      description: 'fileUploadDocumentation:property-multiple-description',
      defaultValue: 'false',
    },
    {
      name: 'sortable',
      description: 'fileUploadDocumentation:property-sortable-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'optimization',
      description: 'fileUploadDocumentation:property-optimization-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },

    {
      name: 'copyToCacheDirectory',
      description: 'fileUploadDocumentation:property-copyToCacheDirectory-description',
      optional: true,
      type: 'boolean',
      defaultValue: 'false',
    },

    {
      name: 'errors',
      description: 'fileUploadDocumentation:property-errors-description',
      optional: true,
      type: '{ error: boolean; errorMessage: string }[]',
    },
    {
      name: 'errorMessageForDuplicateFiles',
      description: 'fileUploadDocumentation:property-errorMessageForDuplicateFiles-description',
      optional: true,
      type: 'string',
    },
    {
      name: 'listWidth',
      description: 'fileUploadDocumentation:property-listWidth-description',
      optional: true,
      type: 'number',
    },
    {
      name: 'style',
      description: 'fileUploadDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'listStyle',
      description: 'fileUploadDocumentation:property-listStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  externalProperties: {
    link: '/components/button',
    title: 'fileUploadDocumentation:external-properties-title',
  },
};

export const fileUploadIndex: HeadingProps = {
  heading: 'fileUploadDocumentation:mainHeading',
  links: [
    {
      title: 'fileUploadDocumentation:example1-name',
      link: '#simple',
    },
    {
      title: 'fileUploadDocumentation:example2-name',
      link: '#single',
    },
    {
      title: 'fileUploadDocumentation:example3-name',
      link: '#list',
    },
    {
      title: 'fileUploadDocumentation:example4-name',
      link: '#dropzone',
    },
    {
      title: 'fileUploadDocumentation:example5-name',
      link: '#preview',
    },
    {
      title: 'fileUploadDocumentation:example6-name',
      link: '#sortable',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
