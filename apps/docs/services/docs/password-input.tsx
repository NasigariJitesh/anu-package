import { Container, PasswordInput as PasswordInputComponent, PasswordInputProps } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  width: 250,
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const PasswordInput = (props: PasswordInputProps) => {
  const [text, setText] = useState(props.value);

  return <PasswordInputComponent {...props} style={style} value={text} onChangeText={setText} />;
};

export const passwordInputDocumentation: ContentValues = {
  mainHeading: 'passwordInputDocumentation:mainHeading',

  properties: [
    {
      name: 'value',
      type: 'string',
      description: 'passwordInputDocumentation:property-value-description',
    },
    {
      name: 'variant',
      type: "'outlined' | 'filled'",
      description: 'passwordInputDocumentation:property-variant-description',
      defaultValue: "'outlined'",
      optional: true,
    },
  ],
  externalProperties: {
    link: '/components/text-field',
    title: 'passwordInputDocumentation:external-properties-title',
  },
  examples: [
    {
      name: 'passwordInputDocumentation:example1-name',
      id: 'filled-otp-input',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='filled' />
            <PasswordInput value='password' variant='filled' />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='filled' disabled />
            <PasswordInput value='password' variant='filled' disabled />
          </Container>
        </Container>
      ),
      code: `<PasswordInput value='' variant='filled' />
<PasswordInput value='password' variant='filled' />
  
<PasswordInput value='' variant='filled' disabled />
<PasswordInput value='password' variant='filled' disabled />`,
    },
    {
      name: 'passwordInputDocumentation:example2-name',
      id: 'outlined-otp-input',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='outlined' />
            <PasswordInput value='password' variant='outlined' />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='outlined' disabled />
            <PasswordInput value='password' variant='outlined' disabled />
          </Container>
        </Container>
      ),
      code: `<PasswordInput value='' variant='outlined' />
<PasswordInput value='password' variant='outlined' />
  
<PasswordInput value='' variant='outlined' disabled />
<PasswordInput value='password' variant='outlined' disabled />`,
    },
    {
      name: 'passwordInputDocumentation:example3-name',
      id: 'error',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='filled' error />
            <PasswordInput value='' variant='outlined' error />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='password' variant='filled' error />
            <PasswordInput value='password' variant='outlined' error />
          </Container>
        </Container>
      ),
      code: `<PasswordInput value='' variant='filled' error />
<PasswordInput value='' variant='outlined' error />

<PasswordInput value='password' variant='filled' error />
<PasswordInput value='password' variant='outlined' error />`,
    },
  ],
};

export const passwordInputIndex: HeadingProps = {
  heading: 'passwordInputDocumentation:mainHeading',
  links: [
    {
      title: 'passwordInputDocumentation:example1-name',
      link: '#filled-otp-input',
    },

    {
      title: 'passwordInputDocumentation:example2-name',
      link: '#outlined-otp-input',
    },

    {
      title: 'passwordInputDocumentation:example3-name',
      link: '#error',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
