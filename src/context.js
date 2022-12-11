import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  showCart: false
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }
  value.removeFromCart = (itemID) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemID}})
  }
  value.increQuantity = (itemID) => {
    dispatch({type: 'INCRE_QUANTITY', payload: {id: itemID}})
  }
  value.decreQuantity = (itemID) => {
    dispatch({type: 'DECRE_QUANTITY', payload: {id: itemID}})
  }
  value.handleShowCart = () => {
    dispatch({type: 'HANDLE_SHOW_CART'})
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}