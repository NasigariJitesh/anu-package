/* eslint-disable unicorn/prefer-module */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import AvatarGroup from '../components/avatar/avatar-group';
import LetterAvatar from '../components/avatar/letter-avatar';

describe('Testing for Avatar Group', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <AvatarGroup max={3}>
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
      </AvatarGroup>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Avatar Group - with Total', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
      </AvatarGroup>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Avatar Group - with Total', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <AvatarGroup max={6}>
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
        <LetterAvatar name={name} variant='circle' />
      </AvatarGroup>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
