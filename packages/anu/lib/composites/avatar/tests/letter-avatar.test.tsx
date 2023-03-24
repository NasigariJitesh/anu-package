/* eslint-disable unicorn/prefer-module */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '../components';
import LetterAvatar from '../components/avatar/letter-avatar';

describe('Testing for Letter Avatar Rounded', () => {
  const name = 'Jitesh';
  const lastName = 'Nasigari';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <LetterAvatar name={name} lastName={lastName} />
      <LetterAvatar size='large' name={name} lastName={lastName} />
      <LetterAvatar size='small' name={name} lastName={lastName} />
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

describe('Testing for Letter Avatar Circle', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <LetterAvatar name={name} variant='circle' />
      <LetterAvatar size='large' name={name} variant='circle' />
      <LetterAvatar size='small' name={name} variant='circle' />
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
