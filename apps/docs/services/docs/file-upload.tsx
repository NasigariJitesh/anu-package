/* eslint-disable react-native/no-inline-styles */
import { Container, Image } from 'anu/lib';
import example1Dark from 'assets/file-upload-example1-dark.jpg';
import example1Light from 'assets/file-upload-example1-light.png';
import example2Dark from 'assets/file-upload-example2-dark.jpg';
import example2Light from 'assets/file-upload-example2-light.jpg';
import example3Dark from 'assets/file-upload-example3-dark.jpg';
import example3Light from 'assets/file-upload-example3-light.jpg';
import example4Dark from 'assets/file-upload-example4-dark.jpg';
import example4Light from 'assets/file-upload-example4-light.jpg';
import example5_1Dark from 'assets/file-upload-example5-1-dark.jpg';
import example5_1Light from 'assets/file-upload-example5-1-light.jpg';
import example5_2Dark from 'assets/file-upload-example5-2-dark.gif';
import example5_2Light from 'assets/file-upload-example5-2-light.gif';
import example6Dark from 'assets/file-upload-example6-dark.gif';
import example6Light from 'assets/file-upload-example6-light.gif';
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
        <Image source={{ uri: example1Dark.src }} style={{ width: 132, height: 50 }} alt='file-upload-example-1' />
      ) : (
        <Image source={{ uri: example1Light.src }} style={{ width: 132, height: 50 }} alt='file-upload-example-1' />
      )}
    </Container>
  );
};
const Example2 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: example2Dark.src }} style={{ width: 318, height: 132 }} alt='file-upload-example-2' />
      ) : (
        <Image source={{ uri: example2Light.src }} style={{ width: 320, height: 140 }} alt='file-upload-example-2' />
      )}
    </Container>
  );
};
const Example3 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: example3Dark.src }} style={{ width: 330, height: 440 }} alt='file-upload-example-3' />
      ) : (
        <Image source={{ uri: example3Light.src }} style={{ width: 320, height: 450 }} alt='file-upload-example-3' />
      )}
    </Container>
  );
};

const Example4 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: example4Dark.src }} style={{ width: 460, height: 250 }} alt='file-upload-example-4' />
      ) : (
        <Image source={{ uri: example4Light.src }} style={{ width: 460, height: 250 }} alt='file-upload-example-4' />
      )}
    </Container>
  );
};

const Example5 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: example5_1Dark.src }} style={{ width: 312, height: 432 }} alt='file-upload-example-5-1' />
      ) : (
        <Image
          source={{ uri: example5_1Light.src }}
          style={{ width: 312, height: 432 }}
          alt='file-upload-example-5-1'
        />
      )}
      <Container disableGutters style={{ marginVertical: 10 }} />
      {isDarkTheme ? (
        <Image source={{ uri: example5_2Dark.src }} style={{ width: 450, height: 336 }} alt='file-upload-example-5-2' />
      ) : (
        <Image
          source={{ uri: example5_2Light.src }}
          style={{ width: 450, height: 336 }}
          alt='file-upload-example-5-2'
        />
      )}
    </Container>
  );
};

const Example6 = () => {
  const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters style={style}>
      {isDarkTheme ? (
        <Image source={{ uri: example6Dark.src }} style={{ width: 450, height: 616 }} alt='file-upload-example-6' />
      ) : (
        <Image source={{ uri: example6Light.src }} style={{ width: 450, height: 547 }} alt='file-upload-example-6' />
      )}
    </Container>
  );
};

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
          <Example1 />
        </Container>
      ),
      code: "<FileUpload category='common' type='filled' title='upload' icon={{name:'file-upload'}} />",
    },
    {
      name: 'fileUploadDocumentation:example2-name',
      description: 'fileUploadDocumentation:example2-description',
      id: 'single',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
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
          <Example3 />
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
          <Example4 />
        </Container>
      ),
      code: '<FileDropZone>Drop your files here<FileDropZone>',
    },
    {
      name: 'fileUploadDocumentation:example5-name',
      description: 'fileUploadDocumentation:example5-description',
      id: 'preview',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example5 />
        </Container>
      ),
      code: `<FileUpload category='common' type='filled' title='Choose a file' variant='image' previewType='list' multiple />
      
<FileUpload category='common' type='filled' title='Choose a file' variant='image' previewType='carousel' multiple />`,
    },
    {
      name: 'fileUploadDocumentation:example6-name',
      id: 'sortable',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example6 />
        </Container>
      ),
      code: "<FileUpload category='common' type='filled' title='Choose a file' variant='image' previewType='list' multiple sortable/>",
    },
  ],
  properties: [
    {
      name: 'variant',
      optional: true,
      type: "'image'|'file'",
      description: 'fileUploadDocumentation:property-variant-description',
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
