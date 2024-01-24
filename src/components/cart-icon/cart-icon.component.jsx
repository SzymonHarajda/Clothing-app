import { useContext } from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import { DropdownContext } from "../../contexts/dropdown.contex";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
