import { useContext } from "react"
import { ShopContext } from "../context"

export default function Cart(props) {
  const { quantity = 0 } = props
  const { handleShowCart } = useContext(ShopContext)

  return (
    <div className="cart blue white-text" onClick={handleShowCart}>
        <i className="material-icons unselectable">shopping_cart</i>
        {quantity ? <span className={quantity > 9 ? 'cart-quantity pad'
        : 'cart-quantity'}>{quantity}</span> : null}
    </div>
  )
}