import { PizzaType } from "../types/pizza.types";

export const pizzasList: PizzaType[] = [
  {
    id:'1',
    image:'/pizza1.png', 
    name:'Итальянская', 
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', 
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium', 
    tags: ['spicy'] 
  },
  {
    id:'2', 
    image:'/pizza2.png', 
    name:'Маргарита', 
    description:'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    price: {
      large: 300,
      medium: 200,
      small: 100
    },  
    size: 'medium', 
    tags: ['beef'] 
  },
  {
    id:'3', 
    image:'/pizza3.png', 
    name:'Барбекю', 
    description:'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    price: {
      large: 300,
      medium: 200,
      small: 100
    },
    size: 'medium', 
    tags: ['beef'] 
  },
  {
    id:'4',
    image:'/pizza4.png',
    name:'Вегетарианская',
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium', 
    tags: ['vegan']
  },
  {
    id:'5',
    image:'/pizza5.png',
    name:'Мясная',
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['beef', 'spicy']
  },
  {
    id:'6',
    image:'/pizza6.png',
    name:'Овощная',
    description:'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['vegan']
  },
  {
    id:'7',
    image:'/pizza7.png',
    name:'Римская',
    description:'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['spicy']
  },
  {
    id:'8',
    image:'/pizza8.png',
    name:'С грибами',
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['cheese']
  },
  {
    id:'9',
    image:'/pizza9.png',
    name:'Сырная',
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['cheese']
  },
  {
    id:'10',
    image:'/pizza10.png',
    name:'Четыре сыра',
    description:'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['cheese']
  },
  {
    id:'11',
    image:'/pizza11.png',
    name:'Пепперони Фреш с томатами',
    description:'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['none'] },
  {
    id:'12',
    image:'/pizza12.png',
    name:'Ветчина и сыр',
    description:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    price: {
      large: 300,
      medium: 200,
      small: 100
    }, 
    size: 'medium',
    tags: ['beef']
  },
]