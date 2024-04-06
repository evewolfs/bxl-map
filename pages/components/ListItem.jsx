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
              <div className={classes.listSubBox}>
                {data && (
                  <Image
                    src={`/static/red-menuicon-${item.category}.png`}
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 416.896 9.02"
              >
                <path
                  fill="#fff"
                  strokeWidth="0"
                  d="M1.447 9.019c27.152-.875 54.267-2.618 81.421-3.456 13.399-.414 26.809-.604 40.213-.351 13.642.258 27.242 1.401 40.881 1.64 26.624.467 53.195-1.597 79.769-2.878 26.93-1.298 53.846-.893 80.793-.46 30.308.487 60.613 1.178 90.923 1.505 1.931.021 1.932-2.979 0-3-27.033-.292-54.061-.873-81.09-1.341-26.934-.466-53.92-1.189-80.847-.135-26.594 1.041-53.147 3.269-79.773 3.372-13.641.053-27.199-.944-40.82-1.435-13.392-.483-26.797-.469-40.193-.178-30.448.661-60.841 2.736-91.277 3.717-1.926.062-1.934 3.062 0 3z"
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
