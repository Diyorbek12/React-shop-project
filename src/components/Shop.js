import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from '../config';
import Loader from "./Loader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CratList from "./CratList";
import { toast } from "react-toastify";
import {shopContext} from '../context';

function Shop() {
  const {setGoods, loading, order, showCart} = useContext(shopContext);
    
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    }).then((response) => response.json())
    .then((data) => {
    setGoods(data.featured)});
  }, []);

    return (
        <div className="container content">
          <Cart quantity={order.length} />
            {loading ? <Loader /> : <GoodsList />}
            {showCart && <CratList />}
        </div>
    );
}

export default Shop;