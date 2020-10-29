import { isString } from "./../../../utils";

export const getProp = (value: any) => {
  try {
    return isString(value) ? JSON.parse(value.replace(/'/g, '"')) : value;
  } catch (err) {
    return value;
  }
};
