import CartItem from "./CartItem";

export default function CratList(props) {
    const { order, handleCartShow, incrementQuantity, decrementQuantity} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <div className="cart-l">
        <ul className="collection cart-list">
          <li className="collection-item active">
              Cart
          </li>
          {order.length ? order.map(item => {
            return <CartItem key={item.id} {...item} 
            deleteFromCart={props.deleteFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity} />
          }) : <li className="collection-item">Cart is empty</li>}
          <li className="collection-item active">
              Total cost: V-{totalPrice}
          </li>
          <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
        </ul> 
        </div>
    );
}