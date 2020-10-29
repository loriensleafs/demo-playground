import { Dict, isFn, isObj, memoize } from "./../../../utils";
import { Pseudos, pseudoSelectors } from "./pseudo.selectors";

const isPseudoProp = (prop: string): prop is keyof Pseudos =>
  prop in pseudoSelectors;

const getPropName = memoize((prop: string) =>
  isPseudoProp(prop) ? pseudoSelectors[prop] : prop
);

export const parsePseudo = (props: Dict) => {
  const next: Dict = {};

  for (const prop in props) {
    const propValue = props[prop];
    const propName = getPropName(prop);

    if (isObj(propValue) && !isFn(propValue)) {
      next[propName] = parsePseudo(propValue);
    } else {
      next[propName] = propValue;
    }
  }

  return next;
};
