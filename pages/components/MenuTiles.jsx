// ParentComponent.jsx
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'
import Mapcmp from './Mapcmp';
import ListItem from './ListItem';
import datas from './../../datas.json'; // Import your data here

const MenuTiles = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = filter => {
    setActiveFilters(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(item => item !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div>
        <button
          onClick={() => toggleFilter('category1')}
         
        >
          Category 1
        </button>
        <button
          onClick={() => toggleFilter('category2')}
         
        >
          Category 2
        </button>
        {/* Add more buttons for other categories */}
      </div>
      <Mapcmp data={datas} activeFilters={activeFilters} />
      <ListItem data={datas} activeFilters={activeFilters} />
    </div>
  );
};

export default MenuTiles;
