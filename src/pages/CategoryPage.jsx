import Products from '../components/Products';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {

    const [products, setProducts] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {

        const myCategory = async() => {
            
            try{
                const apiCategory = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
                setProducts(apiCategory.data.products);

            }
            catch(error){
                console.log("Error:", error)
            }
            
         }

        myCategory()

         },[categoryName])



  return (
    <div className="cards">
        <Products products={products}/>
      </div>
  )
}

export default CategoryPage;