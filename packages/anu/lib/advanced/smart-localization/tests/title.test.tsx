import ShallowRenderer from 'react-test-renderer/shallow';

import EN from '../../../../../../apps/docs/services/locale/en.json';
import LocalizedTypography from '../index';

describe('Testing for LocalizedTypography.Title', () => {
  const localeKey = 'hello';

  const child = EN[localeKey];

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<LocalizedTypography.Title localeKey={localeKey} />);
  const result = renderer.getRenderOutput();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check if the child is correct', () => {
    expect(result.props.children).toBe(child);
  });
});
