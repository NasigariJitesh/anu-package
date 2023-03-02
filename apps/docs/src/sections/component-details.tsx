import { getTheme } from 'config/dripsy';
import { Container, Typography } from 'lib/index';
import { Source_Sans_Pro } from 'next/font/google';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

interface ComponentDetailsProps {
  mainHeading?: string;
  heading: string;
  subTitle?: string;
}

const ComponentDetails = ({ mainHeading, heading, subTitle }: ComponentDetailsProps) => {
  const styles = getStyles();
  return (
    <Container disableGutters>
      {mainHeading ? <Typography.Headline style={styles.mainHeading}>{mainHeading}</Typography.Headline> : null}
      <Typography.Headline style={styles.heading}>{heading}</Typography.Headline>
      {subTitle ? <Typography.Body style={styles.subTitle}>{subTitle}</Typography.Body> : null}
    </Container>
  );
};

const getStyles = () => {
  const { colors } = getTheme();

  const styles = {
    heading: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 15,
    },
    mainHeading: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 28,
      fontWeight: '600',
      lineHeight: 36,
      marginBottom: 30,
    },
    subTitle: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 30,
    },
  } as const;
  return styles;
};

export default ComponentDetails;
