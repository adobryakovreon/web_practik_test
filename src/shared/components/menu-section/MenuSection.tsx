import { useMemo, useState } from 'react';
import { pizzasList } from '../../constants/pizzas-list.const';
import { pizzaFilters, tagsIcomsMapWithAll } from '../../constants/tags-icons-map';
import { FilterTags } from '../../types/pizza.types';
import { Card } from '../Card';
import { MenuList } from '../menu-list';
import classes from './menu-section.module.scss'
import cn from 'classnames';

export const MenuSection = (): JSX.Element => {

  const [selectedType, setSelectedType] = useState<FilterTags>('all')
  
  const filteredMenu = useMemo(() => {
    if (selectedType === 'all') {
      return pizzasList
    }
    return pizzasList.filter(pizza => pizza.tags.includes(selectedType))
  }, [selectedType]) 

  return (
    <section id='menu' className={classes['menu-section__wrapper']}>
      <div className={classes['menu-section__filters-wrapper']}>
        <h2>Выберите пиццу</h2>
        <ul className={classes['menu-section__filters-list']}>
          {pizzaFilters.map(filter =>
          <li
            onClick={() => setSelectedType(filter)}
            value={filter} 
            key={filter}
          >
            <div className={cn(classes['menu-section__filter-item-wrapper'], {
              [classes['menu-section__filter-item-wrapper_selected']]: filter === selectedType
            })}>
              <div className={classes['menu-section__filter-item-icon']}>
                {tagsIcomsMapWithAll[filter].svg(classes['menu-section__filter-item-svg'])}
              </div>
              <p className={classes['menu-section__filter-item-title']}>
              {tagsIcomsMapWithAll[filter].title}
              </p>
            </div>
          </li>)}
        </ul>
      </div>
      <MenuList>
        {filteredMenu.map(pizza => <Card pizza={pizza} key={pizza.id}/>)}
      </MenuList>
    </section>
  );
};

