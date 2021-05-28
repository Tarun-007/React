import React from 'react';



class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            quantity: 1,
            item: 'Mobile Phone',
            img: ''
        }
    }

    increaseQuantity = () => {
        // if previous state not required use this
        // this.setState({
        //     quantity: this.state.quantity + 1
        // }, () => {
        //         console.log(this.state.quantity)
        // })
        

        //if previous state required use this
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity + 1
            }
        },
            () => {
                console.log(this.state.quantity)
        });
    
        
        
        
        

    
    }

    decreaseQuantity = () => {
        this.setState((prevState) => {
            if (prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            }
        })
    }

    render() {

        const { price, quantity, item, img } = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        {item}
                    </div>
                    <div style={{ color: 'grey' }}>
                        Rs {price}
                    </div>
                    <div style={{ color: 'grey' }}>
                        Qty : {quantity}
                    </div>
                    <div className="cart-item-actions">
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992651.png"
                            alt="increase"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            alt="decrease"
                            onClick = {this.decreaseQuantity.bind(this)}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            alt="remove"
                            // onClick = {this.delelt}
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