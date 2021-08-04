import React from 'react';
import axios from 'axios';
import { Button } from '../styles/Style';

export default props => {
  const { productId, successCallback } = props;


  const deleteProduct = e => {
    axios.delete('http://localhost:8000/api/product/' + productId)
      .then(res => { successCallback() })
  }


  return (
    <Button onClick={ deleteProduct }>Delete</Button>
  )
}