import { useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import "./index.css"
import Form from "../form/Form";

export default function PurchaseInfo({cartItems}) {
  const [showCheckout, setShowCheckout] = useState(false) ;

  return (
    <div className={`${showCheckout && "show-form"} info`}>
      <div>
        total:{" "}
        {formatCurrency(cartItems.reduce((a,c)=> a + c.price * c.count, 0))}
      </div>
      <button onClick={()=> setShowCheckout(true)} className="button secondery">Proceed</button>

      {
        showCheckout && <div>
          <Form setShowCheckout={setShowCheckout}/>
        </div>
      }
    </div>
  )
}
