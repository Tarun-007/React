import './App.css';
import Cart from './Cart'
import NavBar from './Navbar'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state =  {
      products: [
        {
          price: 99,
          quantity: 1,
          item: 'Watch',
          img: 'https://www.cnet.com/a/img/carX4o7G-7MnP1LxSUs-aG92FLU=/1200x630/2018/03/23/e6c01cad-1c66-4410-8875-c6336ff3a117/fitbit-versa-5708.jpg',
          id: 1
        },
        {
          price: 999,
          quantity: 4,
          item: 'Mobile Phone',
          img: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Copy_of_Pixel_4a_Front__Back_2_DsEGUfI.max-1000x1000.jpg',
          id: 2
        },
        {
          price: 400,
          quantity: 7,
          item: 'Mobile case',
          img: 'https://m.media-amazon.com/images/I/A180WmyUl4L._AC_SS450_.jpg',
          id: 3
        }
      ]
    }
  }

   handlerDeleteItem = (product) => {
    console.log('removing the item');
    const products = this.state.products;
    const index = products.indexOf(product);
    products.splice(index, 1);
    this.setState(() => {
      return {
        products: products
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
        products: products
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
    const cartCount = products.reduce((prevTot,item) => {
      return prevTot + item.quantity
    }, 0)
    const cartTotal = products.reduce((prevTot, item) => {
      return prevTot + item.quantity * item.price
    },0)
    console.log(products)
    return (
      <div className="App">
        <NavBar itemCount={cartCount} />
        <Cart products={products}
          handlerIncreaseQuantity={this.handlerIncreaseQuantity}
          handlerDecreaseQuantity={this.handlerDecreaseQuantity}
          handlerDeleteItem={this.handlerDeleteItem} />
        <h2 style = {{padding:20}}>
          Cart Total = Rs {cartTotal}/-
        </h2>
      </div>


    );
  }
}

export default App;
