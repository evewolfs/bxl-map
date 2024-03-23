import React from "react";
import CustomButton from "./CustomButton";
import styles from "../../styles/Home.module.css";

const filters = {
  all: "All",
  food: "Belgian Cuisine",
  beer: "Beer",
  art: "Arts & Culture",
  coffee: "Coffee",
  archi:"Architecture",
  fries: "Belgian Fries",
  supermarket: "Supermarket",
  bread: "Bakery",
  turkish: "Turkish Food",
  ice:"Ice-cream",
  leaf: "Green Space",
  choco: "Chocolate",
  wine: "Wine Bar",
  shopping: "Shopping",
  pizza: "Pizza",
  // Add other filters here
};

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  const handleButtonClick = (key) => {
    if (key === "all") {
      // Toggle the "All" button
      const isAllActive = activeFilters.includes("all");
      const allFiltersActive = Object.keys(filters).every((filter) =>
        activeFilters.includes(filter)
      );
      if (!isAllActive || !allFiltersActive) {
        Object.keys(filters).forEach((filter) => {
          toggleFilter(filter);
        });
      } else {
        Object.keys(filters).forEach((filter) => {
          toggleFilter(filter);
        });
      }
    } else {
      // Toggle individual category
      toggleFilter(key);
    }
  };

  return (
    <div className={styles.containerfilter}>
      {Object.entries(filters).map(([key, value]) => (
        <CustomButton
          key={key}
          name={value}
          imageUrl={`/menuicon-${key}.png`}
          onClick={() => handleButtonClick(key)}
          isActive={activeFilters.includes(key)}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
