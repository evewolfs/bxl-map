// FilterButtons.js
import React from "react";
import CustomButton from "./CustomButton";
import styles from "../../styles/Home.module.css";
import { FilterButtonImages } from "../../lib/Images";

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  const handleButtonClick = (key) => {
    // Toggle individual category
    toggleFilter(key);
  };

  return (
    <div className={styles.containerfilter}>
      {FilterButtonImages.map((item) => (
      // {Object.entries(filters).map(([key, value]) => (
        <CustomButton
          key={item.name}
          name={item.name}
          imageUrl={item.image}
          greenImageUrl={item.greenImage} 
          onClick={() => handleButtonClick(item.name)}
          isActive={activeFilters.includes(item.name)}
        />
      ))}
    </div>
  );
};
// Setting defaultProps outside the component function declaration
FilterButtons.defaultProps = {
  activeFilters: [], // Set a default value
};

export default FilterButtons;
