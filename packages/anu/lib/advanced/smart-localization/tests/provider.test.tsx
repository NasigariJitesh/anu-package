import { render, screen } from '@testing-library/react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

import { AnuLocalizationProvider } from '../index';

const locales = {
  en: {
    value: 'English',
  },
  french: {
    value: 'French',
  },
};

describe('Testing for LocalizedTypography Provider', () => {
  const defaultLocale = 'en';
  let currentLocale = defaultLocale;

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <AnuLocalizationProvider locales={locales} default={defaultLocale}>
      children
    </AnuLocalizationProvider>,
  );

  const result = renderer.getRenderOutput();

  it('default locale is correct', () => {
    expect(result.props.value.defaultLocale).toBe(defaultLocale);
  });

  it('current locale is correct', () => {
    expect(result.props.value.currentLocale).toBe(currentLocale);
  });

  it('switching locale works', () => {
    currentLocale = 'fr';

    result.props.value.switchLocale(currentLocale);

    const afterSwitch = renderer.getRenderOutput();

    expect(afterSwitch.props.value.currentLocale).toBe(currentLocale);
  });

  it('Render the whole provider', () => {
    render(
      <AnuLocalizationProvider locales={locales} default={defaultLocale}>
        children
      </AnuLocalizationProvider>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
