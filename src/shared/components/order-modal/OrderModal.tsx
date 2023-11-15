import { useMemo, useState } from 'react';
import { useOrder } from '../../../context/orderContext';
import { Input } from '../../UI/input';
import { Cross } from '../../svg-icons/cross';
import { OrderItem } from '../order-item';
import classes from './order-modal.module.scss'
import { observer } from 'mobx-react-lite';
import { Button } from '../../UI/button';
import cn from 'classnames'
const OrderModal = observer((): JSX.Element => {
  const { order, removePizza, switchOrder, orderPrice } = useOrder();
  const handleRemoveFromOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    removePizza(event.currentTarget.value)
  }
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [payment, setPayment] = useState<'cash' | 'card'>('card')
  const nameValidation = useMemo(() => !name.length || /^[\sa-zA-Za-яА-Я]+$/.test(name), [name])
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value)
  }
  const handleChangeAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(event.currentTarget.value)
  }
  const handleSetPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.value === 'cash' || event.currentTarget.value === 'card') {
      setPayment(event.currentTarget.value);
    }
  }
  return (
    <div className={classes['modal__wrapper']}>
      <div className={classes['modal__content-wrapper']}>
        <button onClick={switchOrder} className={classes['modal__cross-wrapper']}>
          <Cross/>
        </button>
        <h3 className={classes['modal__title']}>Ваш заказ</h3>
        <div className={classes['modal__order-list']}>
          {order.length ? 
          order.map((pizza) => 
            // index<3 && 
            <OrderItem 
              handleRemoveFromOrder={handleRemoveFromOrder}
              pizza={pizza}
            />
          )
          : <h4>Заказ пуст</h4>}
        </div>
        <div className={classes['modal__total-price-wrapper']}>
          <h4 className={classes['modal__total-price-title']}>Сумма заказа: <span className={classes['modal__total-price']}>{orderPrice}</span>руб</h4>
        </div>
        <div className={classes['modal__contacts-form']}>
          <div>
              <h4 className={classes['modal__contacts-title']}>Контакты</h4>
              <div className={classes['modal__contacts-phone-wrapper']}>
                <div className={classes['modal__contacts-input-wrapper']}>
                  <Input 
                    errorMessage='Имя должно состоять из букв' 
                    error={!nameValidation} 
                    value={name} 
                    onChange={handleChangeName} 
                    // disabled 
                    placeholder='Ваше имя'
                    />
                </div>
                <div className={classes['modal__contacts-input-wrapper']}>
                  <Input 
                    value={phone} 
                    onChange={handleChangePhone} 
                    // disabled 
                    placeholder='Телефон'
                    />
                </div>
              </div>
              <div>
                <Input 
                  value={adress} 
                  onChange={handleChangeAdress} 
                  // disabled 
                  placeholder='Адрес доставки'
                  />
              </div>
            </div>
            <div>
              <h4 className={classes['modal__contacts-title']}>Способ оплаты</h4>
              <div className={classes['modal__ratio-box']}>
                <input
                  className={classes['modal__ratio-input']}
                  checked={payment === 'cash'} 
                  onChange={handleSetPayment} 
                  type="radio" 
                  id="kraken" 
                  value="cash" 
                  />
                <label 
                  className={cn(classes['modal__payment-label'], {
                    [classes['modal__payment-label_selected']]: payment === 'cash'
                  })}
                  htmlFor="kraken"
                >
                  Оплата наличными или картой курьеру
                </label>
              </div>
              <div>
                <input 
                  className={classes['modal__ratio-input']}
                  checked={payment === 'card'} 
                  onChange={handleSetPayment} 
                  type="radio" 
                  id="sasquatch" 
                  value="card" 
                  />
                <label 
                  className={cn({
                    [classes['modal__payment-label_selected']]: payment === 'card'
                  },classes['modal__payment-label'])}
                  htmlFor="sasquatch"
                >
                  Оплата картой онлайн на сайте
                </label>
              </div>
              
            </div>
            <div className={classes['modal__order-wrapper']}>
              <Button disabled={!order.length} uppercase>Оформить заказ</Button>
              <mark>Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности</mark>
            </div>
        </div>
      </div>
    </div>
  );
})

export default OrderModal