import { getColorInRGBA } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Divider, Typography } from 'anu/lib';
import { DripsyFinalTheme } from 'dripsy';
import { Source_Sans_Pro } from 'next/font/google';

import { translations } from '../../services/localization';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

export interface Property {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface ComponentPropertiesProps {
  properties: Property[];
}

const ComponentProperties = ({ properties }: ComponentPropertiesProps) => {
  const theme = useTheme();

  const styles = getStyles(theme);

  const renderProperty = (prop: Property, index: number, isLast: boolean) => {
    return (
      <Container key={index} disableGutters style={styles.propertyContainer}>
        <Container disableGutters flexDirection='row' align='flex-end'>
          <Typography.Headline style={styles.name}>{prop.name}</Typography.Headline>
          <Typography.Body style={styles.type}>{prop.type}</Typography.Body>
        </Container>

        <Typography.Body style={styles.otherDetails}>{prop.description}</Typography.Body>

        {prop.defaultValue ? (
          <Typography.Body style={styles.otherDetails}>
            {translations('en', 'defaultValue')} : {prop.defaultValue}
          </Typography.Body>
        ) : null}

        {isLast ? null : <Divider variant='full-width' light style={styles.divider} />}
      </Container>
    );
  };

  return (
    <Container nativeID='props' disableGutters sx={styles.container as never}>
      <Typography.Headline style={styles.heading}>{translations('en', 'props')}</Typography.Headline>
      <Divider variant='full-width' light style={styles.divider} />
      {properties.map((prop, index) => renderProperty(prop, index, index === properties.length - 1))}
    </Container>
  );
};

const getStyles = ({ colors }: DripsyFinalTheme) => {
  const styles = {
    container: {
      marginVertical: 30,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
    },
    propertyContainer: {
      width: '100%',
    },
    heading: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
      marginVertical: 10,
    },

    name: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      marginRight: 8,
    },
    type: {
      color: getColorInRGBA(colors?.$onSurface as string, 80),
      fontFamily: source.style.fontFamily,
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 18,
    },
    otherDetails: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 8,
    },
    divider: {
      color: colors?.$onSurface as never,
      marginBottom: 8,
    },
  } as const;

  return styles;
};

export default ComponentProperties;
