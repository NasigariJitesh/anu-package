/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Button, Card, CardActions, Container } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const cardActionsDocumentation: ContentValues = {
  mainHeading: 'cardActionsDocumentation:mainHeading',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'cardActionsDocumentation:property-children-description',
    },
    {
      name: 'align',
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'cardActionsDocumentation:property-align-description',
      defaultValue: "'center'",
      optional: true,
    },
    {
      name: 'justify',
      description: 'cardActionsDocumentation:property-justify-description',
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      optional: true,
      defaultValue: "'flex-end'",
    },
    {
      name: 'style',
      type: 'StyleProp<ViewStyle>',
      optional: true,
      description: 'cardActionsDocumentation:property-style-description',
    },
    {
      name: 'sx',
      type: 'Sx',
      optional: true,
      description: 'cardActionsDocumentation:property-sx-description',
    },
  ],

  examples: [
    {
      name: 'cardActionsDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={280}>
            <CardActions>
              <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={280}>
  <CardActions>
    <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
    <Button.Filled title='Action' />
  </CardActions>
</Card>`,
    },
  ],
};

export const cardActionsIndex: HeadingProps = {
  heading: 'cardActionsDocumentation:mainHeading',
  links: [
    {
      title: 'cardActionsDocumentation:example1-name',
      link: '#default',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
