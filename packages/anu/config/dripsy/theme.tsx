import { makeTheme, useDripsyTheme } from 'dripsy';

import { ColorMode } from '..';
export { makeTheme } from 'dripsy';
import { argbFromHex, Hct, hexFromArgb, themeFromSourceColor, TonalPalette } from '@material/material-color-utilities';
import lodash from 'lodash';
import type { Function } from 'ts-toolbelt';

import { AnuTheme } from './provider';

interface CommonThemeGenerationProps {
  color?:
    | {
        primary: string;
        secondary?: string;
        tertiary?: string;
        neutral?: string;
        neutralVariant?: string;
        error?: string;
      }
    | string;
  colorScheme?: ColorMode;
  extendDefaultTheme?: boolean;
}

interface DefaultThemeGenerationProps<T> extends CommonThemeGenerationProps {
  theme: Function.Narrow<T>;
  extendDefaultTheme?: true;
}

interface CustomThemeGenerationProps<T> extends CommonThemeGenerationProps {
  theme: Function.Narrow<Omit<AnuTheme<T>, 'colors'>>;
  extendDefaultTheme: false;
}

type ThemeGenerationProps<T> = DefaultThemeGenerationProps<T> | CustomThemeGenerationProps<T>;

export const getDefaultTheme = (colorMode?: ColorMode) => {
  return generateTheme({
    theme: {
      reactNativeTypesOnly: true,
      fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
      lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
    },
    color: {
      primary: '#090C7D',
      secondary: '#7D0946',
      tertiary: '#7D7A09',
    },
    colorScheme: colorMode,
    extendDefaultTheme: false,
  });
};

/**
 *
 * @param root0
 * @param root0.theme - theme values to use for theme generation
 * @param root0.color - colors to use for theme generation
 * @param root0.extendDefaultTheme - whether to extend default theme
 * @param root0.colorScheme - colorscheme mode(light/dark) to use for theme generation
 */
export function generateTheme<T>({
  theme,
  color,
  colorScheme,
  extendDefaultTheme,
}: ThemeGenerationProps<T>): AnuTheme<T> {
  const generatedColors = generateMaterialColors(color, colorScheme);
  //@ts-ignore
  const generatedTheme = makeTheme({ ...theme, colors: generatedColors });

  return extendDefaultTheme === false ? generatedTheme : lodash.merge(getDefaultTheme(colorScheme), generatedTheme);
}

const getTonalColor = (color: TonalPalette, tone: number) => {
  return hexFromArgb(color.tone(tone));
};

const getMaterialColorScheme = (
  colors?: {
    primary: string;
    secondary?: string;
    tertiary?: string;
    neutral?: string;
    neutralVariant?: string;
    error?: string;
  },

  colorMode?: ColorMode,
) => {
  const hct = Hct.fromInt(argbFromHex(colors?.primary ?? '#090C7D'));
  const hue = hct.hue;

  const primary = colors?.primary
    ? TonalPalette.fromInt(argbFromHex(colors?.primary))
    : TonalPalette.fromInt(argbFromHex('090C7D'));

  const secondary = colors?.secondary
    ? TonalPalette.fromInt(argbFromHex(colors?.secondary))
    : TonalPalette.fromHueAndChroma(hue, 16);
  const tertiary = colors?.tertiary
    ? TonalPalette.fromInt(argbFromHex(colors?.tertiary))
    : TonalPalette.fromHueAndChroma(hue + 60, 24);
  const neutral = colors?.neutral
    ? TonalPalette.fromInt(argbFromHex(colors?.neutral))
    : TonalPalette.fromHueAndChroma(hue, 4);
  const neutralVariant = colors?.neutralVariant
    ? TonalPalette.fromInt(argbFromHex(colors?.neutralVariant))
    : TonalPalette.fromHueAndChroma(hue, 8);

  const error = colors?.error
    ? TonalPalette.fromInt(argbFromHex(colors?.error))
    : TonalPalette.fromHueAndChroma(25, 84);

  const colorScheme = generateColorSchemeFromTonalPalettes(
    primary,
    secondary,
    tertiary,
    neutral,
    neutralVariant,
    error,
    colorMode ?? 'light',
  );

  return colorScheme;
};

const generateColorSchemeFromTonalPalettes = (
  primary: TonalPalette,
  secondary: TonalPalette,
  tertiary: TonalPalette,
  neutral: TonalPalette,
  neutralVariant: TonalPalette,
  error: TonalPalette,
  colorMode: ColorMode,
) => {
  return colorMode === 'light'
    ? {
        $primary: getTonalColor(primary, 40),
        $primaryContainer: getTonalColor(primary, 90),
        $onPrimary: getTonalColor(primary, 100),
        $onPrimaryContainer: getTonalColor(primary, 10),
        $inversePrimary: getTonalColor(primary, 80),

        $secondary: getTonalColor(secondary, 40),
        $secondaryContainer: getTonalColor(secondary, 90),
        $onSecondary: getTonalColor(secondary, 100),
        $onSecondaryContainer: getTonalColor(secondary, 10),

        $tertiary: getTonalColor(tertiary, 40),
        $tertiaryContainer: getTonalColor(tertiary, 90),
        $onTertiary: getTonalColor(tertiary, 100),
        $onTertiaryContainer: getTonalColor(tertiary, 10),

        $surface: getTonalColor(neutral, 99),
        $surfaceDim: getTonalColor(neutral, 87),
        $surfaceBright: getTonalColor(neutral, 98),
        $surfaceContainerLowest: getTonalColor(neutral, 100),
        $surfaceContainerLow: getTonalColor(neutral, 96),
        $surfaceContainer: getTonalColor(neutral, 94),
        $surfaceContainerHigh: getTonalColor(neutral, 92),
        $surfaceContainerHighest: getTonalColor(neutral, 90),
        $surfaceVariant: getTonalColor(neutralVariant, 90),

        $onSurface: getTonalColor(neutral, 10),
        $onSurfaceVariant: getTonalColor(neutralVariant, 30),

        $inverseSurface: getTonalColor(neutral, 20),
        $inverseOnSurface: getTonalColor(neutral, 95),

        $background: getTonalColor(neutral, 99),
        $onBackground: getTonalColor(neutral, 10),

        $error: getTonalColor(error, 40),
        $errorContainer: getTonalColor(error, 90),
        $onError: getTonalColor(error, 100),
        $onErrorContainer: getTonalColor(error, 10),

        $outline: getTonalColor(neutralVariant, 50),
        $outlineVariant: getTonalColor(neutralVariant, 80),

        $shadow: getTonalColor(neutral, 0),
        $surfaceTint: getTonalColor(primary, 40),

        $scrim: getTonalColor(neutral, 0),
      }
    : {
        $primary: getTonalColor(primary, 80),
        $primaryContainer: getTonalColor(primary, 30),
        $onPrimary: getTonalColor(primary, 20),
        $onPrimaryContainer: getTonalColor(primary, 90),
        $inversePrimary: getTonalColor(primary, 40),

        $secondary: getTonalColor(secondary, 80),
        $secondaryContainer: getTonalColor(secondary, 30),
        $onSecondary: getTonalColor(secondary, 20),
        $onSecondaryContainer: getTonalColor(secondary, 90),

        $tertiary: getTonalColor(tertiary, 80),
        $tertiaryContainer: getTonalColor(tertiary, 30),
        $onTertiary: getTonalColor(tertiary, 20),
        $onTertiaryContainer: getTonalColor(tertiary, 90),

        $surface: getTonalColor(neutral, 10),
        $surfaceDim: getTonalColor(neutral, 6),
        $surfaceBright: getTonalColor(neutral, 24),
        $surfaceContainerLowest: getTonalColor(neutral, 4),
        $surfaceContainerLow: getTonalColor(neutral, 10),
        $surfaceContainer: getTonalColor(neutral, 12),
        $surfaceContainerHigh: getTonalColor(neutral, 17),
        $surfaceContainerHighest: getTonalColor(neutral, 22),
        $surfaceVariant: getTonalColor(neutralVariant, 30),

        $onSurface: getTonalColor(neutral, 90),
        $onSurfaceVariant: getTonalColor(neutralVariant, 80),

        $inverseSurface: getTonalColor(neutral, 90),
        $inverseOnSurface: getTonalColor(neutral, 20),

        $background: getTonalColor(neutral, 10),
        $onBackground: getTonalColor(neutral, 90),

        $error: getTonalColor(error, 80),
        $errorContainer: getTonalColor(error, 30),
        $onError: getTonalColor(error, 20),
        $onErrorContainer: getTonalColor(error, 90),

        $outline: getTonalColor(neutralVariant, 60),
        $outlineVariant: getTonalColor(neutralVariant, 30),

        $shadow: getTonalColor(neutral, 0),
        $surfaceTint: getTonalColor(primary, 40),

        $scrim: getTonalColor(neutral, 0),
      };
};

const generateMaterialColors = (
  colors?:
    | {
        primary: string;
        secondary?: string;
        tertiary?: string;
        neutral?: string;
        neutralVariant?: string;
        error?: string;
      }
    | string,
  colorMode?: ColorMode,
) => {
  if (typeof colors === 'string') {
    const generatedScheme = themeFromSourceColor(argbFromHex(colors));
    const { primary, secondary, tertiary, neutral, neutralVariant, error } = generatedScheme.palettes;
    return generateColorSchemeFromTonalPalettes(
      primary,
      secondary,
      tertiary,
      neutral,
      neutralVariant,
      error,
      colorMode ?? 'light',
    );
  } else {
    return getMaterialColorScheme(colors, colorMode);
  }
};

/**
 * Fetch the theme of the app
 *
 */
export const useTheme = () => {
  return useDripsyTheme().theme;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getThemeMode = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useTheme().colorScheme;
};

interface MyTheme {
  reactNativeTypesOnly: boolean;
  fontSizes: number[];
  lineHeights: number[];
  colorScheme?: ColorMode;
}

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {
    colors: {
      // new codes
      $primary: string;
      $primaryContainer: string;
      $onPrimary: string;
      $onPrimaryContainer: string;
      $inversePrimary: string;

      $secondary: string;
      $secondaryContainer: string;
      $onSecondary: string;
      $onSecondaryContainer: string;

      $tertiary: string;
      $tertiaryContainer: string;
      $onTertiary: string;
      $onTertiaryContainer: string;

      $surface: string;
      $surfaceDim: string;
      $surfaceBright: string;
      $surfaceContainerLowest: string;
      $surfaceContainerLow: string;
      $surfaceContainer: string;
      $surfaceContainerHigh: string;
      $surfaceContainerHighest: string;
      $surfaceVariant: string;
      $onSurface: string;
      $onSurfaceVariant: string;

      $inverseSurface: string;
      $inverseOnSurface: string;

      $background: string;
      $onBackground: string;

      $error: string;
      $errorContainer: string;
      $onError: string;
      $onErrorContainer: string;

      $outline: string;
      $outlineVariant: string;

      $shadow: string;
      $surfaceTint: string;
      $scrim: string;
    };
  }
}
