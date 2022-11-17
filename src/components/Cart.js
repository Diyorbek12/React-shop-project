import React from 'react';

export default function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props
    return (
        <div className='cart grey darken-1 white-text'>
            <i className='material-icons' onClick={handleCartShow}>add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}