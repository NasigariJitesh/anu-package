import { useTheme } from 'anu/config';
import { Container, Icon, Typography } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useMenuContext } from 'screens/common/provider';

const source = Source_Sans_Pro({
  weight: ['600'],
  style: 'normal',
  subsets: ['latin'],
});

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useMenuContext();

  return isDarkTheme ? (
    <Icon name='wb-sunny' size={24} onPress={toggleTheme} />
  ) : (
    <Icon name='brightness-2' size={24} onPress={toggleTheme} />
  );
};

const ToggleMenu = () => {
  const { isOpen, toggleMenu } = useMenuContext();

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
  const { colors } = useTheme();

  const RenderToggleMenu = () => {
    if (!width) return <ToggleMenu />;

    return width < 900 ? <ToggleMenu /> : null;
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
        <MaterialCommunityIcon color={colors?.$onBackground as string} name='github' size={24} />
      </li>
      <li style={style.listItem}>
        <RenderToggleMenu />
      </li>
    </ul>
  );
};

const Navbar = () => {
  const theme = useTheme();

  const { isDarkTheme } = useMenuContext();

  return (
    <nav
      style={{
        ...style.navbar,
        boxShadow: `1px 2px ${theme.colors?.$surfaceVariant}`,
        backgroundColor: theme.colors?.$background as string,
      }}
    >
      <Container sx={style.container} flexDirection='row' justify='space-between' align='center'>
        <Link href={'/'}>
          <Image
            src={isDarkTheme ? '/img/icon_dark_theme.svg' : '/img/icon_light_theme.svg'}
            alt='Anu'
            width={45}
            height={45}
          />
        </Link>
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
    zIndex: 1,
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
