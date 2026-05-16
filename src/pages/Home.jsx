import axios from "axios";
import { useState, useEffect,} from "react";
import Products from '../components/Products';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async() => {

    try{
      const apiCall = await axios.get('https://dummyjson.com/products');
      setProducts(apiCall.data.products) 
    }

    catch(error){
      console.log("error", error);  
    }

  }

  getData()

  },[])
  
  return (
    <div className="App">


      <div className="cards">
        <Products products={products}/>
      </div>


      

      

      </div>

  );
}

export default Home;


