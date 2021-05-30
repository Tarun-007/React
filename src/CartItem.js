import React from 'react';



class CartItem extends React.Component {


    render() {

        const { product, handlerIncreaseQuantity, handlerDecreaseQuantity, handlerDeleteItem } = this.props;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        {product.name}
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
                            onClick={()=>handlerIncreaseQuantity(product)}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            alt="decrease"
                            onClick = {()=>handlerDecreaseQuantity(product)}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            alt="remove"
                             onClick = {()=>handlerDeleteItem(product)}
                        />
                    </div>
                </div>
            </div>
        )
    }
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