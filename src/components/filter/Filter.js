import "./index.css";
import { useAppContext } from "../../store";

export default function Filter() {
  const { dispatch, state } = useAppContext();
  const { sort, products, size } = state;

  return (
    <div className="filter">
      <div className="filter-result">{products.length} Products</div>
      <div className="filter-sort">
        order{" "}
        <select value={sort} onChange={(e) => dispatch({ type: "SORT_PRODUCTS", payload: e.target.value })}>
          <option>Latest</option>
          <option className="lowest">Lowest</option>
          <option className="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        filter{" "}
        <select value={size} onChange={(e) => dispatch({ type: "FILTER_PRODUCTS", payload: e.target.value })}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}
