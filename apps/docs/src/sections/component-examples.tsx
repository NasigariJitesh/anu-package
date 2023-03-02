import { ReactChildren } from 'anu/common/types';
import { getTheme } from 'anu/config';
import { Container, Divider, Typography } from 'anu/lib';

import { translations } from '../../services/localization';

export interface Example {
  code: string;
  component: ReactChildren;
  name: string;
  description?: string;
}

interface ComponentExampleProps {
  examples: Example[];
}
const ComponentExamples = ({ examples }: ComponentExampleProps) => {
  const styles = getStyles();

  const renderExample = (example: Example, index: number) => {
    return (
      <Container key={index} disableGutters style={styles.examplesContainer}>
        <Typography.Headline style={styles.name}>{example.name}</Typography.Headline>
        {example.description ? (
          <Typography.Body style={styles.description}>{example.description}</Typography.Body>
        ) : null}
        <Container align='center' justify='center'>
          {example.component}
        </Container>
        <Container style={styles.codeArea}>
          <code>
            <Typography.Body style={styles.code}>{example.code}</Typography.Body>
          </code>
        </Container>
        <Divider variant='full-width' light style={styles.divider} />
      </Container>
    );
  };

  return (
    <Container style={styles.container}>
      <Typography.Headline style={styles.heading}>{translations('en', 'examples')}</Typography.Headline>
      {examples.map((example, index) => renderExample(example, index))}
    </Container>
  );
};

const getStyles = () => {
  const { colors } = getTheme();

  const styles = {
    container: {
      marginBottom: 30,
      width: '100%',
    },
    examplesContainer: {
      width: '100%',
    },
    heading: {
      color: colors.$onSurface,
      fontFamily: 'Source Sans Pro',
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 15,
    },
    name: {
      color: colors.$onSurface,
      fontFamily: 'Source Sans Pro',
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      marginBottom: 8,
    },
    description: {
      color: colors.$onSurface,
      fontFamily: 'Source Sans Pro',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 8,
    },
    code: {
      color: colors.$onSurface,
      fontFamily: 'Source Sans Pro',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 16,
      marginBottom: 8,
    },
    divider: {
      color: colors.$onSurface,
    },
    codeArea: {
      backgroundColor: colors.$primaryContainer,
      width: '100%',
      marginVertical: 15,
      padding: 5,
      borderRadius: 10,
      minHeight: 200,
    },
  } as const;
  return styles;
};

export default ComponentExamples;
