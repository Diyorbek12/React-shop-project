export default function ItemList(props) {
    const {id, name, price, quantity, removeFromCart, increQuantity, decreQuantity} = props
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