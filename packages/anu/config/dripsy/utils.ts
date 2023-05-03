interface RGB {
  red: number;
  green: number;
  blue: number;
}

/**
 * Convert hex code color to RGB
 *
 * @param hex - hex code of the color
 */
export const convertHexCodeToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([\da-f])([\da-f])([\da-f])$/i;

  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);

  if (result)
    return {
      red: Number.parseInt(result[1]!, 16),
      green: Number.parseInt(result[2]!, 16),
      blue: Number.parseInt(result[3]!, 16),
    } satisfies RGB;

  return null;
};

/**
 * Convert the resultant color to a given shade
 *
 * @param rgb - rgb color
 * @param shade - shade of the color that is needed
 */
function rgbShade(rgb: RGB, shade: number) {
  return {
    red: rgb.red * (1 - 0.01 * shade),
    green: rgb.green * (1 - 0.01 * shade),
    blue: rgb.blue * (1 - 0.01 * shade),
  };
}

/**
 *
 * @param rgb - rgb color
 * @param tint - tint of the color that is needed
 *
 * tint one of our rgb color objects to a distance of i*10%
 * @example ({ red: 80, green: 18, blue: 20 }, 1) => { red: 98, green: 42, blue: 44 }
 */
function rgbTint(rgb: RGB, tint: number) {
  return {
    red: rgb.red + (255 - rgb.red) * tint * 0.01,
    green: rgb.green + (255 - rgb.green) * tint * 0.01,
    blue: rgb.blue + (255 - rgb.blue) * tint * 0.01,
  };
}

/**
 * pad a hexadecimal string with zeros if it needs it
 *
 * @param number_
 * @param length
 */
function pad(number_: string, length: number) {
  let value = '' + number_;

  while (value.length < length) {
    value = '0' + value;
  }

  return value;
}

/**
 * convert an integer to a 2-char hex string. For sanity, round it and ensure it is between 0 and 255
 *
 * @param rgbInt
 * @example 43 => '2b'
 */
function intToHex(rgbInt: number) {
  return pad(Math.min(Math.max(Math.round(rgbInt), 0), 255).toString(16), 2);
}

/**
 * convert one of rgb color objects to a full hex color string
 *
 * @param rgb - RGB Color object
 * @example { red: 80, green: 18, blue: 20 } => '#501214'
 */
function rgbToHex(rgb: RGB) {
  return '#' + intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue);
}

/**
 *  Calculate the new color from a hex code and shade/ tint value
 *
 * @param hexCode -  hex code of the string
 * @param tintOrShadeValue - shade/ tint of the color that is needed
 * @param shadeOrTint - function to calculate tint/ shade value
 */
const calculateNewColor = (
  hexCode: string,
  tintOrShadeValue: number,
  shadeOrTint: (rgb: RGB, index: number) => RGB,
) => {
  const color = convertHexCodeToRgb(hexCode);

  if (!color) return '#ffffff';

  return rgbToHex(shadeOrTint(color, tintOrShadeValue));
};

/**
 * Calculate shades at an array increment of 10% shade
 *
 * @param hexCode - hex code of the string
 * @param shade - shade of the color that is needed
 */
export function calculateShade(hexCode: string, shade: number) {
  return calculateNewColor(hexCode, shade, rgbShade);
}

/**
 * Calculate tints at an array increment of 10% shade
 *
 * @param hexCode - hex code of the string
 * @param tint - tint of the color that is needed
 */
export function calculateTint(hexCode: string, tint: number) {
  return calculateNewColor(hexCode, tint, rgbTint);
}
