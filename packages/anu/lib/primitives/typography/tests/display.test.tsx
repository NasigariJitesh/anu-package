import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RenderComponent } from '../components/common';
import Typography from '../index';

describe('Testing for Typography.Display', () => {
  const innerText = 'Display';

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Typography.Display>{innerText}</Typography.Display>);

  const result = renderer.getRenderOutput();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check Common Renderer', () => {
    renderer.render(<RenderComponent {...result.props} />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check if the child is correct', () => {
    expect(result.props.children).toBe(innerText);
  });
});
