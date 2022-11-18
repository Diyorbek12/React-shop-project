import ItemList from "./ItemList";
import { useContext } from 'react';
import { shopContext } from '../context';

export default function GoodsList() {
    const { goods = [] } = useContext(shopContext);

    if (!goods.length) {
        console.log(goods);
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <ItemList key={item.id} {...item} />
            ))}
        </div>
    );
}