import ProductItems from "../productItems/ProductItems";
import "./index.css"

export default function ProductsList({ productState }) {
  const { products, setProducts } = productState;

  return (
    <div>
      <ul className="productsList">
        {products.map((product) => (
          <ProductItems key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}
