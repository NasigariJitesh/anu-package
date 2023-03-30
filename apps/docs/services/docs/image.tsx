import { Container, Image } from 'anu/lib';
import image from 'assets/ocean.jpg';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
  height: 200,
  width: 300,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;
export const imageDocumentation: ContentValues = {
  mainHeading: 'imageDocumentation:mainHeading',
  mainDescription: 'imageDocumentation:mainDescription',
  properties: [
    {
      name: 'source',
      type: 'ImageSourcePropType',
      description: 'imageDocumentation:property-source-description',
    },
    {
      name: 'alt',
      type: 'string',
      description: 'imageDocumentation:property-alt-description',
      optional: true,
    },
  ],
  externalProperties: {
    title: 'imageDocumentation:external-properties-title',
    link: 'https://reactnative.dev/docs/image#props',
  },
  examples: [
    {
      name: 'imageDocumentation:example1-name',
      description: 'imageDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Image source={{ uri: 'https://abc.com/abc.jpg' }} alt='default' style={style} />
        </Container>
      ),
      code: "<Image source={{ uri: 'https://abc.com/abc.jpg' }} alt='default' />",
    },

    {
      name: 'imageDocumentation:example2-name',
      description: 'imageDocumentation:example2-description',

      id: 'url-image',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Image
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
            }}
            alt='url-image'
            style={style}
          />
        </Container>
      ),
      code: `<Image
  source={{
    uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
  }}
  alt='image-url'
/>
`,
    },
    {
      name: 'imageDocumentation:example3-name',
      id: 'static-image-web',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Image
            source={{
              uri: image.src,
            }}
            alt='static-image-web'
            style={style}
          />
        </Container>
      ),
      code: `import image from 'assets/image.png';

<Image source={{ uri: image.src }} alt='static-image-web' />`,
    },
    {
      name: 'imageDocumentation:example4-name',
      id: 'static-image-mobile',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Image
            source={{
              uri: image.src,
            }}
            alt='static-image-mobile'
            style={style}
          />
        </Container>
      ),
      code: `import image from 'assets/image-placeholder.png';

<Image source={image} alt='static-image-mobile' />`,
    },
  ],
};

export const imageIndex: HeadingProps = {
  heading: 'imageDocumentation:mainHeading',
  links: [
    {
      title: 'imageDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'imageDocumentation:example2-name',
      link: '#url-image',
    },
    {
      title: 'imageDocumentation:example3-name',
      link: '#static-image-web',
    },
    {
      title: 'imageDocumentation:example4-name',
      link: '#static-image-mobile',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
