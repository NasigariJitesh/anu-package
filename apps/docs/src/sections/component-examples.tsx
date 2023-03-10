import { ReactChildren } from 'anu/common/types';
import { getTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import { ScrollView } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

export interface Example {
  code: string;
  component: ReactChildren;
  name: string;
  description?: string;
  id?: string;
}

interface ComponentExampleProps {
  examples: Example[];
}
const ComponentExamples = ({ examples }: ComponentExampleProps) => {
  const styles = getStyles();

  const renderExample = (example: Example, index: number) => {
    return (
      <Container nativeID={example.id} key={index} disableGutters style={styles.examplesContainer as never}>
        <Typography.Headline style={styles.name}>{example.name}</Typography.Headline>
        {example.description ? (
          <Typography.Body style={styles.description}>{example.description}</Typography.Body>
        ) : null}

        <Container disableGutters style={styles.examplesComponentContainer}>
          {example.component}
        </Container>
        <ScrollView
          horizontal
          sx={styles.codeArea as never}
          id={undefined}
          aria-label={undefined}
          aria-busy={undefined}
          aria-checked={undefined}
          aria-disabled={undefined}
          aria-expanded={undefined}
          aria-selected={undefined}
          aria-labelledby={undefined}
          aria-valuemax={undefined}
          aria-valuemin={undefined}
          aria-valuenow={undefined}
          aria-valuetext={undefined}
          aria-hidden={undefined}
          aria-live={undefined}
          aria-modal={undefined}
          role={undefined}
          stickyHeaderHiddenOnScroll={undefined}
          StickyHeaderComponent={undefined}
          onPointerEnter={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeave={undefined}
          onPointerLeaveCapture={undefined}
          onPointerMove={undefined}
          onPointerMoveCapture={undefined}
          onPointerCancel={undefined}
          onPointerCancelCapture={undefined}
          onPointerDown={undefined}
          onPointerDownCapture={undefined}
          onPointerUp={undefined}
          onPointerUpCapture={undefined}
          automaticallyAdjustKeyboardInsets={undefined}
          automaticallyAdjustsScrollIndicatorInsets={undefined}
        >
          <SyntaxHighlighter style={arduinoLight} customStyle={styles.code}>
            {example.code}
          </SyntaxHighlighter>
        </ScrollView>
        {/* <Divider variant='full-width' light style={styles.divider} /> */}
      </Container>
    );
  };

  return (
    <Container disableGutters sx={styles.container as never}>
      {/* <Typography.Headline style={styles.heading}>{translations('en', 'examples')}</Typography.Headline> */}
      {examples.map((example, index) => renderExample(example, index))}
    </Container>
  );
};

const getStyles = () => {
  const { colors } = getTheme();

  const styles = {
    container: {
      marginBottom: 30,
      width: ['90vw', undefined, undefined, '600px', '750px'],
    },
    examplesContainer: {
      marginBottom: 20,
      width: '100%',
    },
    examplesComponentContainer: {
      marginVertical: 20,
    },
    heading: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 15,
    },
    name: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
    },
    description: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 8,
    },
    code: {
      fontFamily: firaCode.style.fontFamily,
      backgroundColor: 'transparent',
      fontSize: 14,
      fontWeight: '400',
    },
    divider: {
      color: colors.$onSurface,
    },
    codeArea: {
      backgroundColor: colors.$primaryContainer,
      width: ['90vw', '90vw', '90vw', '600px', '750px'],
      padding: '5px',
      borderRadius: 10,
    },
  } as const;
  return styles;
};

export default ComponentExamples;
