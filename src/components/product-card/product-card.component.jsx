import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProducToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProducToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
