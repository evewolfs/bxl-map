import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Mapcmp from "./components/mapcmp";
import ListItem from "./components/ListItem";
import datas from "./../datas.json";
import AnimatedLogo from "./components/AnimatedLogo";
import FilterButtons from "./components/FilterButtons";

export default function Home() {
  const [isMapVisible, setIsMapVisible] = useState(false);
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
      <div className={styles.subtitle}>Recommendation list</div>
     
        {/* Filter Buttons */}
        <div className={styles.maincontainer}>
          
  
       
        <FilterButtons
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
          
        /></div>
      <button className={styles.togglebutton} onClick={handleToggle}>
          {isMapVisible ? "Show the Map" : "Show the List"}
        </button>
         {isMapVisible ? (
          <ListItem data={datas} activeFilters={activeFilters} />
        ) : (
          <Mapcmp data={datas} activeFilters={activeFilters} />
        )}
        
     
       

      </main>


      <footer className={styles.footer}>
        <a
          href="https://evewolfs.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Wolfs
      
        </a>
      </footer>
    </div>
  );
}
