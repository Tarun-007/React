import React from 'react';
import CartItem from './CartItem'


const  NavBar = (props)=>{
   
    return (
        <div style={styles.navBar}>
            <div style={styles.cart}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" />
                <span style={styles.cartCounter}>{props.itemCount}</span>
            </div>
        </div>
    );
            
        
}
export default NavBar;

const styles = {
    cartIcon: {
        position: "relative",
        height: 35,
        width: 35,
        top: "20px"

    },
    navBar: {
        height: "5rem",
        width: "100vw",
        backgroundColor: "#508694"
        // display: "flex"
        
    },
    cartCounter: {
        borderRadius: "50%",
        width: "15px",
        textAlign :"center",
        backgroundColor: "#54b0c7",
        padding: 5,
        left :"-8px",
        position: "relative"
    },
    cart: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center"
    }
}