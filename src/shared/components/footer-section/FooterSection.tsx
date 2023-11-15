import { Logo } from '../../svg-icons/logo';
import classes from './footer-section.module.scss'

export const FooterSection = (): JSX.Element => {
  return (
    <section className={classes['footer-section__wrapper']}>
        <div className={classes['footer-section__logo-contacts']}>
          <div className={classes['footer-section__logo']}>
            <Logo className={classes['footer-section__logo-icon']} fill={'#fff'}/>
          </div>
          <div className={classes['footer-section__contacts-wrapper']}>
            <h4>+7 (918) 432-65-87</h4>
            <mark>Ежедневно с 9:00 до 23:00</mark>
          </div>
        </div>
        <div className={classes['footer-section__policy']}>
          <a className={classes['footer-section__policy-link']} href="example.com">
            <mark>Политика конфиденциальности</mark>
          </a>
        </div>
    </section>
  );
};
