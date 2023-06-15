/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import {
  Button,
  Container,
  Step,
  StepIndicator,
  StepIndicatorProvider,
  Typography,
  useStepIndicatorContext,
} from 'anu/lib';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const StepIndicatorExample = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);
  return (
    <ScrollView horizontal style={{ flex: 1, width: '100%' }}>
      <StepIndicator width={580}>
        <Step style={{ padding: 10, width: '100%' }} completed={completed[0]}>
          <Typography.Title> Step 1</Typography.Title>

          <Typography.Body>
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
        <Step style={{ padding: 10, width: '100%' }} completed={completed[1]}>
          <Typography.Title> Step 2</Typography.Title>
          <Typography.Body>
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
        <Step style={{ padding: 10, width: '100%' }} completed={completed[2]}>
          <Typography.Title> Step 3</Typography.Title>

          <Typography.Body>
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
        <Step style={{ padding: 10, width: '100%' }} completed={completed[3]}>
          <Typography.Title> Step 4</Typography.Title>

          <Typography.Body>
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
              title='Finish'
              onPress={() => {
                setCompleted((previousState) => {
                  previousState[3] = true;
                  return previousState;
                });
              }}
            />
          </Container>
        </Step>
      </StepIndicator>
    </ScrollView>
  );
};

const StepIndicatorScreen = () => {
  return (
    <StepIndicatorProvider totalSteps={4}>
      <StepIndicatorExample />
    </StepIndicatorProvider>
  );
};

export default StepIndicatorScreen;
