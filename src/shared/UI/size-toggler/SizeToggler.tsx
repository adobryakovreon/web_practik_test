import React, { useRef } from 'react';
import { SizeVariable, Sizes } from '../../types/size-variable';
import classes from './lib/styles/size-toggler.module.scss'
import cn from 'classnames'

type SizeTogglerProps = {
  options: SizeVariable[];
  selected: Sizes;
  setSelected: React.Dispatch<React.SetStateAction<Sizes>>
}

export const SizeToggler = ({ options, selected, setSelected }: SizeTogglerProps): JSX.Element => {
  
  const wrapperRef = useRef<HTMLUListElement>(null);

  const handleSizeItemClick = (size: Sizes, index: number) => {
    size !== selected && setSelected(size);
    wrapperRef.current?.style.setProperty("--bg-offset", `calc( var(--gap) * ${index+1} + ${index} * var(--width) )`);
  };

  return (
    <div className={classes['size-toggler__wrapper']}>
      <p className={classes['size-toggler__title']}>Размер, см:</p>
      <ul 
        className={classes['size-toggler__list']}
        ref={wrapperRef}
      >
        {options.map(({id, value}, index) => 
          <li 
            className={cn(classes['size-toggler__item'],{
              [classes['size-toggler__item_selected']]: id === selected
            })}
            onClick={() => handleSizeItemClick(id, index)} 
            key={id}
          >
            {value}
          </li>
        )}
      </ul>
    </div>
  );
};

