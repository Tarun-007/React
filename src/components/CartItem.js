import React from 'react';
import '../index.css';



class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                </div>
                <div className="right-block">
                    <div>
                        Phone
                    </div>
                    <div>
                        Rs 999
                    </div>
                    <div>
                        quantity : 1
                    </div>
                </div>


            </div>
        )
    }
}


export default CartItem;