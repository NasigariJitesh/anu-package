import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import renderer from 'react-test-renderer';

import { RenderComponent } from '../components/common';
import Typography from '../index';

describe('Testing for Typography.Label', () => {
  const innerText = 'Body';

  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Typography.Body>{innerText}</Typography.Body>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check Common Renderer', () => {
    // @ts-expect-error This will be an object and not array
    const props = result?.props;

    const commonRendererTree = renderer.create(
      <DripsyApp theme={defaultTheme}>
        <RenderComponent {...props} />
      </DripsyApp>,
    );

    expect(commonRendererTree.toJSON()).toMatchSnapshot();
  });

  it('Check if the child is correct', () => {
    // @ts-expect-error This test will clarify if the children contains text or not
    expect(result.children).toEqual(expect.arrayContaining([innerText]));
  });
});
