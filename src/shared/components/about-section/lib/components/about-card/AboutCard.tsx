import React from 'react';
import classes from './about-card.module.scss';
import cn from 'classnames'

type AboutCardProps = {
  imgSrc: string;
  imgClassName?: string;
  title: string;
  text: string;
  reversed?: boolean
}

export const AboutCard = ({ imgSrc, imgClassName, title, text, reversed }: AboutCardProps): JSX.Element => {
  return (
    <div className={cn(classes['about-card__wrapper'], {
      [classes['about-card__wrapper_reversed']]: reversed
    })}>
      <div className={classes['about-card__image-wrapper']}>
        <img className={classes['about-card__image']} src={imgSrc} alt={imgSrc} />
      </div>
      <div className={classes['about-card__text-wrapper']}>
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
};
