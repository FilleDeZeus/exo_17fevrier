
import React from 'react';
import productList from './public/data/productList.json'


export const ProductList = () => {
  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {productList.products.map((product, index) => (
          <li key={index}>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}




