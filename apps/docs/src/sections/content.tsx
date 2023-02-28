import { Container } from 'anu/lib';

import ComponentDetails from './component-details';
import ComponentExamples, { Example } from './component-examples';
import ComponentProperties, { Property } from './components-properties';

interface ContentValues {
  mainHeading?: string;
  heading: string;
  subTitle?: string;
  properties: Property[];
  examples: Example[];
}

interface ContentProps {
  values: ContentValues;
}

const Content = ({ values }: ContentProps) => {
  const { mainHeading, heading, subTitle, properties, examples } = values;
  const styles = getStyles();

  return (
    <Container disableGutters style={styles.container}>
      <ComponentDetails mainHeading={mainHeading} heading={heading} subTitle={subTitle} />
      <ComponentExamples examples={examples} />
      <ComponentProperties properties={properties} />
    </Container>
  );
};

const getStyles = () => {
  const styles = {
    container: {
      marginVertical: 20,
      width: '100%',
    },
  } as const;
  return styles;
};

export default Content;
