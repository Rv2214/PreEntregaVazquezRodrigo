import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfJGmxAAZP091BkoFufYYWf7-oRFxmVj8",
  authDomain: "rv-comers.firebaseapp.com",
  projectId: "rv-comers",
  storageBucket: "rv-comers.appspot.com",
  messagingSenderId: "513353038708",
  appId: "1:513353038708:web:3e873f12710604b3b2ca21"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
