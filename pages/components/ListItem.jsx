import React from "react";
import Image from "next/image";
import classes from "../../styles/Page.module.css";


const ListItem = ({ data, activeFilters }) => {
  if (!data) {
    return null; // or return a loading indicator, error message, or handle this case accordingly
  }
  return (
    <div className={classes.listMainBox}>
  
      {/* List items */}
      {data.map((item, index) => {
        if (
          (activeFilters.length === 0 ||
            activeFilters.includes(item.category)) &&
          item.category !== "house" // Exclude "house" category
        ) {
          return (
            <div key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417.726 7.956">
      <path
        fill="#fff"
        strokeWidth="0"
        d="M1.448 7.955a9744.251 9744.251 0 01414.829-4.399c1.931.021 1.932-2.979 0-3A9743.654 9743.654 0 001.448 4.955c-1.926.061-1.934 3.062 0 3z"
      ></path>
    </svg>
              <div className={classes.listSubBox}>
                {data && (
                  <Image
                  src={`/green-menuicon-${item.category}.png`}
                    alt={data.name}
                    width={50}
                    height={50}
                  />
                )}
                <h2 className={classes.listTitle}>{item.name}</h2>
              </div>
              <p className={classes.listInfo}>{item.title}</p>
              <p className={classes.popupDist}>{item.distance}</p>
              <a
                href={item.gmaps}
                className={classes.popupWebUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417.726 7.956">
      <path
        fill="#fff"
        strokeWidth="0"
        d="M1.448 7.955a9744.251 9744.251 0 01414.829-4.399c1.931.021 1.932-2.979 0-3A9743.654 9743.654 0 001.448 4.955c-1.926.061-1.934 3.062 0 3z"
      ></path>
    </svg>
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
