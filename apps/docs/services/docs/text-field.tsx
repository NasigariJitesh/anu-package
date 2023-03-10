import { Container, Icon, TextField } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

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
      name: 'label',
      type: 'string',
      description: 'The label for the text field',
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
      description: 'Styles for container of the text field component.',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'textInputStyle',
      description: 'Styles for the text input of the text field component.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'style',
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
      name: 'Filled Text Field',
      id: 'filled-text-field',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField variant='filled' label='Label Text' supportingText='Supporting text' containerStyle={style} />
            <TextField
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              containerStyle={style}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              disabled
              containerStyle={style}
            />
            <TextField
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              disabled
              containerStyle={style}
            />
          </Container>
        </Container>
      ),
      code: `<TextField variant='filled' label='Label Text' supportingText='Supporting text' />
<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' />

<TextField variant='filled' label='Label Text' supportingText='Supporting text' disabled/>
<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'Filled Text Field - with Icons',
      id: 'filled-text-field-with-icons',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              containerStyle={style}
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              containerStyle={style}
              trailingIcon={<Icon color='inherit' name='close' />}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              disabled
              containerStyle={style}
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              disabled
              trailingIcon={<Icon color='inherit' name='close' />}
              containerStyle={style}
            />
          </Container>
        </Container>
      ),
      code: `<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' />
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' trailingIcon={<Icon color='inherit' name='close' />} />

<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' disabled/>
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' trailingIcon={<Icon color='inherit' name='close' />} disabled/>`,
    },
    {
      name: 'Outlined Text Field',
      id: 'outlined-text-field',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField variant='outlined' label='Label Text' supportingText='Supporting text' containerStyle={style} />
            <TextField
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              containerStyle={style}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              disabled
              containerStyle={style}
            />
            <TextField
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              disabled
              containerStyle={style}
            />
          </Container>
        </Container>
      ),
      code: `<TextField variant='outlined' label='Label Text' supportingText='Supporting text' />
<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' />

<TextField variant='outlined' label='Label Text' supportingText='Supporting text' disabled/>
<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'Outlined Text Field - with Icons',
      id: 'outlined-text-field-with-icons',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              containerStyle={style}
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              containerStyle={style}
              trailingIcon={<Icon color='inherit' name='close' />}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              disabled
              containerStyle={style}
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              disabled
              trailingIcon={<Icon color='inherit' name='close' />}
              containerStyle={style}
            />
          </Container>
        </Container>
      ),
      code: `<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' />
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' trailingIcon={<Icon color='inherit'name='close' />} />

<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' disabled/>
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' trailingIcon={<Icon color='inherit' name='close' />} disabled/>`,
    },
    {
      name: 'Error text field',
      id: 'error-text-field',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <TextField
            leadingIcon={<Icon color='inherit' name='search' />}
            variant='filled'
            label='Label Text'
            supportingText='Supporting text'
            value='Input Text'
            containerStyle={style}
            error
            errorMessage={'Error message'}
          />
          <TextField
            leadingIcon={<Icon color='inherit' name='search' />}
            variant='outlined'
            label='Label Text'
            supportingText='Supporting text'
            value='Input Text'
            containerStyle={style}
            error
            errorMessage={'Error message'}
          />
        </Container>
      ),
      code: `<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' containerStyle={style} error errorMessage={'Error message'} />
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' containerStyle={style} error errorMessage={'Error message'} />`,
    },
  ],
};

export const textFieldIndex: HeadingProps = {
  heading: 'Text Field',
  links: [
    {
      title: 'Filled Text Field ',
      link: '#filled-text-field',
    },
    {
      title: 'Filled Text Field - with Icons',
      link: '#filled-text-field-with-icons',
    },
    {
      title: 'Outlined Text Field',
      link: '#outlined-text-field',
    },
    {
      title: 'Outlined Text Field - with Icons',
      link: '#outlined-text-field-with-icons',
    },
    {
      title: 'Error text field',
      link: '#error-text-field',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
