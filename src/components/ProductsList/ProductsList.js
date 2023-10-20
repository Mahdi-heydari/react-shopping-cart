import EmptyPage from "../../UI/EmptyPage";
import ProductItems from "../productItems/ProductItems";
import "./index.css";

export default function ProductsList({ productState, addToCart }) {
  const { products, setProducts } = productState;
  return (
    <div>
      <ul className="productsList">
        {Boolean(products.length) ? (
          products.map((product) => (
            <ProductItems key={product._id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <EmptyPage />
        )}
      </ul>
    </div>
  );
}
