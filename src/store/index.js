import { createContext, useCallback, useContext, useReducer } from "react";
import appReducer from "./reducer";

const appContext = createContext();

const initialState = {
  products: [],
  size: "",
  sort:"",
  cartItems: JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

};

function WithAppContext({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const appDispatch = useCallback(
    (action) => {
      console.log("action", action)
      if (typeof action === "function") {
        return action(dispatch);
      }
      dispatch(action);
    },
    [dispatch]
  );

  return (
    <appContext.Provider value={{  state, dispatch: appDispatch }}>
      {children}
    </appContext.Provider>
  );
}

const useAppContext = () => useContext(appContext);

export { WithAppContext, useAppContext };
