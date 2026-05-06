// Api Methods = Get, Post, Put, Patch, Delete

import './App.css';
import axios from "axios";
import { useState, useEffect,} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Products from './components/Products';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async() => {

    try{
      const apiCall = await axios.get('https://fakestoreapi.com/products');
      setProducts(apiCall.data) 
    }

    catch(error){
      console.log("error", error);  
    }

  }

  getData()

  },[])
  
  return (
    <div className="App">
      <Header/>

      <div className="cards">
        <Products products={products}/>
      </div>

      <Footer />

      

      

      </div>

  );
}

export default App;


