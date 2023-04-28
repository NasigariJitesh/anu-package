import { Container } from 'anu/lib';
import { Step } from 'pages/getting-started';
import React from 'react';

export interface ConfigurationStepProps {
  title: string;
  description?: string;
  code?: string;
  id: string;
}
interface ComponentConfigurationStepProps {
  steps: ConfigurationStepProps[];
}

const ComponentConfiguration = (props: ComponentConfigurationStepProps) => {
  return (
    <Container disableGutters sx={styles.container as never}>
      {props.steps.map((step, index) => (
        <Step key={index} id={step.id} code={step.code} title={step.title} description={step.description} />
      ))}
    </Container>
  );
};

const styles = {
  container: {
    marginVertical: 20,
    zIndex: 1000,
    width: ['90vw', '90vw', '550px', '600px', '750px'],
  },
};

export default ComponentConfiguration;
