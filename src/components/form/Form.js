import { useState } from "react";
import "./index.css";

export default function Form({setShowCheckout}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");

  function checkoutHandler() {
    alert(`Thank you for trusting us.. Your order will reach you in ${Math.round(Math.random()*10)} days`)

    setEmail("")
    setName("")
    setAddres("")
    setShowCheckout(false)
  }

  return (
    <form onSubmit={checkoutHandler}>
      <ul className="form-container">
        <li>
          <label>Email:</label>
          <input    
            type="text"
            placeholder="youre Email.."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>

        <li>
          <label>Name:</label>
          <input
            type="text"
            placeholder="youre Name.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>

        <li>
          <label>Addres: </label>
          <input
            type="text"
            placeholder="youre Addres.."
            required
            value={addres}
            onChange={(e) => setAddres(e.target.value)}
          />
        </li>
        <li>
            <button type="submit" className="button secondery">Checkout</button>
        </li>
      </ul>
    </form>
  );
}
