import ProductsList from "../components/ProductsList/ProductsList";
import Cart from "../components/cart/Cart";
import Filter from "../components/filter/Filter";
import "./style Components/main/index.css";

export default function Main() {
  return (
    <main>
      <div className="content">
        <div className="main">
          <Filter/>
          <ProductsList />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </main>
  );
}
