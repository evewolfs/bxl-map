import React from 'react';
import CustomButton from './CustomButton';

const filters = {
  'coffee': 'Coffee',
  'beer': 'Beer',
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
            fontWeight: activeFilters.includes(key) ? 'bold' : 'normal',
          }}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
