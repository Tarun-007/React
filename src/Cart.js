import CartItem from './CartItem'


const Cart = (props) => {

    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        handlerIncreaseQuantity={props.handlerIncreaseQuantity}
                        handlerDecreaseQuantity={props.handlerDecreaseQuantity}
                        handlerDeleteItem={props.handlerDeleteItem}
                    />
                )
            })
            }
        </div>
    );
}
export default Cart;