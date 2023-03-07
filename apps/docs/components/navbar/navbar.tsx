import { getTheme } from 'anu/config';
import { Container, Icon, Typography } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useMenuContext } from 'screens/common/provider';

const source = Source_Sans_Pro({
  weight: ['600'],
  style: 'normal',
  subsets: ['latin'],
});

const theme = getTheme();

const ToggleTheme = () => {
  const [isLightTheme, toggleLightTheme] = useState(false);

  const onIconPressedHandler = () => {
    toggleLightTheme((previousState) => !previousState);
  };

  return isLightTheme ? (
    <Icon name='brightness-2' size={24} onPress={onIconPressedHandler} />
  ) : (
    <Icon name='wb-sunny' size={24} onPress={onIconPressedHandler} />
  );
};

const ToggleMenu = () => {
  const { isOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    return () => {
      if (!isOpen) toggleMenu();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOpen ? (
    <Icon name='close' size={24} onPress={toggleMenu} />
  ) : (
    <Icon name='menu' size={24} onPress={toggleMenu} />
  );
};

// const Links = () => {
//   return (
//     <menu>
//       <ul style={style.list}>
//         <li style={style.listItem}>
//           <TextLink href={'/'}>
//             <Typography.Body style={style.text}>Docs</Typography.Body>
//           </TextLink>
//         </li>
//         <li style={style.listItem}>
//           <TextLink href={'/'}>
//             <Typography.Body style={style.text}>Components</Typography.Body>
//           </TextLink>
//         </li>
//         <li style={style.listItem}>
//           <TextLink href={'/'}>
//             <Typography.Body style={style.text}>Resources</Typography.Body>
//           </TextLink>
//         </li>
//       </ul>
//     </menu>
//   );
// };

const MetaData = () => {
  const { width } = useWindowDimensions();

  const RenderToggleMenu = () => {
    console.log(width);

    if (!width) return <ToggleMenu />;

    return width <= 768 ? <ToggleMenu /> : null;
  };

  return (
    <ul style={style.list}>
      <li style={style.listItem}>
        <Typography.Body style={style.text}>1.0</Typography.Body>
      </li>
      <li style={style.listItem}>
        <ToggleTheme />
      </li>
      <li style={style.listItem}>
        <MaterialCommunityIcon name='github' size={24} />
      </li>
      <li style={style.listItem}>
        <RenderToggleMenu />
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav style={style.navbar}>
      <Container sx={style.container} flexDirection='row' justify='space-between' align='center'>
        <Typography.Display size='medium' style={style.title}>
          Anu
        </Typography.Display>
        {/* <Links /> */}
        <MetaData />
      </Container>
    </nav>
  );
};

const style = {
  navbar: {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: `1px 2px ${theme.colors.$surfaceVariant}`,
  },
  title: {
    width: '100%',
    fontSize: 35,
  },
  text: {
    fontFamily: source.style.fontFamily,
    fontSize: 16,
    width: '100%',
  },
  container: {
    maxWidth: 1440,
    width: '100%',
    alignSelf: 'center',
  },
  list: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 0 32px',
  },
} as const;

export default Navbar;
