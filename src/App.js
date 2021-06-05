import './App.css';
import Cart from './Cart'
import NavBar from './Navbar'
import React, { cloneElement } from 'react';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();

  }


  componentDidMount() {
    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        this.setState(() => {
          return {
            products: products,
            loading: false
          }
        });
      })
  }

  handlerDeleteItem = (product) => {
    console.log('removing the item');
    this.db.collection('products').doc(product.id).delete();
  }

  handlerIncreaseQuantity = (product) => {
    console.log("increasing quantity of product ", product)
    this.db.collection('products').doc(product.id).update({
      quantity: product.quantity + 1
    })
  }

  handlerDecreaseQuantity = (product) => {
    console.log("decreasing quantity of product ", product)
    if (product.quantity > 0) {
      this.db.collection('products').doc(product.id).update({
        quantity: product.quantity - 1
      })
    }
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        item: 'washing machine',
        quantity: 3,
        price: 4000

      })
      .then(() => {
        console.log("added product successfully")
      }).catch(() => {
        console.log("product adding failed")
      })
  }



  render() {
    const { products, loading } = this.state;
    const cartCount = products.reduce((prevTot, item) => {
      return prevTot + item.quantity
    }, 0)
    const cartTotal = products.reduce((prevTot, item) => {
      return prevTot + item.quantity * item.price
    }, 0)
    console.log(products)
    return (
      <div className="App">
        <NavBar itemCount={cartCount} />
        <button onClick={this.addProduct}>Add product</button>
        <Cart products={products}
          handlerIncreaseQuantity={this.handlerIncreaseQuantity}
          handlerDecreaseQuantity={this.handlerDecreaseQuantity}
          handlerDeleteItem={this.handlerDeleteItem} />
        {loading && <h1 style={{ padding: 20 }}>loading items ...</h1>}
        <h2 style={{ padding: 20 }}>
          Cart Total = Rs {cartTotal}/-
        </h2>
      </div>
    );
  }
}

export default App;
