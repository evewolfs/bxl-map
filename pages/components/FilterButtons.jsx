// FilterButtons.js
import React from "react";
import CustomButton from "./CustomButton";
import styles from "../../styles/Home.module.css";

const filters = {
  food: "Belgian Cuisine",
  beer: "Beer",
  art: "Arts & Culture",
  coffee: "Coffee",
  archi: "Architecture",
  fries: "Belgian Fries",
  supermarket: "Supermarket",
  bread: "Bakery",
  turkish: "Turkish Food",
  ice: "Ice-cream",
  leaf: "Green Space",
  choco: "Chocolate",
  wine: "Wine Bar",
  shopping: "Shopping",
  pizza: "Pizza",
  // Add other filters here
};

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  const handleButtonClick = (key) => {
    // Toggle individual category
    toggleFilter(key);
  };

  return (
    <div className={styles.containerfilter}>
      {Object.entries(filters).map(([key, value]) => (
        <CustomButton
          key={key}
          name={value}
          imageUrl={`evewolfs.github.io/public/static/menuicon-${key}.png`}
          greenImageUrl={`/static/green-menuicon-${key}.png`} // Generate green icon URL dynamically
          onClick={() => handleButtonClick(key)}
          isActive={activeFilters.includes(key)}
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
