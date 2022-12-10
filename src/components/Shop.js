import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import CratList from './CratList';
import GoodsList from './GoodsList';
import { toast } from 'react-toastify';

import Loader from './Loader';

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const increQuantity = (itemID) => {
    const newOrder = order.map(orderItem => {
        if (itemID === orderItem.id) {
            const newQuantity = orderItem.quantity + 1
            return {
                ...orderItem,
                quantity: newQuantity
            }
        } else {
            return orderItem
        }
    });
    setOrder(newOrder)
  }

  const decreQuantity = (itemID) => {
    const newOrder = order.map(orderItem => {
        if (itemID === orderItem.id) {
            const newQuantity = orderItem.quantity - 1
            return {
                ...orderItem,
                quantity: orderItem.quantity >= 2 ? newQuantity : 1
            }
        } else {
            return orderItem
        }
    })
    setOrder(newOrder)
  }

  const removeFromCart = (itemID) => {
    const newOrder = order.filter(item => item.id !== itemID)
    setOrder(newOrder)
  }
  
  const handleShowCart = () => {
    setShowCart(!showCart)
    document.body.style = showCart ? 'overflow: auto' : 'overflow: hidden'
  }


  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if (itemIndex < 0) {
        const newItem = {
            ...item,
            quantity: 1
        }
        setOrder([...order, newItem])
    } else {
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return orderItem
            }
        });
        setOrder(newOrder)
    }
    toast.success('Item succesfully added to cart')
  }

  useEffect(() => {
    fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
    });
  }, []);

  return (
    <div className='container content'>
        {showCart && <CratList order={order} 
        handleShowCart={handleShowCart}
        removeFromCart={removeFromCart}
        increQuantity={increQuantity}
        decreQuantity={decreQuantity} />}   
        <Cart quantity={order.length} 
        handleShowCart={handleShowCart} />
      {loading ? <Loader /> : <GoodsList goods={goods} addToCart={addToCart} /> }
    </div>
  )
}
