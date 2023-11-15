import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { OrderProvider } from './context/orderContext';
import orderStore from './store/order-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <OrderProvider value={orderStore}>
    <App />
  </OrderProvider>
);
