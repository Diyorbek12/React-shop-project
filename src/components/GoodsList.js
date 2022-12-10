import CartItem from "./CartItem";

export default function GoodsList(props) {
  const { goods = [], addToCart } = props;
  
  
    if (!goods.length) {
      return <h3>Nothing found</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
               <CartItem key={item.id} {...item} addToCart={addToCart} />
            ))}
        </div>
    )
}
