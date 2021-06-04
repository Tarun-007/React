import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCar-esosBENWYKCCYNVBxNkgXEr-G_6zI",
  authDomain: "cart-f2831.firebaseapp.com",
  projectId: "cart-f2831",
  storageBucket: "cart-f2831.appspot.com",
  messagingSenderId: "101779268311",
  appId: "1:101779268311:web:26839fb3e3416fb2d80692"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
