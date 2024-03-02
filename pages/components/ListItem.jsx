// components/ItemList.js
import React from 'react';

const ListItem = ({ data }) => {
  return (
    <div>
      <h1>List of Places</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
          <p>{item.distance}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <a href={item.gmaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
