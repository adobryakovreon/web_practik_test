import React, { PropsWithChildren } from 'react';
import { PizzaType } from '../../types/pizza.types';
import classes from './menu-list.module.scss'
import { Card } from '../Card';
type MenuListProps = {
  list?: PizzaType[]
};

export const MenuList = ({ children }: PropsWithChildren<MenuListProps>): JSX.Element => {
  return (
    <div className={classes['menu-wrapper']}>
      {children}
    </div>
  );
};
