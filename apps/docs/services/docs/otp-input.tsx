import { Container, OTPInput } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

export const otpInputDocumentation: ContentValues = {
  mainHeading: 'otpInputDocumentation:mainHeading',

  properties: [
    {
      name: 'numberOfDigits',
      type: 'number',
      description: 'otpInputDocumentation:property-numberOfDigits-description',
    },
    {
      name: 'value',
      type: 'string',
      description: 'otpInputDocumentation:property-value-description',
    },
    {
      name: 'type',
      type: "'alphabetic' | 'alphanumeric' | 'numeric'",
      description: 'otpInputDocumentation:property-type-description',
      defaultValue: "'numeric'",
      optional: true,
    },
    {
      name: 'variant',
      type: "'outlined' | 'filled'",
      description: 'otpInputDocumentation:property-variant-description',
      defaultValue: "'outlined'",
      optional: true,
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'otpInputDocumentation:property-onValueChange-description',

      optional: true,
    },
    {
      name: 'onSubmit',
      type: '(value: string) => void',
      description: 'otpInputDocumentation:property-onSubmit-description',

      optional: true,
    },
    {
      name: 'error',
      description: 'otpInputDocumentation:property-error-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'hideValue',
      description: 'otpInputDocumentation:property-hideValue-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },

    {
      name: 'disabled',
      description: 'otpInputDocumentation:property-disabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },

    {
      name: 'errorMessage',
      description: 'otpInputDocumentation:property-errorMessage-description',
      type: 'string[]',
      optional: true,
    },
    {
      name: 'style',
      description: 'textFieldDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'errorMessageStyle',
      description: 'otpInputDocumentation:property-errorMessageStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'containerStyle',
      description: 'otpInputDocumentation:property-containerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'textInputStyle',
      description: 'otpInputDocumentation:property-textInputStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'otpInputDocumentation:example1-name',
      id: 'filled-otp-input',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <OTPInput value='' variant='filled' numberOfDigits={4} containerStyle={style} />
          <OTPInput value='1234' variant='filled' numberOfDigits={4} containerStyle={style} />
        </Container>
      ),
      code: `<OTPInput value='' variant='filled' numberOfDigits={4} />
<OTPInput value='1234' variant='filled' numberOfDigits={4} />`,
    },
    {
      name: 'otpInputDocumentation:example2-name',
      id: 'outlined-otp-input',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <OTPInput value='' variant='outlined' numberOfDigits={4} containerStyle={style} />
          <OTPInput value='1234' variant='outlined' numberOfDigits={4} containerStyle={style} />
        </Container>
      ),
      code: `<OTPInput value='' variant='outlined' numberOfDigits={4} />
<OTPInput value='1234' variant='outlined' numberOfDigits={4} />
`,
    },
    {
      name: 'otpInputDocumentation:example3-name',
      id: 'error',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <OTPInput value='' variant='filled' numberOfDigits={4} containerStyle={style} error />
          <OTPInput value='' variant='outlined' numberOfDigits={4} containerStyle={style} error />
        </Container>
      ),
      code: `<OTPInput value='' variant='filled' numberOfDigits={4} containerStyle={style} error />
<OTPInput value='' variant='outlined' numberOfDigits={4} containerStyle={style} error />`,
    },
  ],
};

export const otpInputIndex: HeadingProps = {
  heading: 'otpInputDocumentation:mainHeading',
  links: [
    {
      title: 'otpInputDocumentation:example1-name',
      link: '#filled-otp-input',
    },

    {
      title: 'otpInputDocumentation:example2-name',
      link: '#outlined-otp-input',
    },

    {
      title: 'otpInputDocumentation:example3-name',
      link: '#error',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
