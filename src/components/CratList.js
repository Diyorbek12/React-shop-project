import ItemList from "./ItemList"

export default function CratList(props) {
const {order, handleShowCart} = props 

const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
}, 0)

  return (
    <div className="cart-l">
    <ul className="collection cart-list">
      <li className="collection-item active light-blue">
        Cart
      </li>
      {order.length ? order.map(item => {
        return <ItemList key={item.id} {...item} 
        removeFromCart={props.removeFromCart}
        increQuantity={props.increQuantity}
        decreQuantity={props.decreQuantity} />
      }) : <li>empty</li>}
      <li className="collection-item active light-blue">
        Total Price: <b>V</b>-{totalPrice}
      </li>
      <i className="material-icons cart-close unselectable" onClick={handleShowCart}>close</i>
    </ul>        
    </div>
  )
}