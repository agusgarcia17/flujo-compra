import React, { useState } from 'react'; 
import { AppProvider } from './contexto/AppContext';
import { ProductProvider } from './contexto/ProductContext';
import Nav from "./components/Nav";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import flores from "./flores.json"

function App() {
  
  const [showCart, setShowCart] = useState(false) 
  const [cart, setCart] = useState([])
  const [subTotal, setSubTotal] = useState(0) 

  function addToCart(name, price){

    const item = { name, price }
  
    setCart((prevState => [
      ...prevState,
      item
    ]))
 

    setSubTotal((prevState)=> prevState + price )
  
  }
  
  function handleCarrito(){ 
    // showCart ? setShowCart(false) : setShowCart(true) 
    setShowCart(prevState => !prevState)
  } 

  let appData = {
    showCart, 
    handleCarrito,
    
  }

  
  let productData = {
    flores,
    cart,
    subTotal,  
    addToCart,
  }

  return (

    <AppProvider value={appData}>
      <div className="mainContainer">
        <Nav/>
        <ProductProvider value={productData}> 
          <Productos/>
          <Carrito/>
        </ProductProvider>
      </div>
    </AppProvider>
   
    
  );
}

export default App;
