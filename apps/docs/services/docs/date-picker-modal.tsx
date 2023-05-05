/* eslint-disable no-secrets/no-secrets */
import { Button, Container, DatePickerModal } from 'anu/lib';
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
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Filled title='Pick Date' onPress={() => setVisible(true)} />

      <SafeAreaProvider>
        <DatePickerModal
          date={inputDate}
          allowEditing
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}
          mode='single'
          onConfirm={(params: { date?: Date }) => {
            setInputDate(params.date);
            setVisible(false);
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
};

const Example2 = () => {
  const [inputDates, setInputDates] = useState<Date[]>([]);
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Filled title='Pick Multiple Dates' onPress={() => setVisible(true)} />

      <SafeAreaProvider>
        <DatePickerModal
          dates={inputDates}
          allowEditing
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}
          mode='multiple'
          onConfirm={(params: { dates: Date[] }) => {
            setInputDates(params.dates);
            setVisible(false);
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
};

const Example3 = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Filled title='Pick Date Range' onPress={() => setVisible(true)} />

      <SafeAreaProvider>
        <DatePickerModal
          startDate={startDate}
          endDate={endDate}
          allowEditing
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}
          mode='range'
          onConfirm={(params: { startDate?: Date; endDate?: Date }) => {
            setStartDate(params.startDate);
            setEndDate(params.endDate);
            setVisible(false);
          }}
          onToggle={() => {
            console.log('Toggle toggle');
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
};
export const datePickerModalDocumentation: ContentValues = {
  mainHeading: 'datePickerModalDocumentation:mainHeading',
  mainDescription: 'datePickerModalDocumentation:mainDescription',
  examples: [
    {
      name: 'datePickerModalDocumentation:example1-name',
      id: 'single',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Button.Filled title='Pick Date' onPress={() => setVisible(true)} />
<SafeAreaProvider>
  <DatePickerModal
    date={inputDate}
    allowEditing
    visible={visible}
    onDismiss={() => {
      setVisible(false);
    }}
    mode='single'
    onConfirm={(params: { date?: Date }) => {
      setInputDate(params.date);
      setVisible(false);
    }}
  />
</SafeAreaProvider>`,
    },
    {
      name: 'datePickerModalDocumentation:example2-name',
      id: 'multiple',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Button.Filled title='Pick Multiple Dates' onPress={() => setVisible(true)} />

<SafeAreaProvider>
  <DatePickerModal
    dates={inputDates}
    allowEditing
    visible={visible}
    onDismiss={() => {
      setVisible(false);
    }}
    mode='multiple'
    onConfirm={(params: { dates: Date[] }) => {
      setInputDates(params.dates);
      setVisible(false);
    }}
  />
</SafeAreaProvider>`,
    },
    {
      name: 'datePickerModalDocumentation:example3-name',
      id: 'range',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
      code: `<Button.Filled title='Pick Date Range' onPress={() => setVisible(true)} />

<SafeAreaProvider>
  <DatePickerModal
    startDate={startDate}
    endDate={endDate}
    allowEditing
    visible={visible}
    onDismiss={() => {
      setVisible(false);
    }}
    mode='range'
    onConfirm={(params: { startDate?: Date; endDate?: Date }) => {
      setStartDate(params.startDate);
      setEndDate(params.endDate);
      setVisible(false);
    }}
  />
</SafeAreaProvider>`,
    },
  ],
  properties: [
    {
      name: 'visible',
      type: 'boolean',
      description: 'datePickerModalDocumentation:property-visible-description',
    },
    {
      name: 'mode',
      type: "'single' | 'range' | 'multiple'",
      description: 'datePickerModalDocumentation:property-mode-description',
    },

    {
      name: 'date',
      type: 'Date',
      description: 'datePickerModalDocumentation:property-startDate-description',
      optional: true,
    },
    {
      name: 'dates',
      type: 'Date[]',
      description: 'datePickerModalDocumentation:property-startDate-description',
      optional: true,
    },
    {
      name: 'startDate',
      type: 'Date',
      description: 'datePickerModalDocumentation:property-startDate-description',
      optional: true,
    },
    {
      name: 'endDate',
      type: 'Date',
      description: 'datePickerModalDocumentation:property-endDate-description',
      optional: true,
    },
    {
      name: 'onConfirm',
      type: ' (params: { date: CalendarDate }) => void | (params: { dates: Date[] }) => void | (params: { startDate: CalendarDate; endDate: CalendarDate }) => void',
      description: 'datePickerModalDocumentation:property-onConfirm-description',
    },

    {
      name: 'onDismiss',
      type: '() => void',
      description: 'datePickerModalDocumentation:property-onDismiss-description',
    },
    {
      name: 'onChange',
      type: "(params: { date: CalendarDate }) => void | (params: { dates: CalendarDates; datePressed: Date; change: 'added' | 'removed' }) => void | (params: { startDate: CalendarDate; endDate: CalendarDate }) => void",
      description: 'datePickerModalDocumentation:property-onChange-description',
      optional: true,
    },
    {
      name: 'dateMode',
      optional: true,
      type: "'start' | 'end'",
      description: 'datePickerModalDocumentation:property-dateMode-description',
    },
    {
      name: 'inputFormat',
      optional: true,
      type: 'string',
      description: 'datePickerModalDocumentation:property-inputFormat-description',
    },
    {
      name: 'allowEditing',
      optional: true,
      type: 'boolean',
      description: 'datePickerModalDocumentation:property-allowEditing-description',
    },
    {
      name: 'collapsed',
      optional: true,
      type: 'boolean',
      description: 'datePickerModalDocumentation:property-allowEditing-description',
    },
    {
      name: 'onToggle',
      type: '() => void',
      description: 'datePickerModalDocumentation:property-onToggle-description',
    },

    {
      name: 'locale',
      description: 'datePickerModalDocumentation:property-locale-description',
      type: 'string',
      optional: true,
      defaultValue: "'en'",
    },
    {
      name: 'validRange',
      description: 'datePickerModalDocumentation:property-validRange-description',
      type: '{ startDate?: Date; endDate?: Date; disabledDates?: Date[] }',
      optional: true,
    },
    {
      name: 'withDateFormatInLabel',
      description: 'datePickerModalDocumentation:property-withDateFormatInLabel-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'animationType',
      optional: true,
      type: "'slide' | 'fade' | 'none'",
      description: 'datePickerModalDocumentation:property-animationType-description',
      defaultValue: "'slide' (native), 'fade'(web)",
    },
    {
      name: 'calendarIcon',
      description: 'datePickerModalDocumentation:property-calendarIcon-description',
      optional: true,
      type: 'string',
      defaultValue: "'calendar-today'",
    },
    {
      name: 'closeIcon',
      description: 'datePickerModalDocumentation:property-closeIcon-description',
      optional: true,
      type: 'string',
      defaultValue: "'close'",
    },
    {
      name: 'editIcon',
      description: 'datePickerModalDocumentation:property-closeIcon-description',
      optional: true,
      type: 'string',
      defaultValue: "'edit'",
    },
    {
      name: 'headerSeparator',
      description: 'datePickerModalDocumentation:property-headerSeparator-description',
      optional: true,
      type: 'string',
      defaultValue: "'-'",
    },
    {
      name: 'label',
      description: 'datePickerModalDocumentation:property-label-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'saveLabel',
      description: 'datePickerModalDocumentation:property-saveLabel-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'startLabel',
      description: 'datePickerModalDocumentation:property-startLabel-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'endLabel',
      description: 'datePickerModalDocumentation:property-endLabel-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'moreLabel',
      description: 'datePickerModalDocumentation:property-moreLabel-description',
      type: 'string',
      optional: true,
    },

    {
      name: 'emptyLabel',
      description: 'datePickerModalDocumentation:property-emptyLabel-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'okLabel',
      description: 'datePickerModalDocumentation:property-okLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Ok',
    },
    {
      name: 'cancelLabel',
      description: 'datePickerModalDocumentation:property-cancelLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Cancel',
    },
    {
      name: 'okLabelDisabled',
      description: 'datePickerModalDocumentation:property-okLabelDisabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'saveLabelDisabled',
      description: 'datePickerModalDocumentation:property-saveLabelDisabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },

    {
      name: 'cancelLabelDisabled',
      description: 'datePickerModalDocumentation:property-cancelLabelDisabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'startYear',
      description: 'datePickerModalDocumentation:property-startYear-description',
      type: 'number',
      optional: true,
      defaultValue: '1900',
    },
    {
      name: 'endYear',
      description: 'datePickerModalDocumentation:property-endYear-description',
      type: 'number',
      optional: true,
      defaultValue: '2200',
    },
    {
      name: 'inputEnabled',
      description: 'datePickerModalDocumentation:property-inputEnabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'disableStatusBar',
      description: 'datePickerModalDocumentation:property-disableStatusBar-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'disableStatusBarPadding',
      description: 'datePickerModalDocumentation:property-disableStatusBarPadding-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'disableSafeTop',
      optional: true,
      type: 'boolean',
      description: 'datePickerModalDocumentation:property-disableSafeTop-description',
    },
    {
      name: 'mask',
      description: 'datePickerModalDocumentation:property-mask-description',
      type: 'string',
      optional: true,
    },
  ],
};

export const datePickerModalIndex: HeadingProps = {
  heading: 'datePickerModalDocumentation:mainHeading',
  links: [
    {
      title: 'datePickerModalDocumentation:example1-name',
      link: '#single',
    },
    {
      title: 'datePickerModalDocumentation:example2-name',
      link: '#multiple',
    },
    {
      title: 'datePickerModalDocumentation:example3-name',
      link: '#range',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
