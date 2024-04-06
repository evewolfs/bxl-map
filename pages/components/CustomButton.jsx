// CustomButton.js
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";

const CustomButton = ({ name, imageUrl, greenImageUrl, onClick, isActive }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Set initial state on component mount
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={`${styles.custombutton} ${
        isActive ? styles.activeButton : ""
      }`}
    >
      {isActive ? (
        <Image
          src={greenImageUrl} // Show green image when active
          alt={name}
          width={isMobile ? 50 : 80} // Set width based on viewport width
          height={isMobile ? 50 : 80} // Set height based on viewport width
        />
      ) : (
        <Image
          src={imageUrl}
          alt={name}
          width={isMobile ? 50 : 80} // Set width based on viewport width
          height={isMobile ? 50 : 80} // Set height based on viewport width
        />
      )}
      <span>{name}</span>
    </button>
  );
};

export default CustomButton;
