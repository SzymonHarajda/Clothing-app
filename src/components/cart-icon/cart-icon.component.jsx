import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contex';

import { ShopingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <CartIconContainer onClick={toggleIsOpen}>
      <ShopingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
