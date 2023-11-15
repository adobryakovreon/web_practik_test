import classes from './news-section.module.scss';

export const NewsSection = (): JSX.Element => {
  return (
    <>
    <section className={classes['news-section__wrapper']}>
      <div className={classes['news-section__items-wrapper']}>
        <div id='first' className={classes['news-section__item']}>
          <div className={classes['news-section__image-wrapper']}>
            <img className={classes['news-section__image']} src="/event-1.png" alt="" />
          </div>
          <div className={classes['news-section__text-wrapper']}>
            <h4>Закажи 2 пиццы – 3-я в подарок</h4>
            <span>При заказе 2-х больших пицц – средняя пицца в подарок</span>
          </div>
        </div>
        <div id='second' className={classes['news-section__item']}>
          <div className={classes['news-section__image-wrapper']}>
            <img className={classes['news-section__image']} src="/event-2.png" alt="" />
          </div>
          <div className={classes['news-section__text-wrapper']}>
            <h4>Напиток в подарок</h4>
            <span>Скидка на заказ от 3 000 рублей + напиток в подарок</span>
          </div>
        </div>
        <div id='third' className={classes['news-section__item']}>
          <div className={classes['news-section__image-wrapper']}>
            <img className={classes['news-section__image']} src="/event-3.png" alt="" />
          </div>
          <div className={classes['news-section__text-wrapper']}>
            <h4>25% при первом заказе</h4>
            <span>Скидка новым клиентам!</span>
          </div>
        </div>
      </div>
      
    </section>
    <div className={classes['news-section__dots-wrapper']}>
        <a  href="#first">
          <span className={classes['news-section__dot-anchor']}></span>
        </a>
        <a className={classes['news-section__dot-anchor']} href="#second">
          <span className={classes['news-section__dot-anchor']}></span>
        </a>
        <a className={classes['news-section__dot-anchor']} href="#third">
          <span className={classes['news-section__dot-anchor']}></span>
        </a>
    </div>
    </>
  );
};
