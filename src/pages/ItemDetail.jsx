import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'


const itemDetails = {
    1: { name: 'Item 1', description: 'Description for Item 1' },
    2: { name: 'Item 2', description: 'Description for Item 2' },
    3: { name: 'Item 3', description: 'Description for Item 3' },
  };
const ItemDetail = () => {
    const {id} = useParams();
    const item = itemDetails[id];

    if(!item) return<p>Item not found</p>;
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail
