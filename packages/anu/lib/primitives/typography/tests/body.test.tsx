import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RenderComponent } from '../components/common';
import Typography from '../index';

describe('Testing for Typography.Body', () => {
  const innerText = 'Body';

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Typography.Body>{innerText}</Typography.Body>);
  const result = renderer.getRenderOutput();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check Common Renderer', () => {
    renderer.render(<RenderComponent {...result.props} />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check Common Renderer with no tag', () => {
    renderer.render(<RenderComponent {...result.props} component={undefined} />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check if the child is correct', () => {
    expect(result.props.children).toBe(innerText);
  });
});
