/* eslint-disable no-secrets/no-secrets */
import { Container, DatePickerInput } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const style = {
  margin: 15,
};


const fieldStyle = { width:270 };
const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const Example1 = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <Container disableGutters style={style}>
      <SafeAreaProvider>
        <DatePickerInput style={fieldStyle} label='Birth date' value={inputDate} onChange={(date) => setInputDate(date)} />
      </SafeAreaProvider>
    </Container>
  );
};

const Example2 = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <Container disableGutters style={style}>
      <DatePickerInput
        label='Birth date'
        value={inputDate}
        onChange={(date) => {
          setInputDate(date);
        }}
        style={fieldStyle}
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
  <DatePickerInput label='Birth date' value={inputDate} onChange={(date) => setInputDate(date)} />
</SafeAreaProvider>`,
    },
    {
      name: 'datePickerInputDocumentation:example2-name',
      id: 'without-modal',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: "<DatePickerInput label='Birth date' value={inputDate} onChange={(date) => {setInputDate(date)}} withModal={false} />",
    },
  ],
  externalProperties: {
    link: '/components/text-field',
    title: 'datePickerInputDocumentation:external-properties-title',
  },
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
      name: 'okLabel',
      description: 'datePickerInputDocumentation:property-okLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Ok',
    },
    {
      name: 'okLabelDisabled',
      description: 'datePickerInputDocumentation:property-okLabelDisabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'cancelLabel',
      description: 'datePickerInputDocumentation:property-cancelLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Cancel',
    },
    {
      name: 'cancelLabelDisabled',
      description: 'datePickerInputDocumentation:property-cancelLabelDisabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'startYear',
      description: 'datePickerInputDocumentation:property-startYear-description',
      type: 'number',
      optional: true,
      defaultValue: '1900',
    },
    {
      name: 'endYear',
      description: 'datePickerInputDocumentation:property-endYear-description',
      type: 'number',
      optional: true,
      defaultValue: '2200',
    },
    {
      name: 'inputEnabled',
      description: 'datePickerInputDocumentation:property-inputEnabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'mask',
      description: 'datePickerInputDocumentation:property-mask-description',
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
      title: 'datePickerInputDocumentation:example2-name',
      link: '#without-modal',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
