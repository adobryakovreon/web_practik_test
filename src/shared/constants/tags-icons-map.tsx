import { All } from "../svg-icons/all";
import { Beef } from "../svg-icons/beef";
import { Cheese } from "../svg-icons/cheese";
import { Spicy } from "../svg-icons/spicy";
import { Vegan } from "../svg-icons/vegan";
import { FilterTags } from "../types/pizza.types";
import { TagIconMap, TagIconMapWithNone, TagIconMapWithAll } from "../types/tags-icon-map.types";


export const pizzaFilters: FilterTags[] = ['all', 'spicy', 'beef', 'cheese', 'vegan']

export const IconMap: TagIconMap = {
  beef: (props) => Beef(props),
  cheese: (props) => Cheese(props),
  vegan: (props) => Vegan(props),
  spicy: (props) => Spicy(props),
}

export const tagsIcomsMapWithNone: TagIconMapWithNone = {
  ...IconMap,
  none: null,
}

export const tagsIcomsMapWithAll: TagIconMapWithAll = {
  beef: {
    title: 'Мясные',
    svg: (className) => <Beef className={className}/>
  },
  cheese: {
    title: 'Сырные',
    svg: (className) => <Cheese className={className}/>,
  },
  spicy: {
    title: 'Острые',
    svg: (className) => <Spicy className={className}/>,
  },
  vegan: {
    title: 'Веганские',
    svg: (className) => <Vegan className={className}/>
  },
  all: {
    title: 'Все',
    svg: (className) => <All className={className}/>
  },
}
