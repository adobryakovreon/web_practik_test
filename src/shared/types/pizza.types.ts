import { Sizes } from "./size-variable";


export type Price = {
  [key in Sizes]: number
}

export type Tags = 'spicy' | 'beef' | 'vegan' | 'cheese'

export type FilterTags = Tags | 'all'

export type PizzaType = {
  id: string;
  image: string;  
  name: string;
  tags: (Tags | 'none')[];
  description: string;
  size: Sizes;
  price: Price ;
}