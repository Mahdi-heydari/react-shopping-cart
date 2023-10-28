import { useAppContext } from "../../store";
import formatCurrency from "../../utils/formatCurrency";
import "./index.css";

export default function CartItem({ cartItem}) {
  const {dispatch, state} = useAppContext();

  return (
    <li>
      <div>
        <img src={cartItem.image} alt={cartItem.title} />
      </div>

      <div>
        <div>{cartItem.title}</div>
        <div className="right">
            {formatCurrency(cartItem.price)} x{cartItem.count} {" "}
          <button className="button primary-sm" onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: cartItem })}>Remove</button>
        </div>
      </div>
    </li>
  );
}
