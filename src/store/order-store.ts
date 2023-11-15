import { makeAutoObservable } from "mobx";
import { PizzaToOrderType } from "../shared/components/Card";

export class OrderStore {
  private _order: PizzaToOrderType[] = []
  private _openOrder: boolean = false

  constructor() {
    this._openOrder = false;
    makeAutoObservable(this)
  }

  public switchOrder = () => {
    this._openOrder = !this._openOrder
  }

  get orderPrice() {
    return this._order.reduce((acc, curr) => acc += curr.price*curr.count, 0)
  }

  get openOrder() {
    return this._openOrder
  }

  get order(): PizzaToOrderType[] {
    return this._order
  }

  public addOrder = (newPizza: PizzaToOrderType) => {
    const existedPizza = this._order.find(pizza => pizza.id === newPizza.id)
    if (existedPizza) {
      existedPizza.count += 1;
      return;
    }
    this.order.push(newPizza);
  }

  public togglePizza = (id: string, newCount: number) => {
    const existedPizza = this._order.find(pizza => pizza.id === id)
    if (existedPizza) {
      existedPizza.count = newCount;
      return; 
    }
  }


  public removePizza = (id: string) => {
    console.log(this._order)
    this._order = [...this._order.filter(pizza => pizza.id !== id)]
  }
}

const orderStore = new OrderStore();

export default orderStore;
