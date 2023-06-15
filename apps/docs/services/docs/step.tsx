/* eslint-disable react-native/no-inline-styles */
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
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  flex: 1,
  height:1400,
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

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false, false, false, false]);

  return (
    <Container disableGutters sx={flexStyle as never}>
      <StepIndicator vertical style={style} labelPlacement='below'>
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[0]} editable>
          <Typography.Title> Step 1</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[1]} name='Custom name'>
          <Typography.Title> Step 2</Typography.Title>
          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[2]} error={completed[2]}>
          <Typography.Title> Step 3</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[3]} optional>
          <Typography.Title> Step 4</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[4]} notApplicable={completed[1]}>
          <Typography.Title> Step 5</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[5]} optional optionalLabel={'Not Mandatory'}>
          <Typography.Title> Step 6</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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
        <Step icon={<Icon name='person' />} style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[6]}>
          <Typography.Title> Step 7</Typography.Title>

          <Typography.Body style={{ paddingVertical: 10, width: '100%', flex:1 }} >
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

export const stepDocumentation: ContentValues = {
  mainHeading: 'stepDocumentation:mainHeading',
  examples: [
    {
      name: 'stepDocumentation:example1-name',
      id: 'default',
      component: (
        <StepIndicatorProvider totalSteps={7}>
          <Example1 />
        </StepIndicatorProvider>
      ),
      code: `<StepIndicatorProvider totalSteps={4}>
  <Example />
</StepIndicatorProvider>


const Example = () => {
  const { next, previous } = useStepIndicatorContext();

  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false, false, false, false]);

  return (
    <StepIndicator style={style} labelPlacement='below'>
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[0]} editable>
        <Typography.Title> Step 1</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[1]} name='Custom name'>
        <Typography.Title> Step 2</Typography.Title>
        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[2]} error={completed[2]}>
        <Typography.Title> Step 3</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[3]} optional>
        <Typography.Title> Step 4</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[4]} notApplicable={completed[1]}>
        <Typography.Title> Step 5</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[5]} optional optionalLabel={'Not Mandatory'}>
        <Typography.Title> Step 6</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
      <Step icon={<Icon name='person' />} style={{ padding: 10, width: '100%', height:'100%'  }} completed={completed[6]}>
        <Typography.Title> Step 7</Typography.Title>

        <Typography.Body style={{ paddingVertical: 10, width: '100%' , flex:1}} >
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
  );
};`,
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'stepDocumentation:external-properties-title',
  },
  properties: [
    {
      name: 'name',
      description: 'stepDocumentation:property-name-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'icon',
      description: 'stepDocumentation:property-icon-description',
      type: 'ReactElement',
      optional: true,
    },
    {
      name: 'error',
      description: 'stepDocumentation:property-error-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'optional',
      description: 'stepDocumentation:property-optional-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'completed',
      description: 'stepDocumentation:property-completed-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'editable',
      description: 'stepDocumentation:property-editable-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'notApplicable',
      description: 'stepDocumentation:property-notApplicable-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'optionalLabel',
      description: 'stepDocumentation:property-optionalLabel-description',
      type: 'ReactChildren',
      optional: true,
      defaultValue: "'Optional'",
    },
    {
      name: 'nameStyle',
      description: 'stepDocumentation:property-nameStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
  ],
};

export const stepIndex: HeadingProps = {
  heading: 'stepDocumentation:mainHeading',
  links: [
    {
      title: 'stepDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
