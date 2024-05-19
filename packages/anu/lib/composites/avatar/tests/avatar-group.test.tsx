/* eslint-disable unicorn/prefer-module */
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import AvatarGroup from '../components/avatar/avatar-group';
import LetterAvatar from '../components/avatar/letter-avatar';

describe('Testing for Avatar Group', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
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
    <DripsyApp theme={defaultTheme}>
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
    <DripsyApp theme={defaultTheme}>
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

describe('Testing for Avatar Group - large', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10} spacing={10}>
        <LetterAvatar name={name} variant='circle' size='large' />
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

describe('Testing for Avatar Group - small', () => {
  const name = 'Jitesh';

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' size='small' />
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

describe('Testing for Avatar Group - with style', () => {
  const name = 'Jitesh';
  const style = { width: 60, height: 60 };

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' style={style} />
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

describe('Testing for Avatar Group - with style (different height and width)', () => {
  const name = 'Jitesh';
  const style = { width: 60, height: 50 };

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' style={style} />
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

describe('Testing for Avatar Group - with style (only height)', () => {
  const name = 'Jitesh';
  const style = { height: 50 };

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' style={style} />
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

describe('Testing for Avatar Group - with style (only width)', () => {
  const name = 'Jitesh';
  const style = { width: 50 };

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AvatarGroup total={10}>
        <LetterAvatar name={name} variant='circle' style={style} />
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
