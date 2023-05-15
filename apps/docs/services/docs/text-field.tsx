import { Container, Icon, TextField as TextFieldComponent, TextFieldProps } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
  width: 280,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const TextField = (props: TextFieldProps) => {
  const [text, setText] = useState(props.value ?? '');

  return <TextFieldComponent {...props} containerStyle={style} value={text} onChangeText={setText} />;
};

export const textFieldDocumentation: ContentValues = {
  mainHeading: 'textFieldDocumentation:mainHeading',
  mainDescription: 'textFieldDocumentation:mainDescription',
  properties: [
    {
      name: 'variant',
      type: "'outlined' | 'filled'",
      description: 'textFieldDocumentation:property-variant-description',
      defaultValue: "'outlined' ",
    },
    {
      name: 'label',
      type: 'string',
      description: 'textFieldDocumentation:property-label-description',
    },
    {
      name: 'leadingIcon',
      type: 'ReactNode',
      optional: true,
      description: 'textFieldDocumentation:property-leadingIcon-description',
    },
    {
      name: 'trailingIcon',
      type: 'ReactNode',
      optional: true,
      description: 'textFieldDocumentation:property-trailingIcon-description',
    },
    {
      name: 'disabled',
      description: 'textFieldDocumentation:property-disabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'errorMessage',
      description: 'textFieldDocumentation:property-errorMessage-description',
      type: 'string[]',
      optional: true,
    },
    {
      name: 'supportingText',
      description: 'textFieldDocumentation:property-supportingText-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'errorMessage',
      description: 'textFieldDocumentation:property-errorMessage-description',
      type: 'string | string[]',
      optional: true,
    },
    {
      name: 'supportingTextStyle',
      description: 'textFieldDocumentation:property-supportingTextStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'errorMessageStyle',
      description: 'textFieldDocumentation:property-errorMessageStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'containerStyle',
      description: 'textFieldDocumentation:property-containerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'textInputStyle',
      description: 'textFieldDocumentation:property-textInputStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },

    {
      name: 'style',
      description: 'textFieldDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'textFieldDocumentation:property-pressableProps-description',
      type: 'pressableProps',
      optional: true,
    },
    {
      name: 'sx',
      description: 'textFieldDocumentation:property-sx-description',
      type: 'Sx',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'textFieldDocumentation:example1-name',
      id: 'filled-text-field',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              value=''
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              containerStyle={style}
            />
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
              value=''
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
      code: `<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='' />
<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' />

<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='' disabled/>
<TextField variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'textFieldDocumentation:example2-name',
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
              value=''
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
              variant='filled'
              label='Label Text'
              supportingText='Supporting text'
              value='Input Text'
              containerStyle={style}
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
              value=''
            />
            <TextField
              leadingIcon={<Icon color='inherit' name='search' />}
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
      code: `<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value=''/>
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' name='close' />} />

<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='' disabled/>
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='filled' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'textFieldDocumentation:example3-name',
      id: 'outlined-text-field',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              value=''
              variant='outlined'
              label='Label Text'
              supportingText='Supporting text'
              containerStyle={style}
            />
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
              value=''
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
      code: `<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value=''/>
<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' />

<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value='' disabled/>
<TextField variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'textFieldDocumentation:example4-name',
      id: 'outlined-text-field-with-icons',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              value=''
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
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextField
              value=''
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
              containerStyle={style}
            />
          </Container>
        </Container>
      ),
      code: `<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='' />
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text'} />

<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='' disabled/>
<TextField leadingIcon={<Icon color='inherit' name='search' />} variant='outlined' label='Label Text' supportingText='Supporting text' value='Input Text' disabled/>`,
    },
    {
      name: 'textFieldDocumentation:example5-name',
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
  heading: 'textFieldDocumentation:mainHeading',
  links: [
    {
      title: 'textFieldDocumentation:example1-name',
      link: '#filled-text-field',
    },
    {
      title: 'textFieldDocumentation:example2-name',
      link: '#filled-text-field-with-icons',
    },
    {
      title: 'textFieldDocumentation:example3-name',
      link: '#outlined-text-field',
    },
    {
      title: 'textFieldDocumentation:example4-name',
      link: '#outlined-text-field-with-icons',
    },
    {
      title: 'textFieldDocumentation:example5-name',
      link: '#error-text-field',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
