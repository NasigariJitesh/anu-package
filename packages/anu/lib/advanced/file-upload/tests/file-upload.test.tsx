import 'setimmediate';

import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import renderer from 'react-test-renderer';

import FileUpload from '../components/file-upload';

describe('Testing for FileUpload', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <FileUpload category='common' size='medium' variant='elevated' title='Upload' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for FileUpload - image', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <FileUpload category='icon-button' variant='outlined' icon={{ name: 'checked' }} uploadVariant='image' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for FileUpload - file', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <FileUpload
        category='floating-action'
        FABColor='primary'
        size='medium'
        icon={{ name: 'checked' }}
        uploadVariant='image'
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
    <DripsyApp theme={defaultTheme}>
      <FileUpload
        category='extended-floating-action'
        FABColor='primary'
        title='Upload'
        icon={{ name: 'checked' }}
        uploadVariant='image'
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
