import { useContext } from "react";
import { shopContext } from "../context";

export default function CartItem(props) {
    const {id, name, price, quantity} = props
    const {incrementQuantity, decrementQuantity, deleteFromCart} = useContext(shopContext)
    return (
        <li className="collection-item">
            {name} x{quantity} = V-{price * quantity}
            <span className="secondary-content">
            <a class="waves-effect waves-light btn btnq" onClick={() => incrementQuantity({id})}>
                <i class="material-icons left">exposure_plus_1</i>add
            </a>
            <a class="waves-effect waves-light btn btnq" onClick={() => decrementQuantity({id})}>
                <i class="material-icons left">exposure_minus_1</i>remove
            </a>
                <i className="material-icons cart-del" onClick={() => deleteFromCart({id})}>delete_forever</i>
            </span>
        </li>
    );
}