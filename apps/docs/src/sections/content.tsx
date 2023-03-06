import { Container } from 'anu/lib';

import ComponentDetails from './component-details';
import ComponentExamples, { Example } from './component-examples';
import ComponentProperties, { Property } from './components-properties';

export interface ContentValues {
  mainHeading: string;
  heading?: string;
  mainDescription?: string;
  subTitle?: string;
  properties: Property[];
  examples: Example[];
}

interface ContentProps {
  values: ContentValues;
}

const Content = ({ values }: ContentProps) => {
  const { mainHeading, heading, subTitle, properties, examples, mainDescription } = values;
  const styles = getStyles();

  return (
    <Container disableGutters style={styles.container}>
      <ComponentDetails
        mainHeading={mainHeading}
        heading={heading}
        subTitle={subTitle}
        mainDescription={mainDescription}
      />
      <ComponentExamples examples={examples} />
      <ComponentProperties properties={properties} />
    </Container>
  );
};

const getStyles = () => {
  const styles = {
    container: {
      width: '100%',
      paddingHorizontal: 20,
    },
  } as const;
  return styles;
};

export default Content;
