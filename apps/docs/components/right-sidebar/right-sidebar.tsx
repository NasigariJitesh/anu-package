import { useTheme } from 'anu/config';
import { Container, FlatList, LocalizedTypography, Typography, useAnuLocalization } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { badgeIndex } from 'services/docs/badge';
import { checkboxIndex } from 'services/docs/checkbox';
import { chipIndex } from 'services/docs/chip';
import { containerIndex } from 'services/docs/container';
import { creditsIndex } from 'services/docs/credits';
import { dividerIndex } from 'services/docs/divider';
import { extendedFABIndex } from 'services/docs/extended-fab';
import { FABIndex } from 'services/docs/fab';
import { iconButtonIndex } from 'services/docs/icon-button';
import { installationIndex } from 'services/docs/installation';
import { radioButtonIndex } from 'services/docs/radio-button';
import { regularButtonIndex } from 'services/docs/regular-button';
import { segmentedButtonIndex } from 'services/docs/segmented-button';
import { textFieldIndex } from 'services/docs/text-field';
import { themingIndex } from 'services/docs/theming';
import { typographyIndex } from 'services/docs/typography';
import { TextLink } from 'solito/link';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

type Link = { title: string; link: string };

type ComponentLinks = Link;

interface SubIndex {
  title: string;
  link?: string;
  components?: ComponentLinks[];
}

export interface HeadingProps {
  heading: string;
  links: SubIndex[];
}

const Group = (props: HeadingProps) => {
  const { getTranslation } = useAnuLocalization();

  return (
    <FlatList
      contentContainerStyle={style.groupList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <>
            <Typography.Title style={style.groupName}>
              <TextLink href={item.link ?? '#'}>{getTranslation(item.title)}</TextLink>
            </Typography.Title>
            <Components links={item.components} />
          </>
        );
      }}
    />
  );
};

const Components = (props: { links: ComponentLinks[] | undefined }) => {
  const { pathname } = useRouter();
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={style.componentList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <Typography.Title
            style={[
              style.componentName,
              // eslint-disable-next-line react-native/no-inline-styles
              pathname === item.link ? { color: theme.colors?.$primary as never, opacity: 1 } : {},
            ]}
          >
            <TextLink href={item.link}>{item.title}</TextLink>
          </Typography.Title>
        );
      }}
    />
  );
};

const Index = (props: HeadingProps) => {
  return (
    <>
      <LocalizedTypography.Body style={style.preHeading} localeKey='rightSideBar:onThisPage' />
      <LocalizedTypography.Title style={style.heading} localeKey={props.heading} />
      <Group {...props} />
    </>
  );
};

const RenderIndex = () => {
  const { pathname } = useRouter();

  switch (pathname) {
    case '/components/typography': {
      {
        return <Index {...typographyIndex} />;
      }
    }
    case '/components/badge': {
      {
        return <Index {...badgeIndex} />;
      }
    }
    case '/components/chip': {
      {
        return <Index {...chipIndex} />;
      }
    }
    case '/components/container': {
      {
        return <Index {...containerIndex} />;
      }
    }
    case '/components/divider': {
      {
        return <Index {...dividerIndex} />;
      }
    }
    case '/components/button/extended-fab': {
      {
        return <Index {...extendedFABIndex} />;
      }
    }
    case '/components/button/fab': {
      {
        return <Index {...FABIndex} />;
      }
    }
    case '/components/button/icon': {
      {
        return <Index {...iconButtonIndex} />;
      }
    }
    case '/components/button/common': {
      {
        return <Index {...regularButtonIndex} />;
      }
    }
    case '/components/button/segmented': {
      {
        return <Index {...segmentedButtonIndex} />;
      }
    }
    case '/components/checkbox': {
      {
        return <Index {...checkboxIndex} />;
      }
    }
    case '/components/radio-button': {
      {
        return <Index {...radioButtonIndex} />;
      }
    }
    case '/components/text-field': {
      {
        return <Index {...textFieldIndex} />;
      }
    }

    case '/getting-started': {
      {
        return <Index {...installationIndex} />;
      }
    }

    case '/credits': {
      {
        return <Index {...creditsIndex} />;
      }
    }

    case '/theming': {
      {
        return <Index {...themingIndex} />;
      }
    }
    default: {
      {
        return null;
      }
    }
  }
};

const RightSidebar = () => {
  const { width } = useWindowDimensions();
  const { pathname } = useRouter();

  if (!width || width <= 1024) return null;
  if (pathname === '/') return null;

  return (
    <Container sx={style.container}>
      <RenderIndex />
    </Container>
  );
};

const style = {
  container: {
    width: 210,
    paddingTop: 20,
    position: 'sticky',
    top: 70,
  },
  preHeading: {
    fontFamily: source.style.fontFamily,
    fontSize: 16,
    opacity: 0.7,
    marginVertical: 10,
  },
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 24,
    fontWeight: '600',
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginTop: 10,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginTop: 5,
  },
  groupList: {
    marginVertical: 15,
  },
  componentList: {
    marginVertical: 15,
    marginLeft: 15,
  },
} as const;

export default RightSidebar;
