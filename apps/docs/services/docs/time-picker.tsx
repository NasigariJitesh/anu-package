/* eslint-disable react-native/no-inline-styles */
import { Button, Container, TimePickerModal, useSnackbar } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useState } from 'react';

const style = {
  margin: 15,
};
const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const Example1 = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      <TimePickerModal
        visible={visible}
        hours={hours}
        minutes={minutes}
        onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
          setHours(hoursAndMinutes.hours);
          setMinutes(hoursAndMinutes.minutes);
          setVisible(false);
        }}
        onDismiss={() => {
          setVisible(false);
        }}
      />
    </Container>
  );
};

const Example2 = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Select time (24hr Format)' />
      <TimePickerModal
        visible={visible}
        hours={hours}
        minutes={minutes}
        onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
          setHours(hoursAndMinutes.hours);
          setMinutes(hoursAndMinutes.minutes);
          setVisible(false);
        }}
        onDismiss={() => {
          setVisible(false);
        }}
        use24HourClock
      />
    </Container>
  );
};

const Example3 = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      <TimePickerModal
        visible={visible}
        hours={hours}
        minutes={minutes}
        onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
          setHours(hoursAndMinutes.hours);
          setMinutes(hoursAndMinutes.minutes);
          setVisible(false);
        }}
        onDismiss={() => {
          setVisible(false);
        }}
        horizontal={false}
      />
    </Container>
  );
};

const Example4 = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();
  const { width } = useWindowDimensions();
  const { add } = useSnackbar();

  return (
    <Container disableGutters style={style}>
      <Button.Outlined
        onPress={() =>
          width >= 576
            ? setVisible(true)
            : add({
                content: 'Horizontal time picker is not compatible with small screens',
                numberOfLines: 2,
              })
        }
        title='Select time'
      />
      {width >= 576 ? (
        <TimePickerModal
          visible={visible}
          hours={hours}
          minutes={minutes}
          onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
            setHours(hoursAndMinutes.hours);
            setMinutes(hoursAndMinutes.minutes);
            setVisible(false);
          }}
          onDismiss={() => {
            setVisible(false);
          }}
          horizontal={true}
        />
      ) : null}
    </Container>
  );
};
export const timePickerDocumentation: ContentValues = {
  mainHeading: 'timePickerDocumentation:mainHeading',
  mainDescription: 'timePickerDocumentation:mainDescription',
  properties: [
    {
      name: 'visible',
      description: 'timePickerDocumentation:property-visible-description',
      type: 'boolean',
    },
    {
      name: 'onConfirm',
      description: 'timePickerDocumentation:property-onConfirm-description',
      type: '(hoursAndMinutes: { hours: number; minutes: number }) => void',
    },
    {
      name: 'onDismiss',
      description: 'timePickerDocumentation:property-onDismiss-description',
      type: '() => void',
    },
    {
      name: 'hours',
      description: 'timePickerDocumentation:property-hours-description',
      type: 'number',
      optional: true,
    },
    {
      name: 'minutes',
      description: 'timePickerDocumentation:property-minutes-description',
      type: 'number',
      optional: true,
    },
    {
      name: 'use24HourClock',
      description: 'timePickerDocumentation:property-use24HourClock-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'defaultInputType',
      description: 'timePickerDocumentation:property-defaultInputType-description',
      type: "'keyboard' | 'picker'",
      optional: true,
      defaultValue: "'picker'",
    },
    {
      name: 'horizontal',
      description: 'timePickerDocumentation:property-horizontal-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'label',
      description: 'timePickerDocumentation:property-label-description',
      type: 'string',
      optional: true,
      defaultValue: 'Select time',
    },
    {
      name: 'cancelLabel',
      description: 'timePickerDocumentation:property-cancelLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Cancel',
    },
    {
      name: 'confirmLabel',
      description: 'timePickerDocumentation:property-confirmLabel-description',
      type: 'string',
      optional: true,
      defaultValue: 'Ok',
    },
    {
      name: 'keyboardIcon',
      description: 'timePickerDocumentation:property-keyboardIcon-description',
      type: 'string',
      optional: true,
      defaultValue: 'keyboard',
    },
    {
      name: 'clockIcon',
      description: 'timePickerDocumentation:property-clockIcon-description',
      type: 'string',
      optional: true,
      defaultValue: 'access-time',
    },
    {
      name: 'animationType',
      description: 'timePickerDocumentation:property-animationType-description',
      type: "'slide' | 'fade' | 'none'",
      optional: true,
      defaultValue: "'fade'",
    },
    {
      name: 'clockSize',
      description: 'timePickerDocumentation:property-clockSize-description',
      type: 'number',
      optional: true,
      defaultValue: '256',
    },
    {
      name: 'modalStyle',
      description: 'timePickerDocumentation:property-modalStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'inputStyle',
      description: 'timePickerDocumentation:property-inputStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'timePickerDocumentation:example1-name',
      description: 'timePickerDocumentation:example1-description',
      id: 'default',
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      
<TimePickerModal
  visible={visible}
  hours={hours}
  minutes={minutes}
  onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
    setHours(hoursAndMinutes.hours);
    setMinutes(hoursAndMinutes.minutes);
    setVisible(false);
  }}
  onDismiss={() => {
    setVisible(false);
  }}
/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
    },
    {
      name: 'timePickerDocumentation:example2-name',
      id: 'format',
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Select time (24hr Format)' />

<TimePickerModal
  visible={visible}
  hours={hours}
  minutes={minutes}
  onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
    setHours(hoursAndMinutes.hours);
    setMinutes(hoursAndMinutes.minutes);
    setVisible(false);
  }}
  onDismiss={() => {
    setVisible(false);
  }}
  use24HourClock
/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
    },
    {
      name: 'timePickerDocumentation:example3-name',
      description: 'timePickerDocumentation:example3-description',
      id: 'vertical',
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      
<TimePickerModal
  visible={visible}
  hours={hours}
  minutes={minutes}
  onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
    setHours(hoursAndMinutes.hours);
    setMinutes(hoursAndMinutes.minutes);
    setVisible(false);
  }}
  onDismiss={() => {
    setVisible(false);
  }}
  horizontal={false}
/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
    },
    {
      name: 'timePickerDocumentation:example4-name',
      description: 'timePickerDocumentation:example4-description',
      id: 'horizontal',
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      
<TimePickerModal
  visible={visible}
  hours={hours}
  minutes={minutes}
  onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
    setHours(hoursAndMinutes.hours);
    setMinutes(hoursAndMinutes.minutes);
    setVisible(false);
  }}
  onDismiss={() => {
    setVisible(false);
  }}
  horizontal={true}
/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Example4 />
        </Container>
      ),
    },
  ],
};

export const timePickerIndex: HeadingProps = {
  heading: 'timePickerDocumentation:mainHeading',
  links: [
    {
      title: 'timePickerDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'timePickerDocumentation:example2-name',
      link: '#format',
    },
    {
      title: 'timePickerDocumentation:example3-name',
      link: '#vertical',
    },
    {
      title: 'timePickerDocumentation:example4-name',
      link: '#horizontal',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
