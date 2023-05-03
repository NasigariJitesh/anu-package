import { useTheme } from 'anu/config';
import { Container, Divider, Typography } from 'anu/lib';
import LocalizedTypography, { useAnuLocalization } from 'anu/lib/advanced/smart-localization/components';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { Source_Sans_Pro } from 'next/font/google';
import { View } from 'react-native';

export interface AdditionalInformationProps {
  title: string;
  isLocaleSpecific?: boolean;
  items: {
    info: string;
    isLocaleSpecific?: boolean;
  }[];
  id: string;
}

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

const AdditionalInformation = (props: AdditionalInformationProps) => {
  const theme = useTheme();
  const sx = useSx();
  const { getTranslation } = useAnuLocalization();

  const styles = getStyles(theme);

  return (
    <Container disableGutters style={styles.examplesContainer}>
      <View nativeID={props.id} style={styles.innerContainer} />
      {props.isLocaleSpecific ? (
        <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={props.title} />
      ) : (
        <Typography.Headline style={sx(styles.stepTitle)}>{props.title}</Typography.Headline>
      )}
      <Divider variant='full-width' light style={styles.divider} />

      <ul id='additional-info-list'>
        {props.items.map((item) => {
          return (
            <li key={item.info} style={styles.list}>
              <div
                style={sx({ ...styles.stepDescription })}
                dangerouslySetInnerHTML={{ __html: item.isLocaleSpecific ? getTranslation(item.info) : item.info }}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
const getStyles = ({ colors }: DripsyFinalTheme) => {
  const styles = {
    examplesContainer: {
      MarginTop: 30,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
    },
    innerContainer: {
      position: 'absolute',
      top: -80,
      height: 10,
      width: 10,
      zIndex: -10,
    },
    list: { marginLeft: 15, color: colors?.$onSurface as string },
    divider: {
      color: colors?.$onSurface as never,
      marginBottom: 8,
    },
    stepTitle: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
      maxWidth: '750px',
      marginVertical: '10px',
    },
    stepDescription: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: '24px',
      marginBottom: '15px',
      color: colors?.$onSurface as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      fontWeight: '400',
    },
  } as const;
  return styles;
};

export default AdditionalInformation;
