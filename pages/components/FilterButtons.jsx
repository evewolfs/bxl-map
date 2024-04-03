// FilterButtons.js
import React from "react";
import CustomButton from "./CustomButton";
import styles from "../../styles/Home.module.css";
import Images from "../../lib/Images";

// const filters = {
//   food: "Belgian Cuisine",
//   beer: "Beer",
//   art: "Arts & Culture",
//   coffee: "Coffee",
//   archi: "Architecture",
//   fries: "Belgian Fries",
//   supermarket: "Supermarket",
//   bread: "Bakery",
//   turkish: "Turkish Food",
//   ice: "Ice-cream",
//   leaf: "Green Space",
//   choco: "Chocolate",
//   wine: "Wine Bar",
//   shopping: "Shopping",
//   pizza: "Pizza",
//   // Add other filters here
// };

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  const handleButtonClick = (key) => {
    // Toggle individual category
    toggleFilter(key);
  };

  return (
    <div className={styles.containerfilter}>
      {Images.map((item) => (
      // {Object.entries(filters).map(([key, value]) => (
        <CustomButton
          key={item.name}
          name={item.name}
          imageUrl={item.image}
          greenImageUrl={item.image} // Generate green icon URL dynamically
          // imageUrl={`/static/menuicon-${key}.png`}
          // greenImageUrl={`/static/green-menuicon-${key}.png`} // Generate green icon URL dynamically
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
