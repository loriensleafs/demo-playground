import { get, isNotNum, isString } from "./../../../utils";

export const posOrNeg = (scale: any, value: any) => {
  if (isNotNum(value) || value >= 0) {
    if (isString(value) && value.startsWith("-")) {
      const valWithoutMinus = value.substring(1);
      const val = get(scale, valWithoutMinus, valWithoutMinus);
      return `-${val}`;
    }
    return get(scale, value, value);
  }

  const abs = Math.abs(value);
  const val = get(scale, abs, abs);

  return isString(val) ? `-${val}` : Number(val) * -1;
};
