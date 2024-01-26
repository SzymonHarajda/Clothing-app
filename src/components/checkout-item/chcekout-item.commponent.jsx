import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contex';

import './chcekout-item.syles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const clearItemHander = () => clearItemFromCart(cartItem);
  const addQuantityHander = () => addItemToCart(cartItem);
  const decreaseQuantityHander = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityHander}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addQuantityHander}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHander}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
