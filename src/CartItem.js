import React from 'react';



const CartItem = (props) => {
    
    const { product, handlerIncreaseQuantity, handlerDecreaseQuantity, handlerDeleteItem } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}
                    src={product.img}/>
            </div>

            <div className="right-block">
                <div style={{ fontSize: 25 }}>
                    {product.item}
                </div>
                <div style={{ color: 'grey' }}>
                    Rs {product.price}
                </div>
                <div style={{ color: 'grey' }}>
                    Qty : {product.quantity}
                </div>
                <div className="cart-item-actions">
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/992/992651.png"
                        alt="increase"
                        onClick={() => handlerIncreaseQuantity(product)}
                    />
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        alt="decrease"
                        onClick={() => handlerDecreaseQuantity(product)}
                    />
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                        alt="remove"
                        onClick={() => handlerDeleteItem(product)}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        backgroundColor: 'grey',
        borderRadius: 8

    }
}


export default CartItem;