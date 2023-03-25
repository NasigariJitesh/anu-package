/* eslint-disable unicorn/prefer-module */
import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import placeholder from '../assets/placeholder.png';
import Avatar from '../components';
import ImageAvatar from '../components/avatar/image-avatar';

describe('Testing for Image Avatar Rounded', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <ImageAvatar source={{ uri: placeholder.src }} />
      <ImageAvatar size='large' source={{ uri: placeholder.src }} />
      <ImageAvatar size='small' source={{ uri: placeholder.src }} />
    </DripsyApp>,
  );

  const result = tree;

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
      <ImageAvatar source={{ uri: placeholder.src }} variant='circle' />
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
          uri: placeholder.src + '0',
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

describe('Testing for Image Avatar Events error', () => {
  it('should trigger error handler', () => {
    jest.spyOn(console, 'error').mockImplementation();

    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar
          source={{ uri: placeholder.src }}
          alt='image'
          testID='Image-test'
          variant='circle'
          onError={() => console.error('érror')}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'error');

    expect(console.error).toBeCalled();
  });
  it('should trigger error handler without any function', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar source={{ uri: placeholder.src }} testID='Image-test' variant='circle' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'error');
  });
});

describe('Testing for Image Avatar Events load', () => {
  it('should trigger on load handler', () => {
    jest.spyOn(console, 'log').mockImplementation();

    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar
          source={{ uri: placeholder.src }}
          alt='image'
          testID='Image-test'
          variant='circle'
          onLoad={() => console.log('load successful')}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'load');

    expect(console.log).toBeCalled();
  });

  it('should trigger on load handler without any function', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar source={{ uri: placeholder.src }} testID='Image-test' variant='circle' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'load');
  });
});

describe('Testing for Image Avatar partial load', () => {
  it('should trigger partial load handler', () => {
    jest.spyOn(console, 'error').mockImplementation();

    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar
          source={{ uri: placeholder.src }}
          testID='Image-test'
          variant='circle'
          onPartialLoad={() => console.error('load partial')}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'onPartialLoad');

    expect(console.error).toBeCalled();
  });
  it('should trigger partial load handler without any function', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <ImageAvatar source={{ uri: placeholder.src }} testID='Image-test' variant='circle' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('Image-test'), 'onPartialLoad');
  });
});
