/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import { Avatar, Button, Container, IconButton, Typography } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import Card, { CardActions, CardContent, CardHeader, CardMedia, CardTitle } from '../components';

describe('Testing for Card', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card width={300}>
        <CardHeader
          heading='Heading'
          avatar={<Avatar name='N' variant='circle' size='large' />}
          action={<IconButton variant='standard' icon={{ name: 'favorite' }} />}
        />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          height={100}
        />
        <CardTitle type='default' title='Title' />
        <CardContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </CardContent>
        <CardActions justify='flex-end'>
          <Button.Outlined title='Action' />
          <Button.Filled title='Action' />
        </CardActions>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Filled', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='filled' width={300}>
        <CardHeader
          heading='Heading'
          avatar={<Avatar name='N' variant='circle' size='large' />}
          action={<IconButton variant='standard' icon={{ name: 'favorite' }} />}
        />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          height={100}
        />
        <CardTitle type='default' title='Title' />
        <CardContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </CardContent>
        <CardActions justify='flex-end'>
          <Button.Outlined title='Action' />
          <Button.Filled title='Action' />
        </CardActions>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Outlined', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='outlined' width={300} maxWidth={300}>
        <CardHeader heading='Heading' avatar={<Avatar name='N' variant='circle' size='large' />} />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          height={100}
        />
        <CardTitle type='default' title='Title' subTitle='subTitle' />
        <CardContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </CardContent>
        <CardActions justify='flex-end'>
          <Button.Outlined title='Action' />
          <Button.Filled title='Action' />
        </CardActions>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Elevated', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='elevated' width={300}>
        <CardHeader heading='Heading' subHeading='subHeading' />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          height={100}
        />
        <CardTitle type='custom'>
          <Typography.Title>Lorem ipsum</Typography.Title>
        </CardTitle>
        <CardContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </CardContent>
        <CardActions justify='flex-end'>
          <Button.Outlined title='Action' />
          <Button.Filled title='Action' />
        </CardActions>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Vertical', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='elevated' orientation='vertical' width={300}>
        <CardHeader heading='Heading' subHeading='subHeading' />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          cardOrientation='vertical'
          height={100}
          width={'100%'}
        />
        <CardTitle type='custom'>
          <Typography.Title>Lorem ipsum</Typography.Title>
        </CardTitle>
        <CardContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </CardContent>
        <CardActions justify='flex-end'>
          <Button.Outlined title='Action' />
          <Button.Filled title='Action' />
        </CardActions>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Horizontal with height', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='elevated' orientation='horizontal' height={300}>
        <CardHeader heading='Heading' subHeading='subHeading' />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          cardOrientation='horizontal'
          width={100}
          height='100%'
        />
        <Container>
          <CardTitle type='custom'>
            <Typography.Title>Lorem ipsum</Typography.Title>
          </CardTitle>
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Outlined title='Action' />
            <Button.Filled title='Action' />
          </CardActions>
        </Container>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Card - Horizontal', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Card variant='elevated' orientation='horizontal' height={300}>
        <CardHeader heading='Heading' subHeading='subHeading' />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          cardOrientation='horizontal'
          width={100}
          height={undefined}
        />
        <Container>
          <CardTitle type='custom'>
            <Typography.Title>Lorem ipsum</Typography.Title>
          </CardTitle>
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Outlined title='Action' />
            <Button.Filled title='Action' />
          </CardActions>
        </Container>
      </Card>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
