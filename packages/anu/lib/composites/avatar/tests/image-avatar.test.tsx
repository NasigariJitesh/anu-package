/* eslint-disable unicorn/prefer-module */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '../components';
import ImageAvatar from '../components/avatar/image-avatar';

describe('Testing for Image Avatar Rounded', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <ImageAvatar source={require('../utils/placeholder.png')} />
      <ImageAvatar size='large' source={require('../utils/placeholder.png')} />
      <ImageAvatar size='small' source={require('../utils/placeholder.png')} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check Common Renderer', () => {
    // @ts-expect-error This will be an array and not object
    const props = [result[0]?.props, result[1]?.props, result[2]?.props];

    const commonRendererTree = renderer.create(
      <DripsyApp theme={makeTheme({})}>
        <Avatar {...props[0]} />
        <Avatar {...props[1]} />
        <Avatar {...props[2]} />
      </DripsyApp>,
    );

    expect(commonRendererTree.toJSON()).toMatchSnapshot();
  });
});

describe('Testing for Image Avatar Circle', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <ImageAvatar source={require('../utils/placeholder.png')} variant='circle' />
      <ImageAvatar
        size='large'
        source={{
          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        }}
        onLoadStart={() => {}}
        onLoad={() => {}}
        onLoadEnd={() => {}}
        variant='circle'
      />
      <ImageAvatar
        size='small'
        source={{
          uri: 'https://images.pexels.com/photos/220453/pels-photo-220453.jpeg',
        }}
        onError={() => {}}
        variant='circle'
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check Common Renderer', () => {
    // @ts-expect-error This will be an array and not object
    const props = [result[0]?.props, result[1]?.props, result[2]?.props];

    const commonRendererTree = renderer.create(
      <DripsyApp theme={makeTheme({})}>
        <Avatar {...props[0]} />
        <Avatar {...props[1]} />
        <Avatar {...props[2]} />
      </DripsyApp>,
    );

    expect(commonRendererTree.toJSON()).toMatchSnapshot();
  });
});
