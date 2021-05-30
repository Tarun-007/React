import React from 'react';
import CartItem from './CartItem'


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    quantity: 1,
                    item: 'Watch',
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    quantity: 4,
                    item: 'Mobile Phone',
                    img: '',
                    id: 2
                },
                {
                    price: 400,
                    quantity: 7,
                    item: 'Mobile case',
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handlerDeleteItem = (product) => {
        console.log('removing the item');
        const products = this.state.products;
        const index = this.state.products.indexOf(product);
        products.splice(index, 1);
        this.setState(() => {
            return {
                products : products
            }
        })
    }
    
    handlerIncreaseQuantity = (product) => {
        console.log("increasing quantity of product ", product)
        const products = this.state.products;
        const index = products.indexOf(product);
        products[index].quantity += 1
        this.setState(() => {
            return {
                products : products
            }
        })
    }
    handlerDecreaseQuantity = (product) => {
        console.log("increasing quantity of product ", product)
        const products = this.state.products;
        const index = products.indexOf(product);
        if (products[index].quantity > 0) {
            products[index].quantity -= 1
            this.setState(() => {
                return {
                    products: products
                }
            })
        }
    
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                        product={product}
                        key={product.id}
                            handlerIncreaseQuantity={this.handlerIncreaseQuantity}
                            handlerDecreaseQuantity={this.handlerDecreaseQuantity}
                            handlerDeleteItem = {this.handlerDeleteItem}
                        />
                    )
                })
                }
            </div>
        );
    }
}
export default Cart;