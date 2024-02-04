import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';
import CheckoutItem from '../../components/checkout-item/chcekout-item.commponent';
import { CheckoutContainer, Header, Block, Total } from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Header>
        <Block as="span">Product</Block>
        <Block as="span">Description</Block>
        <Block as="span">Quantity</Block>
        <Block as="span">Price</Block>
        <Block as="span">Remove</Block>
      </Header>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
