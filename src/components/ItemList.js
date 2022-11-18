import { useContext } from 'react';
import { shopContext } from '../context';

export default function ItemList(props) {
    const {id, name, describtion, price, full_background, } = props;
    const {addToCart} = useContext(shopContext);
    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
            <span className='card-title'>{name}</span>
                <p>{describtion}</p>
            </div>
            <div className='card-action'>
                <button className='btn' onClick={() => addToCart({id, name, price})} >Buy</button>
                <span className='right'>V-{price}</span>
            </div>
        </div>
    );
}