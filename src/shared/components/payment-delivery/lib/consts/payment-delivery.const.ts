import { Headphones } from "../../../../svg-icons/headphones";
import { Moped } from "../../../../svg-icons/moped";
import Terminal from "../../../../svg-icons/terminal/Terminal";

export const paymentDeliveryData = {
  order: {
    title: 'Заказ',
    text: 'После оформления заказа мы свяжемся с вами для уточнения деталей.',
    icon: Headphones
  },
  delivery: {
    title: 'Доставка курьером',
    text: 'Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.',
    icon: Moped
  },
  payment: {
    title: 'Оплата',
    text: 'Оплатить можно наличными или картой курьеру. И золотом тоже можно.',
    icon: Terminal
  },
}