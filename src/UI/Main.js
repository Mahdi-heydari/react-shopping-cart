import ProductsList from "../components/ProductsList/ProductsList";
import Cart from "../components/cart/Cart";
import Filter from "../components/filter/Filter";
import "./style Components/main/index.css";

export default function Main({ productState, sizeState, sortState, cartItemsState }) {
  const {cartItems, setCartItems} = cartItemsState;

  function removeFromCart(product){
    const cartProducts = cartItems.slice();
    const updateState = cartProducts.filter(cartProduct=> {
      if(cartProduct._id === product._id){cartProduct.count--}
      return cartProduct.count > 0 ;
    });
    setCartItems(updateState)
  }

  function addToCart(product){
    const cartProduct = cartItems.slice();
    let alreadyInCart = false;
    cartProduct.forEach(item => {
      if(item._id === product._id){
        alreadyInCart = true;
        setCartItems(prevState=> {
          const updateState =  prevState.map(item=> {
            const temp = {...item}
            if(temp._id === product._id) {
              temp.count++;
            }
            return temp
          })
          return updateState;
        })
      }
    });
    
    if(!alreadyInCart){
      setCartItems(prevState=> [...prevState, {...product, count:1}])    
    }

  }


  return (
    <main>
      <div className="content">
        <div className="main">
          <Filter productState={productState} sizeState={sizeState} sortState={sortState}  />
          <ProductsList productState={productState} addToCart={addToCart}/>
        </div>
        <div className="sidebar">
          <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </main>
  );
}
