import ProductsList from "../components/ProductsList/ProductsList";
import Cart from "../components/cart/Cart";
import Filter from "../components/filter/Filter";
import "./style Components/main/index.css";

export default function Main({
  productState,
  sizeState,
  sortState,
  cartItemsState,
}) {
  const { cartItems, setCartItems } = cartItemsState;

  function removeFromCart(product) {
    const cartProducts = cartItems.slice();
    const updateState = cartProducts.filter((cartProduct) => {
      if (cartProduct._id === product._id) {
        cartProduct.count--;
      }
      return cartProduct.count > 0;
    });
    setCartItems(updateState);
    localStorage.setItem("cartItems", JSON.stringify(updateState));
  }

  function addToCart(product) {
    const cartProducts = cartItems.slice();
    let alreadyInCart = false;
    cartProducts.forEach((item) => {
      if (item._id === product._id) {
        alreadyInCart = true;
        const newCartItems = cartItems.map((item) => {
          const temp = { ...item };
          if (temp._id === product._id) {
            temp.count++;
          }
          return temp;
        });
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      }
    });

    if(!alreadyInCart) {
      const newCartItems = [...cartItems, { ...product, count: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  }

  return (
    <main>
      <div className="content">
        <div className="main">
          <Filter
            productState={productState}
            sizeState={sizeState}
            sortState={sortState}
          />
          <ProductsList productState={productState} addToCart={addToCart} />
        </div>
        <div className="sidebar">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </main>
  );
}
