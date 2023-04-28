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
      id: 'default',
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
      id: 'default',
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
      id: 'default',
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
      name: 'flexDirection',
      optional: true,
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      description: 'datePickerModalDocumentation:property-flexDirection-description',
      defaultValue: "'column'",
    },
    {
      name: 'align',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'datePickerModalDocumentation:property-align-description',
      defaultValue: "'flex-start'",
    },
    {
      name: 'justify',
      description: 'datePickerModalDocumentation:property-justify-description',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      defaultValue: "'flex-start'",
    },
    {
      name: 'style',
      description: 'datePickerModalDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'disableGutters',
      description: 'datePickerModalDocumentation:property-disableGutters-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'fixed',
      description: 'datePickerModalDocumentation:property-fixed-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'width',
      description: 'datePickerModalDocumentation:property-width-description',
      type: 'number | string',
      optional: true,
    },
    {
      name: 'maxWidth',
      description: 'datePickerModalDocumentation:property-maxWidth-description',
      optional: true,
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string",
    },
    {
      name: 'sx',
      description: 'datePickerModalDocumentation:property-sx-description',
      type: 'Sx',
      optional: true,
    },
  ],
};

export const datePickerModalIndex: HeadingProps = {
  heading: 'datePickerModalDocumentation:mainHeading',
  links: [
    {
      title: 'datePickerModalDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
