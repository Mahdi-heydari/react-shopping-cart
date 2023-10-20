import CartItem from "../cartItem/CartItem";
import PurchaseInfo from "../purchaseInfo/PurchaseInfo";
import "./index.css";

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empaty 🤔</div>
      ) : (
        <div className="cart cart-header">
          you have {cartItems.length} in cart 😇
        </div>
      )}

      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} removeFromCart={removeFromCart} />
          ))}
        </ul>
      </div>
      
      {Boolean(cartItems.length) && <div className="cart">
        <PurchaseInfo cartItems={cartItems}/>
      </div>}

    </div>
  );
}
