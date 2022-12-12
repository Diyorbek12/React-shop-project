import { useContext } from "react";
import { ShopContext } from '../context';

export default function CartItem(props) {
  const { id, name, description, price, full_background } = props
  const { addToCart } = useContext(ShopContext)

  return (
    <div className='card' id={id}>
        <div className='card-image'>
            <img src={full_background} alt={name} /> 
        </div>
        <div className='card-content'>
           <span className='card-title'>{name}</span>
           <p>{description}</p>
        </div>
        <div className='card-action'>
           <button className='btn-buy unselectable' onClick={() => addToCart({id, name, price})}>Buy</button>
           <span className='right'>V-{price}</span>
        </div>
    </div>
  )
}