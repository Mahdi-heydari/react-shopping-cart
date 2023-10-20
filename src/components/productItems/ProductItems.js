import formatCurrency from "../../utils/formatCurrency"
import "./index.css"

export default function ProductItems({product,addToCart}) {
  

  return (
    <li>
      <div className="product">
        <a href={`#${product._id}`}>
          <img src={product.image} alt={product.title}/>
          <p>{product.title}</p>
        </a>

        <div className="productPrice">
          <span>{formatCurrency(product.price)}</span>
          <button className="button primary" onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </li>
  )
}
