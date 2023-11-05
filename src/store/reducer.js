const appReducer = (prevState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...prevState, products: action.payload };
    }

    case "ADD_TO_CART": {
      let cartItems = [...prevState.cartItems];
      const cartItem = action.payload;
      const cartItemIndex = cartItems.findIndex(item=> item._id === cartItem._id);

      if(cartItemIndex === -1){
        cartItems.push({...cartItem, count:1})
      }else{
        let cartItemsClone = [...cartItems]
        cartItemsClone[cartItemIndex] = {...cartItems[cartItemIndex], count:cartItems[cartItemIndex].count + 1  };
        cartItems = cartItemsClone;
      };
      const temp = {...prevState, cartItems};
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return temp
      
    }
    
    case "REMOVE_FROM_CART": {
      let cartItems = [...prevState.cartItems];
      let cartItemsClone = [...cartItems]
      const cartItem = action.payload;
      const cartItemIndex = cartItems.findIndex(item=> item._id === cartItem._id);
      
      if(cartItemsClone[cartItemIndex].count > 0) {
        cartItemsClone[cartItemIndex] = {...cartItems[cartItemIndex], count:cartItems[cartItemIndex].count - 1  };
        cartItems = cartItemsClone;
      }
      if(cartItemsClone[cartItemIndex].count === 0){
        cartItemsClone.splice(cartItemsClone[cartItemIndex], 1)
        cartItems = cartItemsClone;
      }
      
      
      const temp = {...prevState, cartItems};
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return temp

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
      console.log("asagsg", products)
      if (action.payload === "") {
        return {
          ...prevState,
          size: action.payload,
          products: products,
        };
      } else {
        const updateProduct = products.filter(
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
