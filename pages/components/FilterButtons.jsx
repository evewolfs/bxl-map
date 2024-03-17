import React from "react";
import CustomButton from "./CustomButton";

const filters = {
  coffee: "Coffee",
  beer: "Beer",
  food: "Belgian Cuisine",
  art: "Arts & Culture",
  supermarket: "Supermarket",
  fries: "Belgian Fries",
  bread: "Bakery",
  turkish: "Turkish Delight",
  leaf: "Green escape",
  wine: "Wine Bar",
  shopping: "Ethical shopping",
  pizza: "Pizza",
  bike: "bike rental",
  transport: "closest transport",

  // Add other filters here
};

const FilterButtons = ({ activeFilters, toggleFilter }) => {
  return (
    <div>
      {Object.entries(filters).map(([key, value]) => (
        <CustomButton
          key={key}
          name={value}
          imageUrl={`/icon-${key}.png`}
          onClick={() => toggleFilter(key)}
          style={{
            color: activeFilters.includes(key) ? "green" : "red",
          }}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
