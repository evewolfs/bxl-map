// ListItem.jsx
import React from "react";

const ListItem = ({ data, activeFilters }) => {
  return (
    <div>
      <h1>List of Places</h1>
      {/* List items */}
      {data.map((item, index) => {
        if (
          activeFilters.length === 0 ||
          activeFilters.includes(item.category)
        ) {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>{item.title}</p>
              <p>{item.distance}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <a href={item.gmaps} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
              <p>{item.category}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ListItem;
