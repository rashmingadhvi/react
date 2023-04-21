import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';

const ProductDetails = ({id})=>{

    const [product, setProduct] = useState({});
  async function getProduct() {
    return await (await fetch(`https://dummyjson.com/products/${id}`)).json();
  }

  useEffect(() => {
    getProduct().then((p) => {
      setProduct(p);
    }, console.error);
  }, []);

    return(

        <>
        
        <div>
            <Link to="/">All Products</Link>
            
            <h3>{product.title} @ ${product.price}</h3>
        <img src={product.thumbnail} alt={product.title}/>
        
        </div>
       
        </>

    );
};

/*
 
*/
export default ProductDetails;