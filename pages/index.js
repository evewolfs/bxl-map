import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Mapcmp from './components/Mapcmp';
import ListItem from './components/ListItem';
import datas from "./../datas.json";
import AnimatedLogo from './components/AnimatedLogo';
import MenuTiles from './components/MenuTiles';

export default function Home() {
  const [isMapVisible, setIsMapVisible] = useState(false);

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
      <AnimatedLogo />
      <h1 className={styles.title}>Things to do around the house</h1>
      <main className={styles.main}>

      <button className={styles.togglebutton} onClick={handleToggle}>{isMapVisible ? 'Show the Map':'Show the List'}</button>
      {isMapVisible ? <ListItem data={datas}/> : <Mapcmp />}
 
      </main>

      <footer className={styles.footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
