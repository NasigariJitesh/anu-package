/**
 * Refer the the following link to know more about the icons used in material design
 *
 * Check out the following links
 *
 *  - {@link https://fonts.google.com/icons?icon.set=Material+Symbols Material Symbols}
 *
 */

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type MaterialIconProps = React.ComponentProps<typeof MaterialIcons>;

export type IconProps = MaterialIconProps;

/**
 * An Icon can be a icon name or an svg image
 */
// type IconSourceBase = string | ImageSourcePropType;
type IconSourceBase = string;

export type IconSource = IconSourceBase;
// | Readonly<{ source: IconSourceBase; direction: 'rtl' | 'ltr' | 'auto' }>
// | ((props: { size: number; allowFontScaling?: boolean } & { color: string }) => React.ReactNode);
