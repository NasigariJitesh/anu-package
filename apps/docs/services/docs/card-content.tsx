/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Card, CardContent, Container, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  padding: 10,
} as const;

export const cardContentDocumentation: ContentValues = {
  mainHeading: 'cardContentDocumentation:mainHeading',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'cardContentDocumentation:property-children-description',
      optional: true,
    },
    {
      name: 'style',
      type: 'StyleProp<ViewStyle>',
      optional: true,
      description: 'cardContentDocumentation:property-style-description',
    },
    {
      name: 'sx',
      type: 'Sx',
      optional: true,
      description: 'cardContentDocumentation:property-sx-description',
    },
  ],

  examples: [
    {
      name: 'cardContentDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={360}>
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={360}>
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
</Card>`,
    },
  ],
};

export const cardContentIndex: HeadingProps = {
  heading: 'cardContentDocumentation:mainHeading',
  links: [
    {
      title: 'cardContentDocumentation:example1-name',
      link: '#default',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
