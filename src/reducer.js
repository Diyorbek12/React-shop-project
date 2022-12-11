import { toast } from "react-toastify";

export function reducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)
            
            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = { ...payload, quantity: 1 }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (itemIndex === index) {
                        return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                        }
                    } else { return orderItem }
                })
            }
            toast.success('item successfully added to cart')
            return {
                ...state,
                order: newOrder
            }
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        }
        case 'INCRE_QUANTITY': {
            return {
                ...state,
                order: state.order.map(orderItem => {
                    if (payload.id === orderItem.id) {
                        const newQuantity = orderItem.quantity + 1
                        return {
                            ...orderItem,
                            quantity: newQuantity
                        }
                    } else {
                        return orderItem
                    }
                })
            }
        }
        case 'DECRE_QUANTITY': {
            return {
                ...state,
                order: state.order.map(orderItem => {
                    if (payload.id === orderItem.id) {
                        const newQuantity = orderItem.quantity - 1
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity >= 2 ? newQuantity : 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }
        }
        case 'HANDLE_SHOW_CART': {
            document.body.style = state.showCart ? 'overflow: auto' : 'overflow: hidden'
            return {
                ...state,
                showCart: !state.showCart
            }
        }

        default:
            return state
    }
}