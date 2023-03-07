import { Container, Icon, TextField } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const textFieldDocumentation: ContentValues = {
  mainHeading: 'Text Field',
  mainDescription:
    'Text fields allow users to enter text into a UI. They typically appear in forms and dialogs. There are two types of text fields: filled and outlined.',
  properties: [
    {
      name: 'variant',
      type: "'outlined' | 'filled'",
      description: 'The type of the text field',
      defaultValue: "'outlined' ",
    },
    {
      name: 'leadingIcon',
      type: 'ReactNode (optional)',
      description: 'Icon to be displayed to left of the text field',
    },

    {
      name: 'trailingIcon',
      type: 'ReactNode (optional)',
      description: 'Icon to be displayed to right of the text field',
    },
    {
      name: 'disabled',
      description: 'If true, the component is disabled.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'supportingText',
      description: 'Support text need to be displayed with the text field.',
      type: 'string (optional)',
    },
    {
      name: 'errorMessage',
      description: 'Error messages need to be displayed with the text field.',
      type: 'string | string[] (optional)',
    },
    {
      name: 'supportingTextStyle',
      description: 'Styles for the supporting text of text field.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'errorMessageStyle',
      description: 'Styles for the error messages of text field.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'containerStyle',
      description: 'The styles for the text field component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'pressableProps',
      description: 'The properties of the pressable component of react native (except sx)',
      type: 'pressableProps (optional)',
    },
    {
      name: 'sx',
      description: 'The system prop that allows defining system overrides as well as additional CSS styles.',
      type: 'Sx (optional)',
    },
  ],
  examples: [
    {
      name: 'Outlined',
      id: 'outlined',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <TextField variant='outlined' placeholder='Outlined' />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <TextField variant='outlined' placeholder='Outlined' />
</Container>`,
    },
    {
      name: 'Filled',
      id: 'filled',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <TextField variant='filled' placeholder='Filled' />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <TextField variant='filled' placeholder='Filled' />
</Container>`,
    },
    {
      name: 'Icon',
      id: 'icon',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <TextField
            variant='filled'
            leadingIcon={<Icon name='money' />}
            trailingIcon={<Icon name='close' />}
            placeholder='Filled'
          />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
<TextField
  variant='filled'
  leadingIcon={<Icon name='money' />}
  trailingIcon={<Icon name='close' />}
  placeholder='Filled'
/>
</Container>`,
    },
    {
      name: 'Supporting Text',
      id: 'supporting-text',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <TextField variant='filled' placeholder='Filled' supportingText='This is supporting text' />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <TextField variant='filled' placeholder='Filled' supportingText='This is supporting text' />
</Container>`,
    },
    {
      name: 'Error Messages',
      id: 'error-messages',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='flex-start'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <TextField variant='filled' placeholder='Filled' error />
          <TextField
            variant='filled'
            placeholder='Filled'
            error
            errorMessage={['This is an error message 1', 'This is an error message 2']}
          />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <TextField variant='filled' placeholder='Filled' error />
  <TextField variant='filled' placeholder='Filled' errorMessage={['This is an error message 1', 'This is an error message 2']} />
</Container>`,
    },
  ],
};

export const textFieldIndex: HeadingProps = {
  heading: 'Text Field',
  links: [
    {
      components: [
        {
          title: 'Outlined',
          link: '#outlined',
        },
        {
          title: 'Filled',
          link: '#filled',
        },
        {
          title: 'Icon',
          link: '#icon',
        },
        {
          title: 'Supporting Text',
          link: '#supporting-text',
        },
        {
          title: 'Error Messages',
          link: '#error-messages',
        },
      ],
      title: 'Examples',
      link: '#example',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
