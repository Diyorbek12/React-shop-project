import CartItem from "./CartItem";
import { useContext } from "react";
import { ShopContext } from "../context";

export default function GoodsList() {
  const { goods = [] } = useContext(ShopContext);
  
  
    if (!goods.length) {
      return <h3>Nothing found</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
               <CartItem key={item.id} {...item} />
            ))}
        </div>
    )
}
