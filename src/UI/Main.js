import ProductsList from "../components/ProductsList/ProductsList";
import Filter from "../components/filter/Filter";
import "./style Components/main/index.css";

export default function Main({ productState, sizeState, sortState }) {
  return (
    <main>
      <div className="content">
        <div className="main">
          <Filter productState={productState} sizeState={sizeState} sortState={sortState}  />
          <ProductsList productState={productState}/>
        </div>
        <div className="sidebar"></div>
      </div>
    </main>
  );
}
