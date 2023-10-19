import EmptyPage from "../../UI/EmptyPage";
import ProductItems from "../productItems/ProductItems";
import "./index.css";

export default function ProductsList({ productState }) {
  const { products, setProducts } = productState;
  console.log(Boolean(products.length));
  return (
    <div>
      <ul className="productsList">
        {Boolean(products.length) ? (
          products.map((product) => (
            <ProductItems key={product._id} product={product} />
          ))
        ) : (
          <EmptyPage />
        )}
      </ul>
    </div>
  );
}
