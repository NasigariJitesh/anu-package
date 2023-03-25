# Theming and Customization

## Creating a theme

You can easily create a new theme like this. This will extend the default theme provided by Anu and return a new theme object. This is inspired by Dripsy so check their documentation for additional reference.

```js
import { makeTheme } from 'anu';

const theme = makeTheme({
  colors: {
    $primary: '#4d53b7',
    $secondary: '#a63066',
    background: '#ffffff',
  },
});
```

## Usage

```js
import { useTheme } from 'anu';

const MyComponent = () => {
  const theme = useTheme();

  return <Text style={{ color: theme.colors.$primary }}>Hello World</Text>;
};
```

## Color Modes

The color modes are all taken from the Material Design v3. You can read more about it [here](https://material.io/design/color/dark-theme.html#ui-application).

You can get the color mode for the theme using the following link. This is a material custom theme builder (https://m3.material.io/theme-builder#/custom)

### Default Color Modes

#### Light theme

```js
{
  $primary: "#4d53b7",
  $onPrimary: "#ffffff",
  $primaryContainer: "#e0e0ff",
  $onPrimaryContainer: "#00006e",
  $secondary: "#a63066",
  $onSecondary: "#ffffff",
  $secondaryContainer: "#ffd9e3",
  $onSecondaryContainer: "#3e001f",
  $tertiary: "#646100",
  $onTertiary: "#ffffff",
  $tertiaryContainer: "#ece76e",
  $onTertiaryContainer: "#1e1d00",
  $error: "#ba1a1a",
  $onError: "#ffffff",
  $errorContainer: "#ffdad6",
  $onErrorContainer: "#410002",
  $background: "#fffbff",
  $onBackground: "#1b1b1f",
  $surface: "#fffbff",
  $onSurface: "#1b1b1f",
  $outline: "#777680",
  $surfaceVariant: "#e4e1ec",
  $onSurfaceVariant: "#46464f",
  $outlineVariant: "#c7c5d0",
  $shadow: "#000000",
  $surfaceTint: "#090C7D",
  $inverseSurface: "#303034",
  $inverseOnSurface: "#f3eff4",
  $inversePrimary: "#bfc2ff",
  $scrim: "#000000",
};

```

#### Dark theme

```js
{
  $primary: "#BFC2FF",
  $onPrimary: "#1A1F88",
  $primaryContainer: "#343A9E",
  $onPrimaryContainer: "#E0E0FF",
  $secondary: "#FFB0CA",
  $onSecondary: "#640036",
  $secondaryContainer: "#87154E",
  $onSecondaryContainer: "#FFD9E3",
  $tertiary: "#CFCB55",
  $onTertiary: "#333200",
  $tertiaryContainer: "#4B4900",
  $onTertiaryContainer: "#ECE76E",
  $error: "#FFB4AB",
  $onError: "#690005",
  $errorContainer: "#93000A",
  $onErrorContainer: "#FFDAD6",
  $background: "#1B1B1F",
  $onBackground: "#E5E1E6",
  $surface: "#1B1B1F",
  $onSurface: "#E5E1E6",
  $outline: "#918F9A",
  $surfaceVariant: "#46464F",
  $onSurfaceVariant: "#C7C5D0",
  $outlineVariant: "#46464F",
  $shadow: "#000000",
  $surfaceTint: "#090C7D",
  $inverseSurface: "#E5E1E6",
  $inverseOnSurface: "#303034",
  $inversePrimary: "#4D53B7",
  $scrim: "#000000",
};

```

You can use the theme to customize these colors and they will be reflected across all the components of the library.

## Custom Fonts (In the future)

The default font family that we are using here this `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

This can be changed everywhere by givin a font family at the root level of the theme.

```js
const theme = makeTheme({
  colors: {
    $primary: '#4d53b7',
    $secondary: '#a63066',
    background: '#ffffff',
  },
  fontFamily: {
    default: 'Roboto',
    100: 'Inter',
    ...
  },
});
```

Additional Links

- [Material Theme Builder](https://m3.material.io/theme-builder#/custom)
- [Styles - Material Design 3](https://m3.material.io/styles)
- [Theming - Dripsy](https://www.dripsy.xyz/usage/theming/create)
