import { isObj, merge, __DEV__ } from "./../../../utils";
import { borders } from "./borders";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { help } from "./help";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { baseSizes, sizes } from "./sizes";
import {
  createTransition,
  durations,
  easing,
  getAutoHeightDuration
} from "./transition";
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography";

const space = baseSizes;

let baseTheme = {
  borders,
  breakpoints,
  colors,
  durations,
  easing,
  fonts,
  fontSizes,
  fontWeights,
  help,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transition: createTransition,
  getAutoHeightDuration
};

if (__DEV__) {
  /**
   * If this is a dev environment the theme variable is globally
   * exposed, along with notes that breakdown the theme space and
   * size values, including conversions.
   */
  Object.defineProperty(window, "theme", { get: () => baseTheme });
} else {
  delete baseTheme.help;
}

/**
 * Updates the current theme.
 *
 * @param nextTheme - the new theme object to merge into
 * the current theme.
 */
export const setTheme = (nextTheme: object = {}) => {
  if (isObj(nextTheme)) {
    baseTheme = merge({}, baseTheme, { ...nextTheme });
  }
};

export const theme = { ...baseTheme };
