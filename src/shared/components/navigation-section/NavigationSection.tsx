import { useState } from 'react';
import { BurgerButton } from '../../svg-icons/burger-button';
import { Logo } from '../../svg-icons/logo';
import { OrderIcon } from '../../svg-icons/order-icon';
import { Phone } from '../../svg-icons/phone';
import classes from './navigation-section.module.scss'
import cn from 'classnames';
import { Cross } from '../../svg-icons/cross';
import { useOrder } from '../../../context/orderContext';
import { observer } from 'mobx-react-lite';

const NavigationSection = observer((): JSX.Element => {
  
  const [isOpen, setIsOpen] = useState(false);
  const {order, switchOrder} = useOrder()
  const handleToggleAside = () => {
    setIsOpen(!isOpen)
  }
  const getOrderDescription = () => {
    if (!order.length) {
      return 'В корзине пусте, в животе урчит'
    }
    if (order.length === 1) {
      return `${order[0].name}`
    }
    if (order.length === 2) {
      return `${order[0].name}, ${order[1].name}`
    }
    return `${order[0].name} и ещё ${order.length-1} пиццы`
  }

  return (
    <>
    <section className={classes['navigation__wrapper']}>
      <div className={classes['navigation__logo-wrapper']}>
        <Logo className={classes['navigation__logo-icon']} fill='#000'/>
      </div>
      <nav >
        <ul className={classes['navigation__links-list']}>
          <li>
            <a href="#menu"><h4 className={classes['navigation__link-text']}>Меню</h4></a></li>
          <li>
            <a href="#about"><h4 className={classes['navigation__link-text']}>О нас</h4></a></li>
          <li>
            <a href="#contact"><h4 className={classes['navigation__link-text']}>Контакты</h4></a></li>
        </ul>
      </nav>
      <div className={classes['navigation__menu-panel-wrapper']}>
        <a href="tel:+79184326587">
          <div className={cn(classes['navigation__menu-panel-item'], classes['navigation__menu-panel-item_contacts'])}>
              <div className={classes['navigation__menu-panel-icon']}>
                <Phone/>
              </div>
              <div className={classes['navigation__menu-panel-text']}>
                <h4>+7 (918) 432-65-87</h4>
                <mark>Ежедневно с 9:00 до 23:00</mark>
              </div>
          </div>
        </a>
        <div onClick={switchOrder} className={cn(classes['navigation__menu-panel-item'], classes['navigation__menu-panel-item_order'])}>
          
          <div className={classes['navigation__menu-panel-icon']}>
            {!!order.length && <div className={classes['navigation__order-count']}>
              <span>{order.length}</span>
            </div>}
            <OrderIcon/>
          </div>
          <div className={classes['navigation__menu-panel-text']}>
            <h4>Ваш заказ</h4>
            <mark>{getOrderDescription()}</mark>
          </div>
        </div>
        <div className={classes['navigation__language-switch']}>
            <h4 className={classes['navigation__link-text']}>En</h4>
          </div>
          <button
            onClick={handleToggleAside}
            className={classes['navigation__burger-button']}
          >
            <BurgerButton />
          </button>
      </div>
    </section>
    <aside className={cn(classes['navigation__aside-menu'], {
      [classes['navigation__aside-menu_open']]: isOpen
    })}>
      <div className={classes['navigation__aside-menu-top']}>
        <div className={classes['navigation__aside-menu-logo-wrapper']}>
          <Logo className={classes['navigation__logo-icon']} fill='#fff'/>
        </div>
        <button
          onClick={handleToggleAside}
          className={classes['navigation__aside-close-button']}
        >
            <Cross/>
        </button>
      </div>
      <nav className={classes['navigation__aside-menu-links']}>
        <a onClick={handleToggleAside} href="#menu"><h4 className={classes['navigation__aside-link']}>Меню</h4></a>
        <hr/>
        <a onClick={handleToggleAside} href="#about"><h4 className={classes['navigation__aside-link']}>О нас</h4></a>
        <hr/>
        <a onClick={handleToggleAside} href="#contact"><h4 className={classes['navigation__aside-link']}>Контакты</h4></a>
      </nav>
        <div className={classes['navigation__aside-menu-contacts']}>
          <a href="tel:+79184326587">  
            <mark>Заказать по телефону</mark>
            <h4>+7 (918) 432-65-87</h4>
            <mark>Ежедневно с 9:00 до 23:00</mark>
          </a>
        </div>
    </aside>
    </>
  );
})

export default NavigationSection