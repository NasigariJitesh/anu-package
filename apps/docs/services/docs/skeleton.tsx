/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Chip,
  Container,
  Skeleton,
  SkeletonGroup,
  Typography,
} from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  overflow: 'scroll',
  flexDirection: 'row',
  paddingHorizontal: 20,
} as const;

const style = {
  flex: 1,
} as const;

const backgroundStyle = {
  alignItems: 'center',
  borderRadius: 18,
  padding: 15,
  width: '100%',
} as const;

const margin = { margin: 15 };

const Example1 = () => {
  const [show, toggleShow] = useState(true);

  const theme = useTheme();

  return (
    <Container disableGutters style={style}>
      <Button.Filled
        style={margin}
        onPress={() => toggleShow((p) => !p)}
        title={`${show ? 'Hide' : 'Show'} Skeleton`}
      />
      <Container disableGutters style={{ ...backgroundStyle, backgroundColor: theme.colors.$surface }}>
        <Container>
          <SkeletonGroup show={show}>
            <Skeleton style={{ marginBottom: 22 }}>
              <Typography.Title>Heading</Typography.Title>
            </Skeleton>
            <Skeleton style={{ marginBottom: 22 }}>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
              </Typography.Body>
            </Skeleton>
            <Skeleton style={{ marginBottom: 22 }}>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
              </Typography.Body>
            </Skeleton>
            <Skeleton>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
              </Typography.Body>
            </Skeleton>
          </SkeletonGroup>
        </Container>
      </Container>
    </Container>
  );
};

const Example2 = () => {
  const [show, toggleShow] = useState(true);

  const theme = useTheme();

  return (
    <Container disableGutters style={style}>
      <Button.Filled
        style={margin}
        onPress={() => toggleShow((p) => !p)}
        title={`${show ? 'Hide' : 'Show'} Skeleton`}
      />
      <Container disableGutters style={{ ...backgroundStyle, backgroundColor: theme.colors.$surface }}>
        <Container flexDirection='row' align='center' justify='space-between' style={{ width: 500 }}>
          <Skeleton height={40} width={150} radius='round'>
            {show ? null : <Button.Filled title='Filled Button' />}
          </Skeleton>

          <Skeleton show={show}>
            <Chip value='Chip' />
          </Skeleton>

          <Skeleton show={show} height={40} width={150} radius={0} />
        </Container>
      </Container>
    </Container>
  );
};

const Example3 = () => {
  const [show, toggleShow] = useState(true);

  const theme = useTheme();

  return (
    <Container disableGutters style={style}>
      <Button.Filled
        style={margin}
        onPress={() => toggleShow((p) => !p)}
        title={`${show ? 'Hide' : 'Show'} Skeleton`}
      />
      <Container disableGutters style={{ ...backgroundStyle, backgroundColor: theme.colors.$surface }}>
        <SkeletonGroup show={show}>
          <Card variant='outlined' width={360}>
            <CardHeader
              heading={
                <Skeleton style={{ marginBottom: 10 }}>
                  <Typography.Title>Heading</Typography.Title>
                </Skeleton>
              }
              subHeading={
                <Skeleton>
                  <Typography.Body>Sub heading</Typography.Body>
                </Skeleton>
              }
              avatar={
                <Skeleton radius='round'>
                  <Avatar name='N' variant='circle' size='large' style={{ margin: 2 }} />
                </Skeleton>
              }
            />
            <Skeleton height={200} width={360} radius={0}>
              <CardMedia
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
                }}
                height={200}
              />
            </Skeleton>
            <CardTitle type='custom'>
              <Skeleton style={{ marginBottom: 10 }}>
                <Typography.Title>Title</Typography.Title>
              </Skeleton>
              <Skeleton>
                <Typography.Body>Sub title</Typography.Body>
              </Skeleton>
            </CardTitle>
            <CardContent>
              {show ? (
                <>
                  <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
                  <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
                  <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
                </>
              ) : (
                <Typography.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </Typography.Body>
              )}
            </CardContent>
            <CardActions justify='flex-end'>
              <Skeleton style={{ marginRight: 10 }} radius='round'>
                <Button.Outlined title='Action' />
              </Skeleton>
              <Skeleton radius='round'>
                <Button.Filled title='Action' />
              </Skeleton>
            </CardActions>
          </Card>
        </SkeletonGroup>
      </Container>
    </Container>
  );
};

export const skeletonDocumentation: ContentValues = {
  mainHeading: 'skeletonDocumentation:mainHeading',
  mainDescription: 'skeletonDocumentation:mainDescription',
  examples: [
    {
      name: 'skeletonDocumentation:example1-name',
      description: 'skeletonDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<SkeletonGroup show={show}>
  <Skeleton style={{ marginBottom: 22 }}>
    <Typography.Title>Heading</Typography.Title>
  </Skeleton>
  <Skeleton style={{ marginBottom: 22 }}>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
    </Typography.Body>
  </Skeleton>
  <Skeleton style={{ marginBottom: 22 }}>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
    </Typography.Body>
  </Skeleton>
  <Skeleton>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lectus purus
    </Typography.Body>
  </Skeleton>
</SkeletonGroup>`,
    },
    {
      name: 'skeletonDocumentation:example2-name',
      description: 'skeletonDocumentation:example2-description',
      id: 'radius',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Skeleton height={40} width={150} radius='round'>
  {show ? null : <Button.Filled title='Filled Button' />}
</Skeleton>

<Skeleton show={show}>
  <Chip value='Chip' />
</Skeleton>

<Skeleton show={show} height={40} width={150} radius={0} />`,
    },
    {
      name: 'skeletonDocumentation:example3-name',
      description: 'skeletonDocumentation:example3-description',
      id: 'card',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
      code: `<SkeletonGroup show={show}>
  <Card variant='outlined' width={360}>
    <CardHeader
      heading={
        <Skeleton style={{ marginBottom: 10 }}>
          <Typography.Title>Heading</Typography.Title>
        </Skeleton>
      }
      subHeading={
        <Skeleton>
          <Typography.Body>Sub heading</Typography.Body>
        </Skeleton>
      }
      avatar={
        <Skeleton radius='round'>
          <Avatar name='N' variant='circle' size='large' style={{ margin: 2 }} />
        </Skeleton>
      }
    />
    <Skeleton height={200} width={360} radius={0}>
      <CardMedia
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
        }}
        height={200}
      />
    </Skeleton>
    <CardTitle type='custom'>
      <Skeleton style={{ marginBottom: 10 }}>
        <Typography.Title>Title</Typography.Title>
      </Skeleton>
      <Skeleton>
        <Typography.Body>Sub title</Typography.Body>
      </Skeleton>
    </CardTitle>
    <CardContent>
      {show ? (
        <>
          <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
          <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
          <Skeleton width={320} height={20} style={{ marginBottom: 10 }} />
        </>
      ) : (
        <Typography.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Typography.Body>
      )}
    </CardContent>
    <CardActions justify='flex-end'>
      <Skeleton style={{ marginRight: 10 }} radius='round'>
        <Button.Outlined title='Action' />
      </Skeleton>
      <Skeleton radius='round'>
        <Button.Filled title='Action' />
      </Skeleton>
    </CardActions>
  </Card>
</SkeletonGroup>`,
    },
  ],
  properties: [
    {
      name: 'show',
      optional: true,
      type: 'boolean',
      description: 'skeletonDocumentation:property-show-description',
    },
    {
      name: 'width',
      optional: true,
      type: 'string | number',
      description: 'skeletonDocumentation:property-width-description',
      defaultValue: '32',
    },
    {
      name: 'height',
      optional: true,
      type: 'string | number',
      description: 'skeletonDocumentation:property-height-description',
      defaultValue: '32',
    },
    {
      name: 'children',
      optional: true,
      type: 'React.ReactChild | null',
      description: 'skeletonDocumentation:property-children-description',
    },
    {
      name: 'radius',
      description: 'skeletonDocumentation:property-radius-description',
      optional: true,
      type: "number | 'square' | 'round'",
      defaultValue: '8',
    },
    {
      name: 'colors',
      description: 'skeletonDocumentation:property-colors-description',
      optional: true,
      type: 'string[]',
    },

    {
      name: 'colorMode',
      description: 'skeletonDocumentation:property-colorMode-description',
      optional: true,
      type: "'light' | 'dark'",
    },

    {
      name: 'boxHeight',
      description: 'skeletonDocumentation:property-boxHeight-description',
      optional: true,
      type: 'number | string',
    },
    {
      name: 'backgroundColor',
      description: 'skeletonDocumentation:property-backgroundColor-description',
      optional: true,
      type: 'string',
    },
    {
      name: 'backgroundSize',
      description: 'skeletonDocumentation:property-backgroundSize-description',
      optional: true,
      type: 'number',
      defaultValue: '6',
    },

    {
      name: 'disableExitAnimation',
      description: 'skeletonDocumentation:property-disableExitAnimation-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
  ],
};

export const skeletonIndex: HeadingProps = {
  heading: 'skeletonDocumentation:mainHeading',
  links: [
    {
      title: 'skeletonDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'skeletonDocumentation:example2-name',
      link: '#radius',
    },
    {
      title: 'skeletonDocumentation:example3-name',
      link: '#card',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
