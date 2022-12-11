import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import CratList from './CratList';
import GoodsList from './GoodsList';

import Loader from './Loader';

export default function Shop() {
  const { setGoods, loading, order, showCart } = useContext(ShopContext)



  useEffect(() => {
    fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
    })
    .then((response) => response.json())
    .then((data) => { 
      setGoods(data.featured)
    });
  }, []);

  return (
    <div className='container content'>
        {showCart && <CratList />}   
        <Cart quantity={order.length} />
        {loading ? <Loader /> : <GoodsList /> }
    </div>
  )
}