/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Container,
  IconButton,
  Typography,
} from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const cardDocumentation: ContentValues = {
  mainHeading: 'cardDocumentation:mainHeading',
  mainDescription: 'cardDocumentation:mainDescription',
  properties: [
    {
      name: 'variant',
      type: "'outlined' | 'filled' | 'elevated'",
      description: 'cardDocumentation:property-variant-description',
      optional: true,
      defaultValue: 'elevated',
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      description: 'cardDocumentation:property-orientation-description',
      optional: true,
      defaultValue: 'vertical',
    },
    {
      name: 'height',
      type: 'number | string',
      description: 'cardDocumentation:property-height-description',
    },
    {
      name: 'width',
      type: 'number | string',
      description: 'cardDocumentation:property-width-description',
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'cardDocumentation:external-properties-title',
  },
  examples: [
    {
      name: 'cardDocumentation:example1-name',
      id: 'elevated',
      description: 'cardDocumentation:example1-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={280}>
            <CardTitle type='default' title='Title' subTitle='Sub Title' />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
            <CardActions>
              <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={280}>
  <CardTitle type='default' title='Title' subTitle='Sub Title' />
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
  <CardActions>
    <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
    <Button.Filled title='Action' />
  </CardActions>
</Card>`,
    },
    {
      name: 'cardDocumentation:example2-name',
      id: 'filled',
      description: 'cardDocumentation:example2-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='filled' width={280}>
            <CardTitle type='default' title='Title' subTitle='Sub Title' />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
            <CardActions justify='flex-end'>
              <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Card>
        </Container>
      ),
      code: `<Card variant='filled' width={280}>
  <CardTitle type='default' title='Title' subTitle='Sub Title' />
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
  <CardActions justify='flex-end'>
    <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
    <Button.Filled title='Action' />
  </CardActions>
</Card>`,
    },
    {
      name: 'cardDocumentation:example3-name',
      id: 'outlined',
      description: 'cardDocumentation:example3-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='outlined' width={280}>
            <CardTitle type='default' title='Title' subTitle='Sub Title' />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
            <CardActions justify='flex-end'>
              <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Card>
        </Container>
      ),
      code: `<Card variant='outlined' width={280}>
  <CardTitle type='default' title='Title' subTitle='Sub Title' />
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
  <CardActions justify='flex-end'>
    <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
    <Button.Filled title='Action' />
  </CardActions>
</Card>`,
    },
    {
      name: 'cardDocumentation:example4-name',
      id: 'stacked',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Card variant='elevated' width={280}>
            <CardHeader
              heading='Heading'
              subHeading='subHeading'
              avatar={<Avatar name='N' variant='circle' size='large' />}
              action={<IconButton variant='standard' icon={{ name: 'more-vert' }} />}
            />
            <CardMedia
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
              }}
              height={200}
            />
            <CardTitle type='default' title='Title' subTitle='Sub Title' />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
            <CardActions justify='flex-end'>
              <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' width={280}>
  <CardTitle type='default' title='Title' subTitle='Sub Title' />
  <CardHeader
    heading='Heading'
    subHeading='subHeading'
    avatar={<Avatar name='N' variant='circle' size='large' />}
    action={<IconButton type='standard' icon={{ name: 'more-vert' }} />}
  />
  <CardMedia
    source={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
    }}
    height={200}
  />
  <CardContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </CardContent>
  <CardActions justify='flex-end'>
    <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
    <Button.Filled title='Action' />
  </CardActions>
</Card>`,
    },
    {
      name: 'cardDocumentation:example5-name',
      id: 'horizontal',
      description: 'cardDocumentation:example5-description',
      component: (
        <Container disableGutters sx={{ ...flexStyle, overflow: 'scroll' } as never}>
          <Card variant='elevated' orientation='horizontal' width={500} height={250}>
            <Container sx={{ flex: 1 }}>
              <CardTitle type='default' title='Title' subTitle='Sub Title' />
              <CardContent>
                <Typography.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </Typography.Body>
              </CardContent>
              <CardActions justify='flex-end'>
                <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
                <Button.Filled title='Action' />
              </CardActions>
            </Container>
            <CardMedia
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
              }}
              cardOrientation='horizontal'
              width={'40%'}
            />
          </Card>
        </Container>
      ),
      code: `<Card variant='elevated' orientation='horizontal' width={500} height={250}>
  <Container sx={{ flex: 1 }}>
    <CardTitle type='default' title='Title' subTitle='Sub Title' />
    <CardContent>
      <Typography.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography.Body>
    </CardContent>
    <CardActions justify='flex-end'>
      <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
      <Button.Filled title='Action' />
    </CardActions>
  </Container>
  <CardMedia
    source={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
    }}
    cardOrientation='horizontal'
    width={'40%'}
  />
</Card>`,
    },
  ],
  additionalInformation: {
    title: 'cardDocumentation:additionalInformation-title',
    isLocaleSpecific: true,
    items: [
      { info: 'cardDocumentation:additionalInformation-info1', isLocaleSpecific: true },
      { info: 'cardDocumentation:additionalInformation-info2', isLocaleSpecific: true },
      { info: 'cardDocumentation:additionalInformation-info3', isLocaleSpecific: true },
      { info: 'cardDocumentation:additionalInformation-info4', isLocaleSpecific: true },
      { info: 'cardDocumentation:additionalInformation-info5', isLocaleSpecific: true },
    ],
    id: 'see-also',
  },
};

export const cardIndex: HeadingProps = {
  heading: 'cardDocumentation:mainHeading',
  links: [
    {
      title: 'cardDocumentation:example1-name',
      link: '#elevated',
    },
    {
      title: 'cardDocumentation:example2-name',
      link: '#filled',
    },
    {
      title: 'cardDocumentation:example3-name',
      link: '#outlined',
    },
    {
      title: 'cardDocumentation:example4-name',
      link: '#stacked',
    },
    {
      title: 'cardDocumentation:example5-name',
      link: '#horizontal',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
    {
      link: '#see-also',
      title: 'cardDocumentation:additionalInformation-title',
      components: [],
    },
  ],
};
