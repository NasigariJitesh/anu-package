import 'setimmediate';

import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import renderer from 'react-test-renderer';

import FileUpload from '../components/file-upload';

describe('Testing for FileUpload', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <FileUpload category='regular' size='medium' type='outlined' title='Upload' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for FileUpload - image', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <FileUpload category='icon-button' type='outlined' icon={{ name: 'checked' }} variant='image' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for FileUpload - file', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <FileUpload
        category='floating-action'
        FABColor='primary'
        size='medium'
        type='outlined'
        icon={{ name: 'checked' }}
        variant='image'
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for FileUpload - Extended Fab', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <FileUpload
        category='extended-floating-action'
        FABColor='primary'
        size='medium'
        title='Upload'
        type='outlined'
        icon={{ name: 'checked' }}
        variant='image'
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
