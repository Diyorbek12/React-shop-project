import { useContext } from "react";
import { ShopContext } from "../context";

export default function ItemList(props) {
  const { removeFromCart, increQuantity, decreQuantity } = useContext(ShopContext)
  const { id, name, price, quantity } = props
  
  return (
    <li className="collection-item">
        <div className="col">
            <div className="col2">
              {name}  <span className="addRemove">
                <i className="material-icons btn-2" onClick={() => increQuantity(id)}>add</i>
              {quantity}
                <i className="material-icons btn-2" onClick={() => decreQuantity(id)}>remove</i></span>
                = V-{price * quantity}
            </div>
            <span className="secondary-content">
                <i className="material-icons red-text" onClick={() => removeFromCart(id)}>delete</i>
            </span>
        </div>
    </li>
  )
}