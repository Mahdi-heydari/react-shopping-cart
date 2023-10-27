import { useState } from "react";
import AppLayout from "./components/appLayout/AppLayout";
import data from "./data/data.json"

export default function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) ?JSON.parse(localStorage.getItem("cartItems")) : []);

  const productState = {products,setProducts}
  const sizeState = {size, setSize}
  const sortState = {sort, setSort}
  const cartItemsState = {cartItems, setCartItems}

  return (
    <>
      <AppLayout productState={productState} cartItemsState={cartItemsState}  sizeState={sizeState} sortState={sortState}  />
    </>
  )
}
