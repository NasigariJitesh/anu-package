/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Avatar, Card, CardHeader, Container, IconButton } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  padding: 10,
} as const;

export const cardHeaderDocumentation: ContentValues = {
  mainHeading: 'cardHeaderDocumentation:mainHeading',

  properties: [
    {
      name: 'heading',
      type: 'string',
      description: 'cardHeaderDocumentation:property-heading-description',
    },
    {
      name: 'subHeading',
      type: 'string',
      description: 'cardHeaderDocumentation:property-subHeading-description',
      optional: true,
    },
    {
      name: 'avatar',
      type: 'ReactChildren',
      description: 'cardHeaderDocumentation:property-avatar-description',
      optional: true,
    },
    {
      name: 'action',
      type: 'ReactChildren',
      description: 'cardHeaderDocumentation:property-action-description',
      optional: true,
    },
    {
      name: 'headingStyle',
      type: 'StyleProp<TextStyle>',
      optional: true,
      description: 'cardHeaderDocumentation:property-headingStyle-description',
    },
    {
      name: 'subHeadingStyle',
      type: 'StyleProp<TextStyle>',
      optional: true,
      description: 'cardHeaderDocumentation:property-subHeadingStyle-description',
    },
  ],

  examples: [
    {
      name: 'cardHeaderDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardHeader heading='Heading' subHeading='subHeading' />
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardHeader heading='Heading' subHeading='subHeading' />
</Card>`,
    },
    {
      name: 'cardHeaderDocumentation:example2-name',
      id: 'with-avatar-action',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardHeader
              heading='Heading'
              subHeading='subHeading'
              avatar={<Avatar name='N' variant='circle' size='large' />}
              action={<IconButton variant='standard' icon={{ name: 'more-vert' }} />}
            />
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardHeader
    heading='Heading'
    subHeading='subHeading'
    avatar={<Avatar name='N' variant='circle' size='large' />}
    action={<IconButton variant='standard' icon={{ name: 'more-vert' }} />}
  />
</Card>`,
    },
  ],
};

export const cardHeaderIndex: HeadingProps = {
  heading: 'cardHeaderDocumentation:mainHeading',
  links: [
    {
      title: 'cardHeaderDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'cardHeaderDocumentation:example2-name',
      link: '#with-avatar-action',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
