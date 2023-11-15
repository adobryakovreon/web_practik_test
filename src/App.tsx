import '../src/shared/styles/normalize.scss';
import './shared/styles/variables.scss'
import { MenuSection } from './shared/components/menu-section';
import { PaymentDelivery } from './shared/components/payment-delivery';
import { AboutSection } from './shared/components/about-section';
import { InstSection } from './shared/components/inst-section';
import { FooterSection } from './shared/components/footer-section/FooterSection';
import { NewsSection } from './shared/components/news-section';
import { HeaderSection } from './shared/components/header-section';
import NavigationSection from './shared/components/navigation-section';
import OrderModal from './shared/components/order-modal/OrderModal';
import { useOrder } from './context/orderContext';
import { observer } from 'mobx-react-lite';

export const App = observer(() => {
  const { openOrder } = useOrder()
  console.log(openOrder)
  return (
    <>
      <NavigationSection />
      <HeaderSection/>
      <NewsSection/>
      <MenuSection/>
      <PaymentDelivery/>
      <AboutSection/>
      <InstSection/>
      <FooterSection/>
      {openOrder && <OrderModal/>}
    </>
  );
})


