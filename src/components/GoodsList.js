import ItemList from "./ItemList";

export default function GoodsList(props) {
    const { goods = [], addToCart } = props;

    if (!goods.length) {
        console.log(goods);
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <ItemList key={item.id} {...item} addToCart={addToCart} />
            ))}
        </div>
    );
}