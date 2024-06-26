/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import LocalizedTypography, { useAnuLocalization } from 'anu/lib/advanced/smart-localization';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CanadaFlag from 'public/img/canada.png';
import IndiaFlag from 'public/img/india.png';
import React, { useEffect, useState } from 'react';
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

const onLinkPress = () => {
  setTimeout(() => {
    document.querySelector('#top')?.scrollIntoView({
      behavior: 'smooth',
    });
  }, 1);
};

/**
 * Footer Component
 *
 * @param {FooterProps}props - props for the footer component
 */
const Footer = (props: FooterProps) => {
  const { isDarkTheme, isOpen } = useMenuContext();
  const { getTranslation } = useAnuLocalization();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const style = styles(width, theme);
  const router = useRouter();

  const [isRendered, toggleIsRendered] = useState(false);

  const sx = useSx();

  useEffect(() => {
    toggleIsRendered(true);
  }, []);

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
      <Typography.Body onPress={onLinkPress} style={sx(style.listItem)}>
        <TextLink scroll={false} href={item.link}>
          {getTranslation(item.title)}
        </TextLink>
      </Typography.Body>
    ) : (
      <LocalizedTypography.Body style={sx(style.listItem)} localeKey={item.title} />
    );
  };

  if (isOpen && width < 900) return null;

  if (!isRendered) return null;

  return (
    <footer style={{ ...style.container, marginTop: router.pathname == '/' ? 0 : 50 }}>
      <Container disableGutters style={{ width: '100%', backgroundColor: isDarkTheme ? '#404040' : '#EEEEEE' }}>
        <Container disableGutters style={sx(style.footerContainer)}>
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
      </Container>
      <Container disableGutters style={{ width: '100%', backgroundColor: theme.colors?.$surface as never }}>
        <Container disableGutters style={sx(style.bottomContainer)}>
          <LocalizedTypography.Body style={sx(style.bottomLine)} localeKey='footer:bottomLine' />
          <Image alt='india-flag' src={IndiaFlag} height={16} />
          <Typography.Body style={sx(style.bottomLine)}> {'  &  '} </Typography.Body>
          <Image alt='canada-flag' src={CanadaFlag} height={16} />
        </Container>
      </Container>
    </footer>
  );
};

const styles = (width: number, theme: DripsyFinalTheme) => {
  return {
    container: {
      width: '100%',
      backgroundColor: theme.colors?.$background as string,
    },

    bottomContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row' as const,
      paddingVertical: 30,
      maxWidth: '1440px',
      alignSelf: 'center',
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
      maxWidth: '1440px',
      alignSelf: 'center',
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
