import { Container, Typography } from 'lib';
import { Source_Sans_Pro } from 'next/font/google';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

interface ComponentDetailsProps {
  mainHeading: string;
  mainDescription?: string;
  heading?: string;
  subTitle?: string;
}

const ComponentDetails = ({ mainHeading, heading, subTitle, mainDescription }: ComponentDetailsProps) => {
  const styles = getStyles();

  return (
    <Container disableGutters sx={styles.container as never}>
      {mainHeading ? <Typography.Headline style={styles.mainHeading}>{mainHeading}</Typography.Headline> : null}
      {mainDescription ? (
        <Typography.Headline style={styles.mainDescription}>{mainDescription}</Typography.Headline>
      ) : null}
      <Typography.Headline style={styles.heading}>{heading}</Typography.Headline>
      {subTitle ? <Typography.Body style={styles.subTitle}>{subTitle}</Typography.Body> : null}
    </Container>
  );
};

const getStyles = () => {
  const styles = {
    container: { width: ['90vw', '90vw', '550px', '600px', '750px'] },
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
      marginBottom: 15,
      lineHeight: 38,
    },
    mainDescription: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 20,
    },
    subTitle: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 30,
    },
  } as const;
  return styles;
};

export default ComponentDetails;
