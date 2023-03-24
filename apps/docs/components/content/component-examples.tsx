import { ReactChildren } from 'anu/common/types';
import { useTheme } from 'anu/config';
import { Container, LocalizedTypography } from 'anu/lib';
import { DripsyFinalTheme, ScrollView } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { View } from 'react-native';
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
  const theme = useTheme();

  const styles = getStyles(theme);

  const renderExample = (example: Example, index: number) => {
    return (
      <Container key={index} disableGutters style={styles.examplesContainer as never}>
        <View nativeID={example.id} style={styles.invisible} />
        <LocalizedTypography.Headline style={styles.name} localeKey={example.name} />
        {example.description ? (
          <LocalizedTypography.Body style={styles.description} localeKey={example.description} />
        ) : null}

        <Container disableGutters sx={styles.examplesComponentContainer as never}>
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
          <SyntaxHighlighter language='text' style={arduinoLight} customStyle={styles.code}>
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

const getStyles = ({ colors }: DripsyFinalTheme) => {
  const styles = {
    container: {
      // marginBottom: 30,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
    },
    examplesContainer: {
      marginVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
    },
    examplesComponentContainer: {
      marginVertical: 20,
      width: '100%',
    },
    heading: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 15,
    },
    name: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
    },
    description: {
      color: colors?.$onSurface as never,
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
      color: colors?.$onSurface as never,
    },
    divider: {
      color: colors?.$onSurface as never,
    },
    codeArea: {
      backgroundColor: colors?.$surfaceVariant as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
      padding: '5px',
      borderRadius: 10,
    },
    invisible: {
      position: 'absolute',
      top: -80,
      height: 10,
      width: 10,
      zIndex: -10,
    },
  } as const;
  return styles;
};

export default ComponentExamples;
