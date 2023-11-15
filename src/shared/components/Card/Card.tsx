import React, { useState } from 'react';
import cn from 'classnames'
import classes from './lib/styles/card.module.scss'
import { PizzaType, Tags } from '../../types/pizza.types';
import { tagsIcomsMapWithNone } from '../../constants/tags-icons-map';
import { Button } from '../../UI/button';
import { SizeToggler } from '../../UI/size-toggler';
import { Sizes } from '../../types/size-variable';
import { pizzaSizes } from '../../constants/pizza-sizes';
import { Size } from '../../svg-icons/size';
import { useOrder } from '../../../context/orderContext';

type CardProps = {
  pizza: PizzaType
};


export type PizzaToOrderType = {
  id: string;
  name: string;
  price: number,
  size: Sizes,
  count: number,
  image: string,
  tags: (Tags | 'none')[]
}

export const Card = ({ pizza }: CardProps): JSX.Element => {
  const order = useOrder();
  
  const [selectedSize, setSelectedSize] = useState<Sizes>('medium');
  
  const handleAddToOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pizzaToOrder = {
      id: `${pizza.id}.${selectedSize}`,
      name: pizza.name,
      price: pizza.price[selectedSize],
      size: selectedSize,
      image: pizza.image,
      tags: pizza.tags,
      count: 1,
    };
    
    order.addOrder(pizzaToOrder);
    console.log(pizza);
    console.log(selectedSize)
  }

  return (
    <div className={classes['card__wrapper']}>
      <div className={classes['card__tags-list']}>
          {pizza.tags.map(tag => 
            <div className={classes['card__tag-wrapper']}>
              {tag !== 'none' && tagsIcomsMapWithNone[tag]({className: classes['card__tag-wrapper']})}
            </div>)
          }
      </div>
      <div className={cn(classes['card__image-wrapper'])}>
        <Size className={classes['card__image-size']}/>
        <img className={cn(classes['card__image'], classes[`card__image_${selectedSize}`])} alt={pizza.name} src={pizza.image}/>
      </div>
      <div className={classes['card__bottom-wrapper']}>
        <div className={classes['card__description']}>
            <p className={classes['card__name']}>{pizza.name}</p>
            <p className={classes['card__compound']}>{pizza.description}</p>
        </div>
        <div className={classes['card__add-box']}>
          <SizeToggler options={pizzaSizes} selected={selectedSize} setSelected={setSelectedSize}/>
          <p className={classes['card__price']}>От {pizza.price[selectedSize]} руб.</p>
          <Button onClick={handleAddToOrder} className={classes['card__order-button']} uppercase>Заказать</Button>
          <Button onClick={handleAddToOrder} className={classes['card__order-button-mobile']}>
            От {pizza.price[selectedSize]} руб
          </Button>
        </div>
      </div>
    </div>
  );
};

