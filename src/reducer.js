import { toast } from "react-toastify";

export function reducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_CART': {  
    const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);
    let newOrder = null;
    if (itemIndex < 0) {
      const newItem = {
        ...payload,
        quantity: 1,
      }
      newOrder = [...state.order, newItem];
    } else {
      newOrder = state.order.map((orderItem, index) => {
        if (itemIndex === index) {
            
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      });
    }
     // toast.success('item added to cart');
    return {
        ...state,
        order: newOrder
    }
}
        case 'DECREMENT_QUANTITY': {
            return {
                ...state,
                order: state.order.map(el => {
      const newQ = el.quantity - 1
      if (el.id === payload.id) {
        return {
          ...el,
          quantity: el.quantity > 1 ? newQ : 1
        }
      } else {
        return el
      }
    })
  }
            }
        case 'INCREMENT_QUANTITY': {
            return {
                ...state,
                order: state.order.map(el => {
                if (el.id === payload.id) {
                const newQ = el.quantity + 1
                return {
                ...el,
               quantity: newQ
               }} else {return el}
               })}}
        case 'TOGGLE_CART': 
            return {
                ...state,
                showCart: !state.showCart
            }
        case 'DELETE_FROM_CART': 
            return {
                ...state,
                order: state.order.filter(orderItem => orderItem.id !== payload.id)
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }

        default:
            return false
    }
}