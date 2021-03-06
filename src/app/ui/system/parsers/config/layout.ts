import { get, isNum, memoizedGet } from "./../../../../utils";
import * as CSS from "csstype";
import { createParser, Config, system } from "@styled-system/core";
import { Length, ResponsiveValue } from "../../utils";

function transform(value: any, scale: any) {
  const defaultValue = !isNum(value) || value > 1 ? value : value * 100 + "%";
  return memoizedGet(scale, value, defaultValue);
}

const config: Config = {
  width: {
    property: "width",
    scale: "sizes",
    transform
  },
  w: {
    property: "width",
    scale: "sizes",
    transform
  },
  height: {
    property: "height",
    scale: "sizes",
    transform
  },
  h: {
    property: "height",
    scale: "sizes",
    transform
  },
  boxSize: {
    properties: ["width", "height"],
    scale: "sizes",
    transform
  },
  minWidth: {
    property: "minWidth",
    scale: "sizes",
    transform
  },
  minW: {
    property: "minWidth",
    scale: "sizes",
    transform
  },
  minHeight: {
    property: "minHeight",
    scale: "sizes",
    transform
  },
  minH: {
    property: "minHeight",
    scale: "sizes",
    transform
  },
  maxWidth: {
    property: "maxWidth",
    scale: "sizes",
    transform
  },
  maxW: {
    property: "maxWidth",
    scale: "sizes",
    transform
  },
  maxHeight: {
    property: "maxHeight",
    scale: "sizes",
    transform
  },
  maxH: {
    property: "maxHeight",
    scale: "sizes",
    transform
  },
  d: {
    property: "display"
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true
};

/**
 * Types for layout related CSS properties
 */
export interface LayoutProps {
  /**
   * The CSS `display` property
   */
  display?: ResponsiveValue<CSS.Property.Display>;
  /**
   * The CSS `display` property
   */
  d?: ResponsiveValue<CSS.Property.Display>;
  /**
   * The CSS `width` property
   */
  width?: ResponsiveValue<CSS.Property.Width<Length>>;
  /**
   * The CSS `width` property
   */
  w?: ResponsiveValue<CSS.Property.Width<Length>>;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: ResponsiveValue<CSS.Property.Width<Length>>;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: ResponsiveValue<CSS.Property.MaxWidth<Length>>;
  /**
   * The CSS `max-width` property
   */
  maxW?: ResponsiveValue<CSS.Property.MaxWidth<Length>>;
  /**
   * The CSS `min-width` property
   */
  minWidth?: ResponsiveValue<CSS.Property.MinWidth<Length>>;
  /**
   * The CSS `min-width` property
   */
  minW?: ResponsiveValue<CSS.Property.MinWidth<Length>>;
  /**
   * The CSS `height` property
   */
  height?: ResponsiveValue<CSS.Property.Height<Length>>;
  /**
   * The CSS `height` property
   */
  h?: ResponsiveValue<CSS.Property.Height<Length>>;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: ResponsiveValue<CSS.Property.MaxHeight<Length>>;
  /**
   * The CSS `max-height` property
   */
  maxH?: ResponsiveValue<CSS.Property.MaxHeight<Length>>;
  /**
   * The CSS `min-height` property
   */
  minHeight?: ResponsiveValue<CSS.Property.MinHeight<Length>>;
  /**
   * The CSS `min-height` property
   */
  minH?: ResponsiveValue<CSS.Property.MinHeight<Length>>;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: ResponsiveValue<CSS.Property.VerticalAlign<Length>>;
  /**
   * The CSS `overflow` property
   */
  overflow?: ResponsiveValue<CSS.Property.Overflow>;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: ResponsiveValue<CSS.Property.OverflowX>;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: ResponsiveValue<CSS.Property.OverflowY>;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: CSS.Property.BoxSizing;
}

export const layout = system(config);
export const layoutParser = createParser(config);
