/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { Avatar, Button, IconButton, Image, Typography } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import Card, { CardActions, CardContent, CardHeader, CardMedia, CardTitle } from '../components';

describe('Testing for Card', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Card width={300}>
        <CardHeader
          heading='Heading'
          avatar={<Avatar name='N' variant='circle' size='large' />}
          action={<IconButton type='standard' icon={{ name: 'favorite' }} />}
        />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
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
    <DripsyApp theme={makeTheme({})}>
      <Card variant='filled' width={300}>
        <CardHeader
          heading='Heading'
          avatar={<Avatar name='N' variant='circle' size='large' />}
          action={<IconButton type='standard' icon={{ name: 'favorite' }} />}
        />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
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
    <DripsyApp theme={makeTheme({})}>
      <Card variant='outlined' maxWidth={300}>
        <CardHeader
          heading='Heading'
          avatar={<Avatar name='N' variant='circle' size='large' />}
          image={
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
              }}
              alt='header'
              style={{ height: 80, width: 80 }}
            />
          }
        />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
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
    <DripsyApp theme={makeTheme({})}>
      <Card variant='elevated'>
        <CardHeader heading='Heading' subHeading='subHeading' />
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
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
