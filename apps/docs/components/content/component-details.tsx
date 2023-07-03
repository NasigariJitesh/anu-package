import { AnuFinalTheme, useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import LocalizedTypography from 'anu/lib/advanced/smart-localization';
import { Lato, Source_Sans_Pro } from 'next/font/google';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
});

interface ComponentDetailsProps {
  mainHeading: string;
  mainDescription?: string;
  heading?: string;
  subTitle?: string;
  isExperimental?: boolean;
}

const ComponentDetails = ({
  mainHeading,
  heading,
  subTitle,
  mainDescription,
  isExperimental,
}: ComponentDetailsProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Container disableGutters sx={styles.container as never}>
      {mainHeading ? (
        <Container disableGutters style={styles.headingContainer}>
          <LocalizedTypography.Headline style={styles.mainHeading} localeKey={mainHeading} />
          {isExperimental ? (
            <Container style={styles.badge}>
              <LocalizedTypography.Body style={styles.badgeText} localeKey='leftSideBar:experimental' />{' '}
            </Container>
          ) : null}
        </Container>
      ) : null}
      {mainDescription ? (
        <LocalizedTypography.Headline style={styles.mainDescription} localeKey={mainDescription} />
      ) : null}
      {heading ? <LocalizedTypography.Headline style={styles.heading} localeKey={heading} /> : null}
      {subTitle ? <LocalizedTypography.Body style={styles.subTitle} localeKey={subTitle} /> : null}
    </Container>
  );
};

const getStyles = (theme: AnuFinalTheme) => {
  const styles = {
    container: { width: ['90vw', '90vw', '550px', '600px', '750px'] },
    headingContainer: {
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      fontFamily: source.style.fontFamily,
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 10,
    },
    mainHeading: {
      fontFamily: source.style.fontFamily,
      fontSize: 32,
      fontWeight: '600',
      lineHeight: 38,
    },
    badge: {
      borderRadius: 10,
      backgroundColor: theme.colors.$error,
      marginLeft: 20,
      height: 20,
    },
    mainDescription: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 20,
      fontWeight: '400',
    },
    subTitle: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 30,
    },
    badgeText: {
      fontFamily: lato.style.fontFamily,
      fontSize: 11,
      color: theme.colors.$onError,
    },
  } as const;
  return styles;
};

export default ComponentDetails;
