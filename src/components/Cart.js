import { useContext } from 'react';
import { shopContext } from '../context';

export default function Cart(props) {
    const { order, handleCartShow = Function.prototype } = useContext(shopContext);
    const quantity = order.length
    return (
        <div className='cart grey darken-1 white-text'>
            <i className='material-icons' onClick={handleCartShow}>add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}