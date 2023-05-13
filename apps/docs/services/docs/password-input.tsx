import { Container, PasswordInput } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  width: 280,
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

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
            <PasswordInput value='' variant='filled' containerStyle={style} showClearButton={false} />
            <PasswordInput value='password' variant='filled' containerStyle={style} showClearButton={false} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='filled' disabled containerStyle={style} showClearButton={false} />
            <PasswordInput value='password' variant='filled' disabled containerStyle={style} showClearButton={false} />
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
            <PasswordInput value='' variant='outlined' containerStyle={style} showClearButton={false} />
            <PasswordInput value='password' variant='outlined' containerStyle={style} showClearButton={false} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='' variant='outlined' disabled containerStyle={style} showClearButton={false} />
            <PasswordInput
              value='password'
              variant='outlined'
              disabled
              containerStyle={style}
              showClearButton={false}
            />
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
            <PasswordInput value='' variant='filled' containerStyle={style} error showClearButton={false} />
            <PasswordInput value='' variant='outlined' containerStyle={style} error showClearButton={false} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PasswordInput value='password' variant='filled' containerStyle={style} error showClearButton={false} />
            <PasswordInput value='password' variant='outlined' containerStyle={style} error showClearButton={false} />
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
