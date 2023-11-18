import { Button } from '../../UI/button';
import classes from './header-section.module.scss';

export const HeaderSection = (): JSX.Element => {
  return (
    <header style={{maxWidth: '100%', display: 'flex'}}>

      <section className={classes['header-section__wrapper']}>
        <div className={classes['header-section__text-wrapper']}>
          <h1 className={classes['header-section__title']}>Пицца на заказ</h1>
          <p className={classes['header-section__subtitle']}>Бесплатная и быстрая доставка за час в любое удобное для вас время</p>
          <Button className={classes['header-section__order-button']} main uppercase>Выбрать пиццу</Button>
        </div>
        <div className={classes['header-section__image-wrapper']}>
          <img className={classes['header-section__image']} src="/header.png" alt="header" />
        </div>
      </section>
    </header>
  );
};
