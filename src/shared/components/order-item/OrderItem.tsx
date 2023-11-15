import cn from 'classnames'
import classes from './order-item.module.scss'

import { PizzaToOrderType } from '../Card';
import { tagsIcomsMapWithNone } from '../../constants/tags-icons-map';
import { Plus } from '../../svg-icons/plus';
import { Minus } from '../../svg-icons/minus';
import React, { useState } from 'react';
import { Cross } from '../../svg-icons/cross';
import { useOrder } from '../../../context/orderContext';
import { sizeText } from '../../constants/pizza-sizes';

type OrderItemProps = {
  pizza: PizzaToOrderType,
  handleRemoveFromOrder: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const OrderItem = ({ pizza, handleRemoveFromOrder }: OrderItemProps): JSX.Element => {
  const { togglePizza } = useOrder()
  
  const [count, setCount] = useState(pizza.count)


  const handleInputCount = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const newCount = +event.currentTarget.value;
    if (newCount >=1) {
      togglePizza(pizza.id, +event.currentTarget.value)
      setCount(+event.currentTarget.value)
    } 
  }
  
  const handleClickCount = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    togglePizza(pizza.id, count + +event.currentTarget.value)
    setCount(count + +event.currentTarget.value)
  }
  return (
    <div className={classes['order-item__wrapper']}>
      <div className={classes['order-item__tags-list']}>
        {pizza.tags.map(tag => 
          <div className={classes['order-item__tag-wrapper']}>
            {tag !== 'none' && tagsIcomsMapWithNone[tag]({className: classes['order-item__tag-icon']})}
          </div>)}
      </div>
      <div className={classes['order-item__image-wrapper']}>
        <img 
          className={cn(classes['order-item-image'], {
            [classes['order-item__image_large']]: pizza.size === 'large',
            [classes['order-item__image_small']]: pizza.size === 'small',
          })}
          src={pizza.image} 
          alt={pizza.name} 
        />
      </div>
      <div className={classes['order-item__description']}>
        <h4 className={classes['order-item__name']}>{pizza.name}</h4>
        <p className={classes['order-item__size']}>{sizeText[pizza.size]}</p>
      </div>
      <div className={classes['order-item__counter']}>
        <button
          value={-1}
          onClick={handleClickCount}
          disabled={count === 1} 
          className={cn(classes['order-item__count-button'], classes['order-item__count-button_decrease'])}
        >
          <Minus/>
        </button>
        <input
          min={1} 
          className={classes['order-item__count']} 
          type="number" 
          value={count}
          onChange={handleInputCount}
        />
        <button 
          value={1}
          onClick={handleClickCount}
          className={cn(classes['order-item__count-button'], classes['order-item__count-button_increase'])}
        >
          <Plus/>
        </button>
      </div>
      <div className={classes['order-item__price']}>
        <h4>{pizza.price*pizza.count} руб.</h4>
      </div>
      <button value={pizza.id} onClick={handleRemoveFromOrder} className={classes['order-item__delete-button']}>
        <Cross className={classes['order-item__delete-icon']}/>
      </button>
    </div>
  );
};
