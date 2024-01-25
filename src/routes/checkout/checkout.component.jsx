import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';
import CheckoutCart from '../../components/checkout-cart/chcekout-cart.commponent';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="products-checkout-container">
      {cartItems.map(cartItem => (
        <CheckoutCart key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
