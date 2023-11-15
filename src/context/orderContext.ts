import { createContext, useContext } from "react";
import orderStore, { OrderStore } from "../store/order-store";

export const orderContext = createContext<OrderStore>(orderStore)
export const OrderProvider = orderContext.Provider

export const useOrder = () => {
  const order = useContext(orderContext);

  if (!order) {
    throw new Error('Error, order is outside of provider');
  }

  return order;
}