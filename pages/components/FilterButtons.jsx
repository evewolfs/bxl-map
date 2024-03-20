import React from "react";
import CustomButton from "./CustomButton";
import styles from "../../styles/Home.module.css";

const filters = {
  coffee: "Coffee",
  beer: "Beer",
  food: "Belgian Cuisine",
  art: "Arts & Culture",
  supermarket: "Supermarket",
  fries: "Belgian Fries",
  bread: "Bakery",
  turkish: "Turkish food",
  leaf: "Green space",
  wine: "Wine Bar",
  shopping: "Shopping",
  pizza: "Pizza",
  // Add other filters here
};

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  const handleButtonClick = (key) => {
    toggleFilter(key);

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
