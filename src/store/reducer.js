const appReducer = (prevState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...prevState, products: action.payload };
    }

    case "ADD_TO_CART": {
      // let newCartItems = [];
      // const { cartItems } = prevState;
      // const cartProducts = cartItems.slice();
      // console.log("cartProducts", cartProducts);
      // console.log("action", action.payload);
      // let alreadyInCart = false;
      // newCartItems = cartProducts.map((item) => {
      //   if (item._id === action.payload._id) {
      //     alreadyInCart = true;
      //     const newCartItems = cartProducts.map((item) => {
      //       const temp = { ...item };
      //       if (temp._id === action.payload._id) {
      //         temp.count++;
      //       }
      //       console.log("temp", temp)
      //       return temp;
      //     });
      //     localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      //     console.log("newCartItems", newCartItems)
      //     console.log("prevState", prevState)
      //     return {  cartItems: [...newCartItems] };
      //   }
      // });

      // console.log("alreadyInCart", alreadyInCart)
      // console.log("cartProducts-2", cartProducts)
      // if (!alreadyInCart) {
      //   newCartItems = [...cartItems, { ...action.payload, count: 1 }];
      //   localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      // }
      // return { ...prevState, cartItems: newCartItems };
      let cartItems = [...prevState.cartItems];
      const cartItem = action.payload;
      const cartItemIndex = cartItems.findIndex(item=> item._id === cartItem._id);

      console.log("cartItems", cartItems)
      if(cartItemIndex === -1){
        console.log("true")
        cartItems.push({...cartItem, count:1})
      }else{
        console.log("false")
        console.log("count",cartItems[cartItemIndex].count)
        let cartItemsClone = [...cartItems]
        cartItemsClone[cartItemIndex].count+=1;
        console.log("count-2",cartItems[cartItemIndex].count)
        cartItems = cartItemsClone
      };
      console.log("cartItems-2", cartItems)
      const test = {...prevState, cartItems};
      console.log("test", test)
      return test

    }

    case "REMOVE_FROM_CART": {
      const { cartItems } = prevState;
      const cartProducts = cartItems.slice();
      const updateState = cartProducts.filter((cartProduct) => {
        if (cartProduct._id === action.payload._id) {
          cartProduct.count--;
        }
        return cartProduct.count > 0;
      });
      localStorage.setItem("cartItems", JSON.stringify(updateState));

      return { ...prevState, cartItems: updateState };
    }

    case "SORT_PRODUCTS": {
      const { products } = prevState;
      let updateProduct = products.slice();
      updateProduct = updateProduct.sort((a, b) => {
        //  value === "lowest" ? ((a.price < b.price)? 1 :-1 ) : value === "highest" ? ((a.price > b.price)? 1 : -1 ) : ((a._id > b._id)? 1 :-1 )
        if (action.payload === "Lowest") {
          return a.price < b.price ? 1 : -1;
        }
        if (action.payload === "Highest") {
          return a.price > b.price ? 1 : -1;
        }
        return a._id > b._id ? 1 : -1;
      });
      return { ...prevState, sort: action.payload, products: updateProduct };
    }

    case "FILTER_PRODUCTS": {
      const { products } = prevState;
      if (action.payload === "") {
        return {
          ...prevState,
          size: action.payload,
          products: prevState.products,
        };
      } else {
        const updateProduct = products.products.filter(
          (productItem) =>
            productItem.availableSizes.indexOf(action.payload) >= 0
        );
        return { ...prevState, size: action.payload, products: updateProduct };
      }
    }

    default: {
      return prevState;
    }
  }
};

export default appReducer;