import './chcekout-cart.syles.scss';

const CheckoutCart = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CheckoutCart;
