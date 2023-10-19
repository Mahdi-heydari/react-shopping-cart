import { useState } from "react";
import AppLayout from "./components/appLayout/AppLayout";
import data from "./data/data.json"

export default function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const productState = {products,setProducts}
  const sizeState = {size, setSize}
  const sortState = {sort, setSort}

  return (
    <>
      <AppLayout productState={productState}  sizeState={sizeState} sortState={sortState}  />
    </>
  )
}
