/* eslint-disable no-secrets/no-secrets */
import { Container, DatePickerInput } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

const Example1 = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <Container disableGutters style={style}>
      <SafeAreaProvider>
        <DatePickerInput label='Birthdate' value={inputDate} onChange={(date) => setInputDate(date)} />
      </SafeAreaProvider>
    </Container>
  );
};

const Example2 = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <Container disableGutters style={style}>
      <DatePickerInput
        label='Birthdate'
        value={inputDate}
        onChange={(date) => {
          setInputDate(date);
        }}
        withModal={false}
      />
    </Container>
  );
};
export const datePickerInputDocumentation: ContentValues = {
  mainHeading: 'datePickerInputDocumentation:mainHeading',
  mainDescription: 'datePickerInputDocumentation:mainDescription',
  examples: [
    {
      name: 'datePickerInputDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<SafeAreaProvider>
  <DatePickerInput label='Birthdate' value={inputDate} onChange={(date) => setInputDate(date)} />
</SafeAreaProvider>`,
    },
    {
      name: 'datePickerInputDocumentation:example2-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: "<DatePickerInput label='Birthdate' value={inputDate} onChange={(date) => {setInputDate(date)}} withModal={false} />",
    },
  ],
  properties: [
    {
      name: 'onChange',
      type: '(date?: Date) => void',
      description: 'datePickerInputDocumentation:property-onChange-description',
    },
    {
      name: 'value',
      optional: true,
      type: 'Date',
      description: 'datePickerInputDocumentation:property-value-description',
    },

    {
      name: 'locale',
      description: 'datePickerInputDocumentation:property-locale-description',
      type: 'string',
      optional: true,
      defaultValue: "'en'",
    },
    {
      name: 'validRange',
      description: 'datePickerInputDocumentation:property-validRange-description',
      type: '{ startDate?: Date; endDate?: Date; disabledDates?: Date[] }',
      optional: true,
    },
    {
      name: 'withDateFormatInLabel',
      description: 'datePickerInputDocumentation:property-withDateFormatInLabel-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'hideValidationErrors',
      description: 'datePickerInputDocumentation:property-hideValidationErrors-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'hasError',
      description: 'datePickerInputDocumentation:property-hasError-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'onValidationError',
      description: 'datePickerInputDocumentation:property-onValidationError-description',
      type: '(error: string | null) => void',
      optional: true,
    },
    {
      name: 'calendarIcon',
      description: 'datePickerInputDocumentation:property-calendarIcon-description',
      optional: true,
      type: 'string',
      defaultValue: "'calendar-today'",
    },
    {
      name: 'saveLabel',
      description: 'datePickerInputDocumentation:property-saveLabel-description',
      type: 'string',
      optional: true,
    },
  ],
};

export const datePickerInputIndex: HeadingProps = {
  heading: 'datePickerInputDocumentation:mainHeading',
  links: [
    {
      title: 'datePickerInputDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
