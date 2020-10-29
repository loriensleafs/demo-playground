import {
  Dict,
  isArray,
  isFn,
  isNotEmptyObj,
  isObj,
  isString,
  memoizedGet as get,
  objKeys,
  runIfFn,
  toNum,
  __DEV__
} from "./../../../utils";
import { css as cx, injectGlobal } from "emotion";
import { parser, pseudoSelectors } from "../parsers";
import { parseBorder } from "../parsers/parser.border";
import { theme } from "../theme";
import { scales } from "./css.scales";

const bps = Object.values(theme.breakpoints).map(bp => `${bp}px`);
const mediaQueries = [
  null,
  ...bps.map(bp => `@media screen and (min-width: ${bp})`)
];

const isImportant = (value: any) =>
  isString(value) && value.endsWith("!important");

const numOrString = (value: any) => {
  const val = isFn(value) ? value(theme) : value;
  return isNaN(val) ? val : toNum(val);
};

const responsive = (styles: object = {}) => {
  const next = {};

  for (const key in styles) {
    let value = runIfFn(numOrString(styles[key]), theme);

    if (value == null) continue;

    if (!isArray(value)) {
      next[key] = value;
      continue;
    }

    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];

      if (!media) {
        next[key] = value[i];
        continue;
      }

      if (value[i] == null) continue;

      next[media] = next[media] || {};
      next[media][key] = value[i];
    }
  }

  return next;
};

/**
 * Creates parsed css styles.
 */
export const css = (args: object = {}) => {
  const computedStyles = {};
  const styleObj = runIfFn(args, theme);
  const styles: any = responsive(styleObj);
  const keys = objKeys(styles);

  for (let k = 0; k < keys.length; k++) {
    const key = keys[k];
    const x = runIfFn(numOrString(styles[key]), theme);
    const isImpt = isImportant(x);
    const val = isImpt ? x.replace(" !important", "") : x;

    // Map prop key to pseudo selector attribute or alias attribute.
    const prop = key in pseudoSelectors ? pseudoSelectors[key] : key;
    const config = (parser.config as Dict)[prop];

    // Parse the next branch of the style tree.
    if (isObj(val)) {
      computedStyles[prop] = css(val);
      continue;
    }

    // Map prop shorthand alias to properties and reparse them separately.
    if (get(config, "properties")) {
      for (const property of config.properties) {
        keys.push(property);
        styles[property] = val;
      }
      continue;
    }

    // Break border shorthand into properties and reparse them separately.
    if (parseBorder.props.includes(prop)) {
      const borderStyle = parseBorder(val, prop);
      const borderStyleKeys = objKeys(borderStyle);

      keys.push(...borderStyleKeys);

      borderStyleKeys.forEach(borderStyleKey => {
        styles[borderStyleKey] = borderStyle[borderStyleKey];
      });
      continue;
    }

    // Map prop value to scale key/index.
    const scale = get(theme, get(config, "scale", get(scales, prop)), {});
    const value = runIfFn(
      get(config, "transform", get(scale, val, val)),
      val,
      scale
    );

    // Map prop value to the config.property
    if (get(config, "property")) {
      computedStyles[config.property] = isImpt ? value + " !important" : value;
      continue;
    }

    // Prop key/value pass through as is.
    computedStyles[prop] = isImpt ? value + " !important" : value;
  }

  return computedStyles;
};

/**
 * Creates a className.
 */
export { cx };

/**
 * Parses styles and creates a className.
 */
export const cxs = (...args: any) =>
  args
    .reduce(
      (acc, arg) =>
        isObj(arg) && isNotEmptyObj(arg)
          ? [...acc, cx(css(arg))]
          : isString(arg)
          ? [...acc, arg]
          : acc,
      []
    )
    .flat()
    .join(" ");

/**
 * Parses and creates global styles.
 */
export const globalCss = (args: object = {}) => injectGlobal(css(args));

/**
 * If dev environment make namespaces globally available.
 */
if (__DEV__) {
  window["css"] = css;
  window["cxs"] = cxs;
  window["cx"] = cx;
  window["globalCss"] = globalCss;
}
