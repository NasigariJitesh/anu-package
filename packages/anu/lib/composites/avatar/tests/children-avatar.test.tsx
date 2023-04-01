/* eslint-disable unicorn/prefer-module */
import placeholder from 'anu/assets/avatar-placeholder.png';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { Icon, Image } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '../components';
import ChildrenAvatar from '../components/avatar/child-avatar';

jest.useFakeTimers();

describe('Testing for Children Avatar Rounded', () => {
  const name = 'NJ';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <ChildrenAvatar>{name}</ChildrenAvatar>
      <ChildrenAvatar size='large'>
        <Icon name='menu' />
      </ChildrenAvatar>
      <ChildrenAvatar size='small'>
        <Image alt='test' source={{ uri: placeholder.src }} />
      </ChildrenAvatar>
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

describe('Testing for Children Avatar Circle', () => {
  const name = 'NJ';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <ChildrenAvatar variant='circle'>{name}</ChildrenAvatar>
      <ChildrenAvatar size='large' variant='circle'>
        <DripsyApp theme={makeTheme({})}>
          <Icon name='menu' />
        </DripsyApp>
      </ChildrenAvatar>
      <ChildrenAvatar size='small' variant='circle'>
        <Image alt='test' source={{ uri: placeholder.src }} />
      </ChildrenAvatar>
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
