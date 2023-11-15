import React from 'react';
import { Moped } from '../../../../svg-icons/moped';
import classes from './payment-delivery-card.module.scss'

type PaymentDeliveryCardProps = {
  title?: string;
  text?: string;
  icon: JSX.Element;
};

export const PaymentDeliveryCard = ({ icon, text, title }: PaymentDeliveryCardProps): JSX.Element => {
  return (
    <div className={classes['pay-dev__card-wrapper']}>
      <div className={classes['pay-dev__card-icon-wrapper']}>
        {icon}
      </div>
      <div className={classes['pay-dev__card-text-wrapper']}>
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
};
