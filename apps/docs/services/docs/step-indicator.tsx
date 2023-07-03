/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Container,
  Step,
  StepIndicator,
  StepIndicatorProvider,
  Typography,
  useStepIndicatorContext,
} from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  flex: 1,
  minWidth: 600,
} as const;

const flexStyle = {
  flexWrap: 'wrap',
  overflow: 'scroll',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: 15,
} as const;

const Example1 = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);

  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator style={style}>
        <Step style={{ padding: 10, width: '100%', flex: 1 }} completed={completed[0]}>
          <Typography.Title> Step 1</Typography.Title>

          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
        <Step style={{ padding: 10, width: '100%', flex: 1 }} completed={completed[1]}>
          <Typography.Title> Step 2</Typography.Title>
          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
        <Step style={{ padding: 10, width: '100%', flex: 1 }} completed={completed[2]}>
          <Typography.Title> Step 3</Typography.Title>

          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
        <Step style={{ padding: 10, width: '100%', flex: 1 }} completed={completed[3]}>
          <Typography.Title> Step 4</Typography.Title>

          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
    </Container>
  );
};

const Example2 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator width={500}>
        <Step completed={true} editable={true} />
        <Step />
        <Step />
      </StepIndicator>
    </Container>
  );
};

const Example3 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator width={500}>
        <Step completed={true} />
        <Step />
        <Step />
      </StepIndicator>
    </Container>
  );
};

const Example4 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator nonLinear width={500}>
        <Step completed={true} />
        <Step />
        <Step />
      </StepIndicator>
    </Container>
  );
};
const Example5 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator width={500}>
        <Step completed={true} />
        <Step notApplicable={true} />
        <Step completed={true} />
      </StepIndicator>
    </Container>
  );
};
const Example6 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator labelPlacement='below' width={500}>
        <Step completed={true} />
        <Step notApplicable={true} />
        <Step completed={true} />
      </StepIndicator>
    </Container>
  );
};

const Example7 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
    </Container>
  );
};

const Example9 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator width={500} style={{ margin: 15 }}>
        <Step error={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step error={true} />
        <Step />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step error={true} optional={true} />
        <Step />
      </StepIndicator>
    </Container>
  );
};

const Example8 = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);

  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator vertical style={{ height: 600, flex: 1 }}>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[0]}>
          <Typography.Title> Step 1</Typography.Title>

          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[1]}>
          <Typography.Title> Step 2</Typography.Title>
          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[2]}>
          <Typography.Title> Step 3</Typography.Title>
          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
                next();
                setCompleted((previousState) => {
                  previousState[2] = true;
                  return previousState;
                });
              }}
            />
          </Container>
        </Step>
        <Step style={{ padding: 10, flex: 1, height: '100%' }} completed={completed[3]}>
          <Typography.Title> Step 4</Typography.Title>

          <Typography.Body style={{ flex: 1, paddingVertical: 10 }}>
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
    </Container>
  );
};

export const stepIndicatorDocumentation: ContentValues = {
  mainHeading: 'stepIndicatorDocumentation:mainHeading',
  mainDescription: 'stepIndicatorDocumentation:mainDescription',
  examples: [
    {
      name: 'stepIndicatorDocumentation:example1-name',
      description: 'stepIndicatorDocumentation:example1-description',
      id: 'default',
      component: (
        <StepIndicatorProvider totalSteps={4}>
          <Example1 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={4}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);

  return (
    <StepIndicator>
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
          <Button.Outlined title='Previous' onPress={() => {
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
          <Button.Outlined title='Previous' onPress={() => {
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
          <Button.Outlined title='Previous' onPress={() => {
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
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example2-name',
      description: 'stepIndicatorDocumentation:example2-description',
      id: 'editable',
      component: (
        <StepIndicatorProvider initialActiveStep={2} totalSteps={3}>
          <Example2 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider initialActiveStep={2} totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <StepIndicator width={500}>
      <Step completed={true} editable={true} />
      <Step />
      <Step />
    </StepIndicator>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example3-name',
      description: 'stepIndicatorDocumentation:example1-description',
      id: 'completed',
      component: (
        <StepIndicatorProvider initialActiveStep={2} totalSteps={3}>
          <Example3 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider initialActiveStep={2} totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <StepIndicator width={500}>
      <Step completed={true} />
      <Step />
      <Step />
    </StepIndicator>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example4-name',
      description: 'stepIndicatorDocumentation:example4-description',
      id: 'non-linear',
      component: (
        <StepIndicatorProvider totalSteps={3}>
          <Example4 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <StepIndicator width={500}>
      <Step completed={true} />
      <Step notApplicable={true} />
      <Step completed={true} />
    </StepIndicator>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example5-name',
      description: 'stepIndicatorDocumentation:example5-description',
      id: 'not-applicable',
      component: (
        <StepIndicatorProvider totalSteps={3}>
          <Example5 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <StepIndicator width={500}>
      <Step completed={true} />
      <Step notApplicable={true} />
      <Step completed={true} />
    </StepIndicator>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example6-name',
      description: 'stepIndicatorDocumentation:example6-description',
      id: 'label-placement',
      component: (
        <StepIndicatorProvider totalSteps={3}>
          <Example6 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <StepIndicator labelPlacement='below' width={500}>
      <Step completed={true} />
      <Step notApplicable={true} />
      <Step completed={true} />
    </StepIndicator>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example7-name',
      id: 'label-placement-optional',
      description: 'stepIndicatorDocumentation:example7-description',
      component: (
        <StepIndicatorProvider totalSteps={3}>
          <Example7 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <Container disableGutters>
      <StepIndicator width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
    </Container>
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example8-name',
      description: 'stepIndicatorDocumentation:example8-description',
      id: 'vertical',
      component: (
        <StepIndicatorProvider totalSteps={4}>
          <Example8 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={4}>
  <Example />
</StepIndicatorProvider>


const Example= () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);

  return (
    <StepIndicator vertical style={{ height: 600, flex: 1 }}>
      <Step style={{ padding: 10, flex: 1 }} completed={completed[0]}>
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
      <Step style={{ padding: 10, flex: 1 }} completed={completed[1]}>
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
          <Button.Outlined title='Previous' onPress={() => {
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
      <Step style={{ padding: 10, flex: 1 }} completed={completed[2]}>
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
          <Button.Outlined title='Previous' onPress={() => {
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
              next();
              setCompleted((previousState) => {
                previousState[2] = true;
                return previousState;
              });
            }}
          />
        </Container>
      </Step>
      <Step style={{ padding: 10, flex: 1 }} completed={completed[3]}>
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
          <Button.Outlined title='Previous' onPress={() => {
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
  );
};`,
    },
    {
      name: 'stepIndicatorDocumentation:example9-name',
      description: 'stepIndicatorDocumentation:9-description',
      id: 'error',
      component: (
        <StepIndicatorProvider totalSteps={3}>
          <Example9 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={3}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  return (
    <Container disableGutters>
      <StepIndicator width={500} style={{ margin: 15 }}>
        <Step error={true} />
        <Step optional={true} />
        <Step completed={true} />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step error={true} />
        <Step />
      </StepIndicator>
      <StepIndicator labelPlacement='below' width={500} style={{ margin: 15 }}>
        <Step completed={true} />
        <Step error={true} optional={true} />
        <Step />
      </StepIndicator>
    </Container>
  );
};`,
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'stepIndicatorDocumentation:external-properties-title',
  },
  properties: [
    {
      name: 'children',
      description: 'stepIndicatorDocumentation:property-children-description',
      type: 'ReactElement<StepProps>[]',
    },
    {
      name: 'vertical',
      description: 'stepIndicatorDocumentation:property-vertical-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'navigateOnPress',
      description: 'stepIndicatorDocumentation:property-navigateOnPress-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'nonLinear',
      description: 'stepIndicatorDocumentation:property-nonLinear-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'OnPress',
      description: 'stepIndicatorDocumentation:property-OnPress-description',
      type: '(event: GestureResponderEvent, currentStep?: number, TargetStep?: number) => void',
      optional: true,
    },
    {
      name: 'labelPlacement',
      description: 'stepIndicatorDocumentation:property-labelPlacement-description',
      type: "'in-line' | 'below'",
      optional: true,
      defaultValue: "'in-line'",
    },
    {
      name: 'divider',
      description: 'stepIndicatorDocumentation:property-divider-description',
      type: 'ReactChildren',
      optional: true,
    },
  ],
  additionalInformation: {
    title: 'stepIndicatorDocumentation:additionalInformation-title',
    isLocaleSpecific: true,
    items: [{ info: 'stepIndicatorDocumentation:additionalInformation-info1', isLocaleSpecific: true }],
    id: 'see-also',
  },
};

export const stepIndicatorIndex: HeadingProps = {
  heading: 'stepIndicatorDocumentation:mainHeading',
  links: [
    {
      title: 'stepIndicatorDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'stepIndicatorDocumentation:example2-name',
      link: '#editable',
    },
    {
      title: 'stepIndicatorDocumentation:example3-name',
      link: '#completed',
    },
    {
      title: 'stepIndicatorDocumentation:example4-name',
      link: '#non-linear',
    },
    {
      title: 'stepIndicatorDocumentation:example5-name',
      link: '#not-applicable',
    },
    {
      title: 'stepIndicatorDocumentation:example6-name',
      link: '#label-placement',
    },
    {
      title: 'stepIndicatorDocumentation:example7-name',
      link: '#label-placement-optional',
    },
    {
      title: 'stepIndicatorDocumentation:example8-name',
      link: '#vertical',
    },
    {
      title: 'stepIndicatorDocumentation:example9-name',
      link: '#error',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
    {
      link: '#see-also',
      title: 'stepIndicatorDocumentation:additionalInformation-title',
    },
  ],
};
