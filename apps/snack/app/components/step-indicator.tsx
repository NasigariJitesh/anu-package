/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import {
  Button,
  Container,
  Icon,
  Step,
  StepIndicator,
  StepIndicatorProvider,
  Typography,
  useStepIndicatorContext,
} from 'anu/lib';
import React, { useState } from 'react';

const StepIndicatorExample = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false, false, false, false]);

  return (
    <Container disableGutters style={{ flex: 1, width: '100%', height: 1000 }}>
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Step Indicator</Typography.Title>
      <StepIndicator vertical style={{ height: 700 }}>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[0]} editable>
          <Typography.Title> Step 1</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container disableGutters flexDirection='row' justify='flex-end' style={{ width: '100%', marginTop: 10 }}>
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[0] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[1]} name='Custom name'>
          <Typography.Title> Step 2</Typography.Title>
          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[1] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[1] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[2]} error={completed[2]}>
          <Typography.Title> Step 3</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[2] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[2] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[3]} optional>
          <Typography.Title> Step 4</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[3] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[3] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[4]} notApplicable={completed[1]}>
          <Typography.Title> Step 5</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[4] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[4] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step
          style={{ padding: 10, flex: 1, height: '100%' }}
          completed={completed[5]}
          optional
          optionalLabel={'Not Mandatory'}
        >
          <Typography.Title> Step 6</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[5] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Next'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[5] = true;
                  return previousState;
                });
                next();
              }}
            />
          </Container>
        </Step>
        <Step icon={<Icon name='person' />} style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[6]}>
          <Typography.Title> Step 7</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
          <Container
            disableGutters
            flexDirection='row'
            justify='space-between'
            style={{ width: '100%', marginTop: 10 }}
          >
            <Button.Outlined
              title='Previous'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[6] = false;
                  return previousState;
                });
                previous();
              }}
            />
            <Button.Filled
              title='Finish'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[6] = true;
                  return previousState;
                });
              }}
            />
          </Container>
        </Step>
      </StepIndicator>
    </Container>
  );
};

const StepIndicatorScreen = () => {
  return (
    <StepIndicatorProvider totalSteps={7}>
      <StepIndicatorExample />
    </StepIndicatorProvider>
  );
};

export default StepIndicatorScreen;
