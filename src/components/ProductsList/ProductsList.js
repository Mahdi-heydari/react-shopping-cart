import EmptyPage from "../../UI/EmptyPage";
import { useAppContext } from "../../store";
import ProductItems from "../productItems/ProductItems";
import "./index.css";

export default function ProductsList() {
  const {dispatch,state} = useAppContext();
  const { products } = state;
  return (
    <div>
      <ul className="productsList">
        {Boolean(products.length) ? (
          products.map((product) => (
            <ProductItems key={product._id} product={product}/>
          ))
        ) : (
          <EmptyPage />
        )}
      </ul>
    </div>
  );
}
