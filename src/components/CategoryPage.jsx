import React from 'react';
import Product from './Product';

function CategoryPage() {
  const products = [1,2,3]
  
  return (
    <div>
      <h1>Baby products</h1>
      {products.map(product => (
        <Product key={product} />
      ))}
    </div>
  )
}

export default CategoryPage;