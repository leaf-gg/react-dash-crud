import React from "react";
import './css/List.css';
import { useParams } from "react-router-dom";
const list = await fetch("https://dummyjson.com/products");
const allData = await list.json();

const List = () => {
    const param = useParams();
    console.log('param', param)
  
  return (
    <div className="list-products">
      <h1>Listagem dos produtos</h1>
      <ul className="list-items">
        {allData.products.map((product) => (
          <li className="list-item" key={product.id}>
            <div className="item-info">
            <img
              src={product.thumbnail}
              width="40"
              height="40"
              alt={product.title}
            />
            <p>{product.title}</p>
            </div>
            <div className="item-settings">
                <a href={`/products/`+ product.id}>Ver dados</a>
                <a href={`/edit/` + product.id}>Alterar</a>
                <a href="#">Excluir</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
