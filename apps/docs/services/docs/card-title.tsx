/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Card, CardTitle, Container, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
  padding: 10,
} as const;

export const cardTitleDocumentation: ContentValues = {
  mainHeading: 'cardTitleDocumentation:mainHeading',

  properties: [
    {
      name: 'type',
      type: "'default' | 'custom'",
      description: 'cardTitleDocumentation:property-type-description',
      optional: true,
      defaultValue: "'default'",
    },
    {
      name: 'title',
      type: 'string',
      description: 'cardTitleDocumentation:property-title-description',
    },
    {
      name: 'subTitle',
      type: 'string',
      description: 'cardTitleDocumentation:property-subTitle-description',
      optional: true,
    },
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'cardTitleDocumentation:property-children-description',
    },
  ],

  examples: [
    {
      name: 'cardTitleDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardTitle title='Title' subTitle='subTitle' />
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardTitle title='Title' subTitle='subTitle' />
</Card>`,
    },
    {
      name: 'cardTitleDocumentation:example2-name',
      id: 'custom',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardTitle type='custom'>
              <Typography.Title style={{ fontSize: 24, marginVertical: 5 }}>Title</Typography.Title>
              <Typography.Title>SubTitle 1</Typography.Title>
              <Typography.Body>SubTitle 2</Typography.Body>
            </CardTitle>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardTitle type='custom'>
    <Typography.Title style={{ fontSize: 24, marginVertical: 5 }}>Title</Typography.Title>
    <Typography.Title>SubTitle 1</Typography.Title>
    <Typography.Body>SubTitle 2</Typography.Body>
  </CardTitle>
</Card>`,
    },
  ],
};

export const cardTitleIndex: HeadingProps = {
  heading: 'cardTitleDocumentation:mainHeading',
  links: [
    {
      title: 'cardTitleDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'cardTitleDocumentation:example2-name',
      link: '#custom',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
