/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Container, Icon, Switch, SwitchProps } from 'anu/lib';
import React, { useState } from 'react';

const StateSwitch = (props: Partial<SwitchProps>) => {
  const [state, setState] = useState(props.value);

  const onChange = () => {
    setState((previous) => !previous);
  };

  return <Switch {...props} value={state} onValueChange={onChange} />;
};

const SwitchScreen = () => {
  return (
    <Container style={{ padding: 10 }}>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={true} />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={false} size={18} />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={true} disabled />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={false} disabled />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch
          value={true}
          iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />}
          iconOff={<Icon name='check' size={12} style={{ color: '#fff' }} />}
        />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch
          value={false}
          iconOn={<Icon name='check' style={{ color: '#4D53B7' }} />}
          iconOff={<Icon name='check' size={12} style={{ color: '#fff' }} />}
        />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={true} disabled iconOn={<Icon name='check' style={{ color: '#4D53B73E' }} />} />
      </Container>
      <Container disableGutters style={{ margin: 10 }}>
        <StateSwitch value={false} disabled iconOff={<Icon name='check' size={12} style={{ color: '#E4E1EC' }} />} />
      </Container>
    </Container>
  );
};

export default SwitchScreen;
