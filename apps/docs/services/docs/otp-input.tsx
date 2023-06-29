import { Container, OTPInput } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  marginVertical: 15,
  marginHorizontal: 40,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
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
      name: 'width',
      description: 'otpInputDocumentation:property-width-description',
      type: 'number',
      optional: true,
      defaultValue: '300',
    },

    {
      name: 'size',
      description: 'otpInputDocumentation:property-size-description',
      type: 'number',
      optional: true,
      defaultValue: '40',
    },
    {
      name: 'spacing',
      description: 'otpInputDocumentation:property-spacing-description',
      type: 'number',
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
      name: 'errorMessageStyle',
      description: 'otpInputDocumentation:property-errorMessageStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },

    {
      name: 'textStyle',
      description: 'otpInputDocumentation:property-textStyle-description',
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
          <Container disableGutters style={style}>
            <OTPInput value='' variant='filled' numberOfDigits={4} />
          </Container>
          <Container disableGutters style={style}>
            <OTPInput value='1234' variant='filled' numberOfDigits={4} />
          </Container>
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
          <Container disableGutters style={style}>
            <OTPInput value='' variant='outlined' numberOfDigits={4} />
          </Container>
          <Container disableGutters style={style}>
            <OTPInput value='1234' variant='outlined' numberOfDigits={4} />
          </Container>
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
          <Container disableGutters style={style}>
            <OTPInput value='' variant='filled' numberOfDigits={4} error />
          </Container>
          <Container disableGutters style={style}>
            <OTPInput value='' variant='outlined' numberOfDigits={4} error />
          </Container>
        </Container>
      ),
      code: `<OTPInput value='' variant='filled' numberOfDigits={4}  error />
<OTPInput value='' variant='outlined' numberOfDigits={4}  error />`,
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
