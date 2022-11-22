import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const shopContext = createContext();

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
    value.incrementQuantity = (item) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: item})
    }
    value.decrementQuantity = (item) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: item})
    }
    value.handleCartShow = () => {
        dispatch({type: 'TOGGLE_CART'})
    }
    value.deleteFromCart = (item) => {
        dispatch({type: 'DELETE_FROM_CART', payload: item})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    } 

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}