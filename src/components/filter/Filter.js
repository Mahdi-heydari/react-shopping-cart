import "./index.css";
import data from "../../data/data.json";

export default function Filter({ productState, sizeState, sortState }) {
  const { products, setProducts } = productState;
  const { size, setSize } = sizeState;
  const { sort, setSort } = sortState;


   // func for sorting products
   function sortProducts(value) {
    let updateProduct=products.slice();
        updateProduct = updateProduct.sort((a,b)=> (
           value === "lowest" ? ((a.price < b.price)? 1 :-1 ) : value === "highest" ? ((a.price > b.price)? 1 :11 ) : ((a._id > b._id)? 1 :-1 )
           ))
        setSort(value)
        setProducts(updateProduct);
    }

  // func for filtering products
  function filterProducts(value) {
    // debugger
    if (value === "") {
      setSize(value);
      setProducts(data.products);
    } else {
      const updateProduct = data.products.filter(
        (productItem) => productItem.availableSizes.indexOf(value) >= 0
      );
      setSize(value);
      setProducts(updateProduct);
    }
  }

  return (
    <div className="filter">
      <div className="filter-result">{products.length} Products</div>
      <div className="filter-sort">
        order{" "}
        <select value={sort} onChange={(e) => sortProducts(e.target.value)}>
          <option>Latest</option>
          <option className="lowest">Lowest</option>
          <option className="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        filter{" "}
        <select value={size} onChange={(e) => filterProducts(e.target.value)}>
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
