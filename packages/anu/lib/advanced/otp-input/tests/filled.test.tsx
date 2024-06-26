import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import renderer from 'react-test-renderer';

import OtpInput from '../components/otp-input';

describe('Testing for OTP Field with value', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <OtpInput numberOfDigits={4} value='1234' variant='filled' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for OTP Field Filled', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <OtpInput numberOfDigits={4} value='' variant='filled' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for OTP Field Filled with excess value digits', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <OtpInput numberOfDigits={4} value='968523' variant='filled' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for OTP Field Filled with excess value digits', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <OtpInput numberOfDigits={4} value='968523' variant='filled' disabled />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
