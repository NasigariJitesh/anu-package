/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Container, FlatList, LocalizedTypography, useAnuLocalization } from 'anu/lib';
import ComponentDetails from 'components/content/component-details';
import SEO from 'components/seo';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { Source_Sans_Pro } from 'next/font/google';
import { View } from 'react-native';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

const PackagesUsed = () => {
  const theme = useTheme();
  const sx = useSx();
  const { getTranslation } = useAnuLocalization();

  const styles = getStyles(theme);

  const list = ['credits:packages:item-1', 'credits:packages:item-2', 'credits:packages:item-3'];

  return (
    <Container disableGutters style={styles.examplesContainer}>
      <View nativeID='packages' style={{ position: 'absolute', top: -70, height: 10, width: 10, zIndex: -10 }} />

      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey='credits:packages:heading' />
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return (
            <Container disableGutters style={styles.listItem}>
              <div
                style={sx({ ...styles.stepDescription })}
                dangerouslySetInnerHTML={{ __html: getTranslation(item) }}
              />
            </Container>
          );
        }}
      />
    </Container>
  );
};

const Credits = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <SEO title='credits:mainHeading' />
      <Container nativeID='root-scroll' sx={styles.container}>
        <View nativeID='top' style={{ position: 'absolute', top: -70, height: 10, width: 10, zIndex: -10 }} />
        <Container disableGutters sx={{ maxWidth: '750px' }}>
          <ComponentDetails mainHeading={'credits:mainHeading'} mainDescription={'credits:mainDescription'} />
          <PackagesUsed />
        </Container>
      </Container>
    </>
  );
};

const getStyles = ({ colors }: DripsyFinalTheme) => {
  const styles = {
    container: {
      maxWidth: 900,
      flex: 1,
      alignSelf: 'baseline',
      zIndex: 1,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      paddingTop: 20,
      overflow: 'scroll',
    },

    listItem: {
      marginTop: 15,
    },

    examplesContainer: {
      marginVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
    },

    stepTitle: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
      maxWidth: '750px',
      marginBottom: '15px',
    },

    stepDescription: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: '20px',
    },
  } as const;
  return styles;
};

export default Credits;
