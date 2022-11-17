import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from '../config';
import Loader from "./Loader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CratList from "./CratList";
import { toast } from "react-toastify";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (itemIndex === index) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    toast.success('item added to cart')
  }
  const handleCartShow = () => {
      setShowCart(!showCart)
  }
  const deleteFromCart = (item) => {
    const newOrder = order.filter(orderItem => orderItem.id !== item.id)
    setOrder(newOrder)
    toast.error('item deleted from cart')
  }
  const incrementQuantity = (item) => {
    const newOrder = order.map(el => {
      if (el.id === item.id) {
        const newQ = el.quantity + 1
        return {
          ...el,
          quantity: newQ
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }
  const decrementQuantity = (item) => {
    const newOrder = order.map(el => {
      const newQ = el.quantity - 1
      if (el.id === item.id) {
        return {
          ...el,
          quantity: el.quantity > 1 ? newQ : 1
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }
    
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    }).then((response) => response.json())
    .then((data) => {
    data.featured && setGoods(data.featured) 
    setLoading(false)});
  }, []);

    return (
        <div className="container content">
          <Cart quantity={order.length} handleCartShow={handleCartShow}/>
            {loading ? <Loader /> : <GoodsList goods={goods} addToCart={addToCart} />}
            {showCart && <CratList 
            order={order} 
            handleCartShow={handleCartShow} 
            deleteFromCart={deleteFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity} />}
        </div>
    );
}

export default Shop;