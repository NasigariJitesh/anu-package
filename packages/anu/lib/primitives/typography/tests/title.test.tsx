import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RenderComponent } from '../components/common';
import Typography from '../index';

describe('Testing for Typography.Title', () => {
  const innerText = 'Title';

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Typography.Title>{innerText}</Typography.Title>);

  const result = renderer.getRenderOutput();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });

  it('Check if the child is correct', () => {
    expect(result.props.children).toBe(innerText);
  });

  it('Render with H6 tag', () => {
    renderer.render(<Typography.Title component='h6'>{innerText}</Typography.Title>);

    const h6 = renderer.getRenderOutput();

    expect(h6).toMatchSnapshot();
  });

  it('Check Common Renderer with H3 tag', () => {
    renderer.render(<RenderComponent {...result.props} component='h3' />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check Common Renderer with H4 tag', () => {
    renderer.render(<RenderComponent {...result.props} component='h4' />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check Common Renderer with H5 tag', () => {
    renderer.render(<RenderComponent {...result.props} component='h5' />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });

  it('Check Common Renderer with H6 tag', () => {
    renderer.render(<RenderComponent {...result.props} component='h6' />);

    const commonResult = renderer.getRenderOutput();

    expect(commonResult).toMatchSnapshot();
  });
});
