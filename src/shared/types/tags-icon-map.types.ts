import { FilterTags, Tags } from "./pizza.types";
import { SVGProps } from "./svg.types";


export type TagIconMap = Record<Tags, (props: SVGProps) => JSX.Element>
export type TagIconMapWithNone = TagIconMap & {none: null}
export type TagIconMapWithAll = Record<FilterTags, {
  title: string;
  svg: (className: string) => JSX.Element
}>
