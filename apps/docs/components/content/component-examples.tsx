import { ReactChildren } from 'anu/common/types';
import { useTheme } from 'anu/config';
import { Container, Icon } from 'anu/lib';
import LocalizedTypography from 'anu/lib/advanced/smart-localization/components';
import { DripsyFinalTheme, ScrollView, useSx } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useMenuContext } from 'screens/common/provider';

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

const RenderExample = (example: Example, index: number) => {
  const theme = useTheme();

  const { isDarkTheme } = useMenuContext();
  const styles = getStyles(theme, isDarkTheme);

  const sx = useSx();

  const [isCopiedToClipboard, toggleCopyToClipboard] = useState(false);
  const [timeOut, updateTimeOut] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [timeOut]);

  const onPressedHandler = () => {
    if (isCopiedToClipboard) return;

    toggleCopyToClipboard(true);

    navigator.clipboard.writeText(example.code);

    updateTimeOut(
      setTimeout(() => {
        toggleCopyToClipboard(false);
      }, 3000),
    );
  };

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
      {example.code ? (
        <Container disableGutters style={styles.codeContainer}>
          <Icon
            name={isCopiedToClipboard ? 'check' : 'content-copy'}
            size={18}
            onPress={onPressedHandler}
            style={sx({
              position: 'absolute',
              zIndex: 2,
              right: '5px',
              top: '4px',
              borderRadius: '8px',
              padding: '8px',
              color: isCopiedToClipboard ? 'green' : (theme.colors?.$onBackground as string),
              backgroundColor: theme?.colors?.$background as never,
            })}
          />
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
            accessibilityLanguage={undefined}
            accessibilityLabelledBy={undefined}
            href={undefined}
            hrefAttrs={undefined}
            onClick={undefined}
          >
            <SyntaxHighlighter language='text' style={arduinoLight} customStyle={styles.code}>
              {example.code}
            </SyntaxHighlighter>
          </ScrollView>
        </Container>
      ) : null}
      {/* <Divider variant='full-width'  style={styles.divider} /> */}
    </Container>
  );
};

const ComponentExamples = ({ examples }: ComponentExampleProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Container disableGutters sx={styles.container as never}>
      {/* <Typography.Headline style={styles.heading}>{translations('en', 'examples')}</Typography.Headline> */}
      {examples.map((example, index) => RenderExample(example, index))}
    </Container>
  );
};

const getStyles = ({ colors }: DripsyFinalTheme, isDarkTheme?: boolean) => {
  const styles = {
    container: {
      // marginBottom: 30,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
    },
    examplesContainer: {
      marginVertical: 20,
      zIndex: 100,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
    },
    codeContainer: {
      position: 'relative',
    },

    examplesComponentContainer: {
      marginVertical: 20,
      paddingVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
      borderRadius: 18,
      backgroundColor: (isDarkTheme ? '#2a2a2f' : '#f7f4f4') as string,
      borderColor: colors?.$outline as string,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
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
      zIndex: 90,
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
