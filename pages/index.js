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
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleToggle = () => {
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
        <div className={styles.viewbutton}>
          <button
            className={`${styles.togglebutton} ${
              isMapVisible && styles.active
            }`}
            onClick={() => setIsMapVisible(false)}
            style={{ fontSize: "1.2rem" }}
          >
            List
          </button>{" "}
          or{" "}
          <button
            className={`${styles.togglebutton} ${
              !isMapVisible && styles.active
            }`}
            onClick={() => setIsMapVisible(true)}
            style={{ fontSize: "1.2rem" }}
          >
            Map
          </button>
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
          Made by Eve Wolfs
        </a>
      </footer>
    </div>
  );
}
