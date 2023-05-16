/* eslint-disable react-native/no-inline-styles */
import { Container, PhoneInput as PhoneInputComponent, PhoneInputProps } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
  width: 296,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const PhoneInput = (props: Omit<PhoneInputProps, 'value' | 'onChangeText'> & { value?: string }) => {
  const [text, setText] = useState(props.value ?? '');

  return (
    <PhoneInputComponent
      {...props}
      value={text}
      onChangeText={(value: string) => {
        setText(value);
      }}
      label='Phone number'
    />
  );
};

export const phoneInputDocumentation: ContentValues = {
  mainHeading: 'phoneInputDocumentation:mainHeading',
  mainDescription: 'phoneInputDocumentation:mainDescription',
  properties: [
    {
      name: 'value',
      type: 'string',
      description: 'phoneInputDocumentation:property-value-description',
    },
    {
      name: 'onChangeText',
      type: '(phoneNumber: string, phoneNumberData?: PhoneNumber) => void',
      description: 'phoneInputDocumentation:property-onChangeText-description',
    },
    {
      name: 'defaultCountryCode',
      type: 'string',
      description: 'phoneInputDocumentation:property-defaultCountryCode-description',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'phoneInputDocumentation:example1-name',
      id: 'filled-phone-input',
      component: (
        <Container disableGutters flexDirection='column-reverse' sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput variant='filled' autoCompleteContainerStyle={style} disabled />
            <PhoneInput variant='filled' autoCompleteContainerStyle={style} value='+1 438 678 5289' disabled />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput variant='filled' autoCompleteContainerStyle={style} />
            <PhoneInput variant='filled' autoCompleteContainerStyle={style} value='+1 438 678 5289' />
          </Container>
        </Container>
      ),
      code: `<PhoneInput variant='filled' />
<PhoneInput variant='filled' value='+1 438 678 5289' />

<PhoneInput variant='filled' disabled/>
<PhoneInput variant='filled' value='+1 438 678 5289' disabled/>`,
    },
    {
      name: 'phoneInputDocumentation:example2-name',
      id: 'outlined-phone-input',
      component: (
        <Container disableGutters flexDirection='column-reverse' sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput variant='outlined' autoCompleteContainerStyle={style} disabled />
            <PhoneInput variant='outlined' autoCompleteContainerStyle={style} value='+1 438 678 5289' disabled />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput variant='outlined' autoCompleteContainerStyle={style} />
            <PhoneInput variant='outlined' autoCompleteContainerStyle={style} value='+1 438 678 5289' />
          </Container>
        </Container>
      ),
      code: `<PhoneInput variant='outlined' />
<PhoneInput variant='outlined' value='+1 438 678 5289' />

<PhoneInput variant='outlined' disabled/>
<PhoneInput variant='outlined' value='+1 438 678 5289' disabled/>`,
    },
    {
      name: 'phoneInputDocumentation:example3-name',
      id: 'phone-input-error',
      component: (
        <Container disableGutters flexDirection='column-reverse' sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput
              variant='filled'
              error
              errorMessage='Error Message'
              autoCompleteContainerStyle={style}
              value='+1 438 678 5289'
            />
            <PhoneInput
              variant='outlined'
              error
              errorMessage='Error Message'
              autoCompleteContainerStyle={style}
              value='+1 438 678 5289'
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <PhoneInput variant='filled' error errorMessage='Error Message' autoCompleteContainerStyle={style} />
            <PhoneInput variant='outlined' error errorMessage='Error Message' autoCompleteContainerStyle={style} />
          </Container>
        </Container>
      ),
      code: `<PhoneInput variant='filled' error/>
<PhoneInput variant='outlined' error/>

<PhoneInput variant='filled' value='+1 438 678 5289' error/>
<PhoneInput variant='outlined' value='+1 438 678 5289' error/>`,
    },
  ],
  externalProperties: {
    link: '/components/auto-complete',
    title: 'phoneInputDocumentation:external-properties-title',
  },
};

export const phoneInputIndex: HeadingProps = {
  heading: 'phoneInputDocumentation:mainHeading',
  links: [
    {
      title: 'phoneInputDocumentation:example1-name',
      link: '#filled-phone-input',
    },
    {
      title: 'phoneInputDocumentation:example2-name',
      link: '#outlined-phone-input',
    },
    {
      title: 'phoneInputDocumentation:example3-name',
      link: '#phone-input-error',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
