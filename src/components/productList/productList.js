
import React from 'react';
import productList from './public/data/productList.json'


export const ProductList = () => {
  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {/* permet de un li pour chaque element dans le liste de produit */}
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




