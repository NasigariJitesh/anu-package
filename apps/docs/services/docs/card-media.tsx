/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Card, CardContent, CardMedia, Container, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  padding: 10,
} as const;

export const cardMediaDocumentation: ContentValues = {
  mainHeading: 'cardMediaDocumentation:mainHeading',

  properties: [
    {
      name: 'source',
      type: 'ImageSourcePropType',
      description: 'cardMediaDocumentation:property-source-description',
    },
    {
      name: 'cardOrientation',
      type: "'horizontal' | 'vertical'",
      description: 'cardMediaDocumentation:property-cardOrientation-description',
      optional: true,
      defaultValue: "'vertical'",
    },
    {
      name: 'height',
      type: 'number | string',
      description: 'cardMediaDocumentation:property-height-description',
    },
    {
      name: 'width',
      type: 'number | string',
      description: 'cardMediaDocumentation:property-width-description',
    },
  ],
  externalProperties: {
    link: '/components/image',
    title: 'cardMediaDocumentation:external-properties-title',
  },

  examples: [
    {
      name: 'cardMediaDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardMedia
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
              }}
              height={240}
            />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardMedia
    source={{
      uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
    }}
    height={240}
  />
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
</Card>`,
    },
    {
      name: 'cardMediaDocumentation:example2-name',
      id: 'with-horizontal-card',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' orientation='horizontal' height={100}>
            <CardMedia
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
              }}
              width={100}
              cardOrientation='horizontal'
            />
            <CardContent style={{ width: 260 }}>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' orientation='horizontal' height={100}>
  <CardMedia
    source={{
      uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
    }}
    width={100}
    cardOrientation='horizontal'
  />
  <CardContent style={{ width: 260 }}>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
</Card>`,
    },
  ],
};

export const cardMediaIndex: HeadingProps = {
  heading: 'cardMediaDocumentation:mainHeading',
  links: [
    {
      title: 'cardMediaDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'cardMediaDocumentation:example2-name',
      link: '#with-horizontal-card',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
