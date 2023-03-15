import ShallowRenderer from 'react-test-renderer/shallow';

import EN from '../../../../../../apps/docs/services/locale/en.json';
import LocalizedTypography from '../index';

describe('Testing for LocalizedTypography.Body', () => {
  const localeKey = 'hello';

  const child = EN[localeKey];

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<LocalizedTypography.Body localeKey={localeKey} />);
  const result = renderer.getRenderOutput();

  it('renders component snapshot correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('shows the child string as intended', () => {
    expect(result.props.children).toBe(child);
  });

  it('shows nothing if the key is empty string', () => {
    jest.spyOn(console, 'error').mockImplementation();

    renderer.render(<LocalizedTypography.Body localeKey={''} />);
    const reRenderResult = renderer.getRenderOutput();

    expect(reRenderResult.props.children).toBeUndefined();

    expect(console.error).toBeCalled();
  });
});
