import { paymentDeliveryData } from "./lib/consts/payment-delivery.const";
import { PaymentDeliveryCard } from "./lib/payment-delivery-card";
import classes from "./lib/styles/payment-delivery.module.scss";


export const PaymentDelivery = (): JSX.Element => {
  return (
    <section className={classes['pay-del__section']}>
      <h2>Доставка и оплата</h2>
      <div className={classes['pay-del__card-wrapper']}>
        <PaymentDeliveryCard
          title={paymentDeliveryData.order.title}
          text={paymentDeliveryData.order.text} 
          icon={paymentDeliveryData.order.icon({className: classes['pay-del__svg-icon']})}
        />
        <PaymentDeliveryCard
          title={paymentDeliveryData.delivery.title}
          text={paymentDeliveryData.delivery.text} 
          icon={paymentDeliveryData.delivery.icon({className: classes['pay-del__svg-icon']})}
        />
        <PaymentDeliveryCard
          title={paymentDeliveryData.payment.title}
          text={paymentDeliveryData.payment.text} 
          icon={paymentDeliveryData.payment.icon({className: classes['pay-del__svg-icon']})}
        />
      </div>
    </section>
  );
};
