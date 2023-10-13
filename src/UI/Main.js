import ProductsList from "../components/ProductsList/ProductsList"
import "./style Components/main/index.css"

export default function Main({productState,sizeState,sortState}) {
  return (
    <main>
      <div className="content">
        <div className="main">
          <ProductsList productState={productState} />
        </div>
        <div className="sidebar"></div>
      </div>
    </main>
  )
}
