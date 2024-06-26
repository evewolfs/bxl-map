import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Mapcmp from "./components/mapcmp";
import ListItem from "./components/ListItem";
import datas from "../datas.json";
import AnimatedLogo from "./components/AnimatedLogo";
import FilterButtons from "./components/FilterButtons";

export default function Home() {
  const [isMapVisible, setIsMapVisible] = useState(true); // Set to true by default
  const [activeFilters, setActiveFilters] = useState([]);

  
  const toggleFilter = (filter) => {
        // Track event when filter button is clicked
        window.gtag('event', 'click', {
          event_category: 'Filter Button',
          event_label: filter,
        });
        
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  
  const handleToggle = () => {
    window.gtag('event', 'click', {
      event_category: 'Marker Click',
      event_label: data.name,
    });
    setIsMapVisible(!isMapVisible);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BRUXXX</title>
        <meta name="description" content="A map about brussels gems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AnimatedLogo />
        <div className={styles.subtitle}>
          Recommendation{" "}
          <button
            className={`${styles.togglebutton} ${
              !isMapVisible && styles.active
            }`}
            onClick={() => setIsMapVisible(true)}
          >
            Map
          </button>
          or{" "}
          <button
            className={`${styles.togglebutton} ${
              isMapVisible && styles.active
            }`}
            onClick={() => setIsMapVisible(false)}
          >
            List
          </button>{" "}
        </div>

        {/* Filter Buttons */}
        <div className={styles.maincontainer}>
          <FilterButtons
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
          />
        </div>
        <div>
  {isMapVisible ? (
    <button
      className={styles.viewbutton}
      onClick={() => setIsMapVisible(false)}
    >
      See the list
    </button>
  ) : (
    <button
      className={styles.viewbutton}
      onClick={() => setIsMapVisible(true)}
    >
      See the map
    </button>
  )}
</div>


        {isMapVisible ? (
          <Mapcmp data={datas} activeFilters={activeFilters} />
        ) : (
          <ListItem data={datas} activeFilters={activeFilters} />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://evewolfs.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by <span>Eve Wolfs</span>
        </a>
      </footer>
    </div>
  );
}
