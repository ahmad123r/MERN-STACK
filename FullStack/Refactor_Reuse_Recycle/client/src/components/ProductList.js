import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


export default props => {
  const getEverything = () => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };


  const [products, setProducts] = useState([]);


  useEffect( () => {
    getEverything();
  }, []);


  return(
    <div className = "container">
      <h3>Product List</h3>
      { products.map( product => {
        return <h3 key={ product._id }>
                  <Link to = { `/product/${product._id}` }>Title: { product.title }</Link> | Price: ${ product.price } | Description: { product.description } |
                  <Link to = {`/edit/${product._id}`} className="btn-link" > Edit </Link> | 
                  <DeleteButton productId = { product._id } successCallback = { () => getEverything() }/>
                </h3>
      })}
    </div>
  )
}