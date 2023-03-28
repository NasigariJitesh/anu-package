/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Avatar, AvatarGroup, Container, Icon, Image } from 'anu/lib';
import image from 'assets/avatar-placeholder.png';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};
const otherStyle = { height: 60, width: 60 };

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;
export const avatarDocumentation: ContentValues = {
  mainHeading: 'avatarDocumentation:mainHeading',
  mainDescription: 'avatarDocumentation:mainDescription',
  properties: [
    {
      name: 'size',
      type: "'small' | 'medium' | 'large'",
      description: 'avatarDocumentation:property-size-description',
      defaultValue: "'medium'",
      optional: true,
    },
    {
      name: 'variant',
      type: "'circle' | 'rounded' ",
      description: 'avatarDocumentation:property-variant-description',
      defaultValue: "'rounded'",
      optional: true,
    },
    {
      name: 'name',
      type: 'string',
      description: 'avatarDocumentation:property-name-description',
    },
    {
      name: 'lastName',
      type: 'string',
      description: 'avatarDocumentation:property-lastName-description',
      optional: true,
    },
    {
      name: 'source',
      type: 'ImageSourceType',
      description: 'avatarDocumentation:property-source-description',
    },
    {
      name: 'children',
      type: 'string | IconType | ImageType',
      description: 'avatarDocumentation:property-source-description',
    },
    {
      name: 'max',
      type: 'number',
      description: 'avatarDocumentation:property-max-description',
      groupProperty: true,
    },
    {
      name: 'total',
      type: 'number',
      description: 'avatarDocumentation:property-total-description',
      groupProperty: true,
    },

    {
      name: 'spacing',
      type: 'number',
      description: 'avatarDocumentation:property-spacing-description',
      groupProperty: true,
      optional: true,
    },
    {
      name: 'excessAvatarStyle',
      type: 'StyleProp<ViewStyle>',
      description: 'avatarDocumentation:property-excessAvatarStyle-description',
      groupProperty: true,
      optional: true,
    },
    {
      name: 'excessAvatarSx',
      type: 'Sx',
      description: 'avatarDocumentation:property-excessAvatarSx-description',
      groupProperty: true,
      optional: true,
    },
  ],
  examples: [
    {
      name: 'avatarDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
            <Avatar source={{ uri: image.src }} size='small' style={style} />
            <Avatar source={{ uri: image.src }} size='medium' style={style} />
            <Avatar source={{ uri: image.src }} size='large' style={style} />
            <Avatar source={{ uri: image.src }} style={[style, otherStyle]} />
          </Container>
          <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
            <Avatar source={{ uri: image.src }} size='small' variant='circle' style={style} />
            <Avatar source={{ uri: image.src }} size='medium' variant='circle' style={style} />
            <Avatar source={{ uri: image.src }} size='large' variant='circle' style={style} />
            <Avatar source={{ uri: image.src }} variant='circle' style={[style, otherStyle]} />
          </Container>
        </Container>
      ),
      code: `<Avatar source={{ uri: image.src }} size='small' />
<Avatar source={{ uri: image.src }} size='medium' />
<Avatar source={{ uri: image.src }} size='large' />
<Avatar source={{ uri: image.src }} style={{height: 60, width: 60 }} />

<Avatar source={{ uri: image.src }} size='small' variant='circle' />
<Avatar source={{ uri: image.src }} size='medium' variant='circle' />
<Avatar source={{ uri: image.src }} size='large' variant='circle' />
<Avatar source={{ uri: image.src }} variant='circle' style={{ height: 60, width: 60 }} />`,
    },

    {
      name: 'avatarDocumentation:example2-name',
      id: 'letter',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Avatar name='John' lastName='Doe' size='small' variant='circle' style={style} />
          <Avatar name='John' lastName='Doe' size='medium' variant='circle' style={style} />
          <Avatar name='John' lastName='Doe' size='large' variant='circle' style={style} />
        </Container>
      ),
      code: `<Avatar name='John' lastName='Doe' size='small' variant='circle' />
<Avatar name='John' lastName='Doe' size='medium' variant='circle' />
<Avatar name='John' lastName='Doe' size='large' variant='circle' />
`,
    },

    {
      name: 'avatarDocumentation:example3-name',
      id: 'image',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='small' variant='circle' style={style} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='medium' variant='circle' style={style} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='large' variant='circle' style={style} />
        </Container>
      ),
      code: `<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='small' variant='circle' />
<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='medium' variant='circle' />
<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='large' variant='circle' />`,
    },
    {
      name: 'avatarDocumentation:example4-name',
      id: 'group',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' align='center' style={style}>
            <AvatarGroup max={5}>
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=1' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=2' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=3' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=4' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=5' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=6' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=7' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=8' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=9' }} variant='circle' style={style} />
            </AvatarGroup>
          </Container>
          <Container disableGutters flexDirection='row' align='center' style={style}>
            <AvatarGroup total={15}>
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=10' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=11' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=12' }} variant='circle' style={style} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/?img=13' }} variant='circle' style={style} />
            </AvatarGroup>
          </Container>
        </Container>
      ),
      code: `<AvatarGroup max={5}>
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=1' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=2' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=3' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=4' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=5' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=6' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=7' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=8' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=9' }} variant='circle' />
</AvatarGroup>

<AvatarGroup total={15}>
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=10' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=11' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=12' }} variant='circle' />
  <Avatar source={{ uri: 'https://i.pravatar.cc/?img=13' }} variant='circle' />
</AvatarGroup>`,
    },
    {
      name: 'avatarDocumentation:example5-name',
      id: 'children',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Avatar variant='circle' style={style}>
            <Icon name='person' style={{ color: 'inherit' }} />
          </Avatar>
          <Avatar variant='circle' style={style}>
            N
          </Avatar>
          <Avatar variant='circle' style={style}>
            <Image source={{ uri: 'https://i.pravatar.cc/?img=13' }} alt='avatar' style={{ height: 40, width: 40 }} />
          </Avatar>
        </Container>
      ),
      code: `<Avatar variant='circle' >
  <Icon name='person' style={{ color: 'inherit' }} />
</Avatar>

<Avatar variant='circle' >
  N
</Avatar>

<Avatar variant='circle' >
  <Image source={{ uri: 'https://i.pravatar.cc/?img=13' }} alt='avatar' style={{ height: 40, width: 40 }} />
</Avatar>`,
    },
    {
      name: 'avatarDocumentation:example6-name',
      id: 'avatar-web',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Avatar source={{ uri: image.src }} style={style} />
        </Container>
      ),
      code: `import image from 'assets/avatar-placeholder.png';

<Avatar source={{ uri: image.src }} />`,
    },
    {
      name: 'avatarDocumentation:example7-name',
      id: 'avatar-mobile',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Avatar source={{ uri: image.src }} style={style} />
        </Container>
      ),
      code: `import image from 'assets/avatar-placeholder.png';

<Avatar source={image} />`,
    },
  ],
};

export const avatarIndex: HeadingProps = {
  heading: 'avatarDocumentation:mainHeading',
  links: [
    {
      title: 'avatarDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'avatarDocumentation:example2-name',
      link: '#letter',
    },
    {
      title: 'avatarDocumentation:example3-name',
      link: '#image',
    },
    {
      title: 'avatarDocumentation:example4-name',
      link: '#group',
    },
    {
      title: 'avatarDocumentation:example5-name',
      link: '#children',
    },
    {
      title: 'avatarDocumentation:example6-name',
      link: '#avatar-web',
    },
    {
      title: 'avatarDocumentation:example7-name',
      link: '#avatar-mobile',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
