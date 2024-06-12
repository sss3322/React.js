import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
        console.log(response)
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock:{product.stock}</p>
      <p>Brand:{product.brand}</p>
      <p>Category:{product.category}</p>

    
    </div>
  );
}

export default ProductDetails;
