/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'anu/config';
import { Container, LocalizedTypography, Typography, useAnuLocalization } from 'anu/lib';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import Image from 'next/image';
import CanadaFlag from 'public/img/canada.png';
import IndiaFlag from 'public/img/india.png';
import React from 'react';
import { useMenuContext } from 'screens/common/provider';
import { TextLink } from 'solito/link';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

interface FooterSectionItem {
  title: string;
  link?: string;
}
interface FooterSection {
  heading: string;
  items: FooterSectionItem[];
}

export interface FooterProps {
  links: FooterSection[];
}

/**
 * Footer Component
 *
 * @param {FooterProps}props - props for the footer component
 */
const Footer = (props: FooterProps) => {
  const { isDarkTheme } = useMenuContext();
  const { getTranslation } = useAnuLocalization();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const style = styles(width, theme);

  const sx = useSx();

  const Section = (section: FooterSection) => {
    return (
      <Container disableGutters sx={style.listContainer as never}>
        <LocalizedTypography.Title style={sx(style.listHeading)} localeKey={section.heading} />
        {section.items.map((item, id) => (
          <Item {...item} key={id} />
        ))}
      </Container>
    );
  };

  const Item = (item: FooterSectionItem) => {
    return item.link ? (
      <Typography.Body style={sx(style.listItem)}>
        <TextLink href={item.link}>{getTranslation(item.title)}</TextLink>
      </Typography.Body>
    ) : (
      <LocalizedTypography.Body style={sx(style.listItem)} localeKey={item.title} />
    );
  };

  return (
    <footer style={style.container}>
      <Container
        disableGutters
        // eslint-disable-next-line react-native/no-inline-styles, react-native/no-color-literals
        style={[sx(style.footerContainer), { backgroundColor: isDarkTheme ? '#404040' : '#EEEEEE' }]}
      >
        <Container disableGutters style={sx(style.imageContainer)}>
          <img
            src={isDarkTheme ? '/img/logo_dark_theme.svg' : '/img/logo_light_theme.svg'}
            alt={'Anu - ' + getTranslation('home:mainHeading')}
            style={sx(style.image)}
          />
          <LocalizedTypography.Body style={sx(style.imageCaption)} localeKey='footer:image-caption' />
        </Container>
        {props.links.map((section, id) => (
          <Section {...section} key={id} />
        ))}
      </Container>
      <Container disableGutters style={sx(style.bottomContainer)}>
        <LocalizedTypography.Body style={sx(style.bottomLine)} localeKey='footer:bottomLine' />
        <Image alt='india-flag' src={IndiaFlag} height={16} />
        <Typography.Body style={sx(style.bottomLine)}> & </Typography.Body>

        <Image alt='canada-flag' src={CanadaFlag} height={16} />
      </Container>
    </footer>
  );
};

const styles = (width: number, theme: DripsyFinalTheme) => {
  return {
    container: {
      width: '100%',
    },
    bottomContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row' as const,
      backgroundColor: theme.colors?.$surface as never,
      paddingVertical: 30,
    },

    footerContainer: {
      width: '100%',
      paddingHorizontal: [40, 40, 40, 70, 70],
      paddingTop: 10,
      paddingBottom: [45, 45, 66, 66, 66],
      display: 'flex' as const,
      flexWrap: 'wrap' as const,
      justifyContent: 'space-between' as const,
      flexDirection: 'row' as const,
    },

    imageContainer: {
      overflow: 'visible',
      width: 250,
      marginTop: [35, 35, 35, 56, 56],
    },

    image: {
      width: [90, 90, 90, 110, 110],
    },

    horizontalSpacing: {
      width: width >= 990 ? 250 : 95,
      height: '100%',
    },

    imageCaption: {
      marginTop: 15,
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      color: theme.colors?.$onSurface as never,
      fontWeight: '400',
    },

    listContainer: {
      width: [116, 150, 150, 200, 200],
      marginTop: [35, 35, 35, 56, 56],
    },

    listHeading: {
      fontWeight: '600',
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      marginBottom: 15,
      lineHeight: 32,
      color: theme.colors?.$onSurface as never,
    },

    listItem: {
      fontWeight: '400',
      fontFamily: source.style.fontFamily,
      fontSize: [16, 16, 16, 18, 18],
      marginBottom: 15,
      lineHeight: 22,
      color: theme.colors?.$onSurface as never,
    },
    bottomLine: {
      fontWeight: '400',
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: 22,
      color: theme.colors?.$onSurface as never,
      textAlign: 'center' as const,
    },
  };
};
export default Footer;
