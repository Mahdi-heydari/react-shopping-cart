import formatCurrency from "../../utils/formatCurrency";
import "./index.css"

export default function PurchaseInfo({cartItems}) {
  return (
    <div className="info">
      <div>
        total:{" "}
        {formatCurrency(cartItems.reduce((a,c)=> a + c.price * c.count, 0))}
      </div>
      <button className="button secondery">Proceed</button>
    </div>
  )
}
