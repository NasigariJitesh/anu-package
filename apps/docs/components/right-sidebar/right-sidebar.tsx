import { useTheme } from 'anu/config';
import { Container, FlatList, Typography } from 'anu/lib';
import LocalizedTypography, { useAnuLocalization } from 'anu/lib/advanced/smart-localization';
import { ScrollView, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { autoCompleteIndex } from 'services/docs/auto-complete';
import { avatarIndex } from 'services/docs/avatar';
import { badgeIndex } from 'services/docs/badge';
import { bottomSheetIndex } from 'services/docs/bottom-sheet';
import { cardIndex } from 'services/docs/card';
import { cardActionsIndex } from 'services/docs/card-actions';
import { cardContentIndex } from 'services/docs/card-content';
import { cardHeaderIndex } from 'services/docs/card-header';
import { cardMediaIndex } from 'services/docs/card-media';
import { cardTitleIndex } from 'services/docs/card-title';
import { checkboxIndex } from 'services/docs/checkbox';
import { chipIndex } from 'services/docs/chip';
import { containerIndex } from 'services/docs/container';
import { creditsIndex } from 'services/docs/credits';
import { datePickerInputIndex } from 'services/docs/date-picker-input';
import { datePickerModalIndex } from 'services/docs/date-picker-modal';
import { dialogIndex } from 'services/docs/dialog';
import { dialogActionsIndex } from 'services/docs/dialog-actions';
import { dialogContentIndex } from 'services/docs/dialog-content';
import { dialogTitleIndex } from 'services/docs/dialog-title';
import { dividerIndex } from 'services/docs/divider';
import { extendedFABIndex } from 'services/docs/extended-fab';
import { FABIndex } from 'services/docs/fab';
import { fileDropZoneIndex } from 'services/docs/file-drop-zone';
import { fileUploadIndex } from 'services/docs/file-upload';
import { iconButtonIndex } from 'services/docs/icon-button';
import { imageIndex } from 'services/docs/image';
import { installationIndex } from 'services/docs/installation';
import { menuIndex } from 'services/docs/menu';
import { menuItemIndex } from 'services/docs/menu-item';
import { menuListIndex } from 'services/docs/menu-list';
import { otpInputIndex } from 'services/docs/otp-input';
import { phoneInputIndex } from 'services/docs/phone-input';
import { radioButtonIndex } from 'services/docs/radio-button';
import { regularButtonIndex } from 'services/docs/regular-button';
import { searchIndex } from 'services/docs/search';
import { segmentedButtonIndex } from 'services/docs/segmented-button';
import { sideSheetIndex } from 'services/docs/side-sheet';
import { snackbarIndex } from 'services/docs/snackbar';
import { switchIndex } from 'services/docs/switch';
import { textFieldIndex } from 'services/docs/text-field';
import { themingIndex } from 'services/docs/theming';
import { touchableRippleIndex } from 'services/docs/touchable-ripple';
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

const onLinkPress = (link?: string) => {
  if (!link) return;

  document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });

  // update link with the new hash
  window.history.replaceState({}, '', link);
};

const Group = (props: HeadingProps) => {
  const { getTranslation } = useAnuLocalization();

  return (
    <FlatList
      contentContainerStyle={style.groupList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <>
            <Typography.Title onPress={() => onLinkPress(item.link)} style={style.groupName}>
              {getTranslation(item.title)}
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
    <Container disableGutters style={style.indexContainer}>
      <LocalizedTypography.Body style={style.preHeading} localeKey='rightSideBar:onThisPage' />
      <LocalizedTypography.Title style={style.heading} localeKey={props.heading} />
      <Group {...props} />
    </Container>
  );
};

const RenderIndex = () => {
  const { pathname } = useRouter();

  switch (pathname) {
    case '/components/auto-complete': {
      {
        return <Index {...autoCompleteIndex} />;
      }
    }
    case '/components/avatar': {
      {
        return <Index {...avatarIndex} />;
      }
    }
    case '/components/badge': {
      {
        return <Index {...badgeIndex} />;
      }
    }
    case '/components/bottom-sheet': {
      {
        return <Index {...bottomSheetIndex} />;
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
    case '/components/card': {
      {
        return <Index {...cardIndex} />;
      }
    }
    case '/components/card/header': {
      {
        return <Index {...cardHeaderIndex} />;
      }
    }
    case '/components/card/media': {
      {
        return <Index {...cardMediaIndex} />;
      }
    }
    case '/components/card/title': {
      {
        return <Index {...cardTitleIndex} />;
      }
    }
    case '/components/card/content': {
      {
        return <Index {...cardContentIndex} />;
      }
    }
    case '/components/card/actions': {
      {
        return <Index {...cardActionsIndex} />;
      }
    }
    case '/components/checkbox': {
      {
        return <Index {...checkboxIndex} />;
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
    case '/components/date-picker/input': {
      {
        return <Index {...datePickerInputIndex} />;
      }
    }
    case '/components/date-picker/modal': {
      {
        return <Index {...datePickerModalIndex} />;
      }
    }
    case '/components/divider': {
      {
        return <Index {...dividerIndex} />;
      }
    }
    case '/components/dialog': {
      {
        return <Index {...dialogIndex} />;
      }
    }
    case '/components/dialog/title': {
      {
        return <Index {...dialogTitleIndex} />;
      }
    }
    case '/components/dialog/content': {
      {
        return <Index {...dialogContentIndex} />;
      }
    }
    case '/components/dialog/actions': {
      {
        return <Index {...dialogActionsIndex} />;
      }
    }
    case '/components/file-upload': {
      {
        return <Index {...fileUploadIndex} />;
      }
    }
    case '/components/file-upload/file-drop-zone': {
      {
        return <Index {...fileDropZoneIndex} />;
      }
    }
    case '/components/image': {
      {
        return <Index {...imageIndex} />;
      }
    }
    case '/components/text-field': {
      {
        return <Index {...textFieldIndex} />;
      }
    }
    case '/components/menu': {
      {
        return <Index {...menuIndex} />;
      }
    }
    case '/components/menu/list': {
      {
        return <Index {...menuListIndex} />;
      }
    }
    case '/components/menu/item': {
      {
        return <Index {...menuItemIndex} />;
      }
    }
    case '/components/otp-input': {
      {
        return <Index {...otpInputIndex} />;
      }
    }
    case '/components/phone-input': {
      {
        return <Index {...phoneInputIndex} />;
      }
    }
    case '/components/radio-button': {
      {
        return <Index {...radioButtonIndex} />;
      }
    }
    case '/components/search': {
      {
        return <Index {...searchIndex} />;
      }
    }
    case '/components/side-sheet': {
      {
        return <Index {...sideSheetIndex} />;
      }
    }
    case '/components/snackbar': {
      {
        return <Index {...snackbarIndex} />;
      }
    }
    case '/components/switch': {
      {
        return <Index {...switchIndex} />;
      }
    }

    case '/components/touchable-ripple': {
      {
        return <Index {...touchableRippleIndex} />;
      }
    }
    case '/components/typography': {
      {
        return <Index {...typographyIndex} />;
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
  const { width, height } = useWindowDimensions();
  const sx = useSx();
  const { pathname } = useRouter();

  if (!width || width <= 1060) return null;
  if (pathname === '/') return null;

  return (
    <Container sx={style.container}>
      <ScrollView
        id={undefined}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={sx({ maxHeight: height - 70, paddingBottom: '5px' })}
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
        onPointerDown={undefined}
        onPointerDownCapture={undefined}
        onPointerMove={undefined}
        onPointerMoveCapture={undefined}
        onPointerUp={undefined}
        onPointerUpCapture={undefined}
        onPointerCancel={undefined}
        onPointerCancelCapture={undefined}
        onPointerEnter={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeave={undefined}
        onPointerLeaveCapture={undefined}
        stickyHeaderHiddenOnScroll={undefined}
        StickyHeaderComponent={undefined}
        automaticallyAdjustKeyboardInsets={undefined}
        automaticallyAdjustsScrollIndicatorInsets={undefined}
        href={undefined}
        hrefAttrs={undefined}
        onClick={undefined}
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      >
        <RenderIndex />
      </ScrollView>
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
  indexContainer: {
    marginBottom: 10,
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
