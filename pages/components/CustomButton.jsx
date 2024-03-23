// components/CustomButton.js
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";

const CustomButton = ({ name, imageUrl, onClick, isActive }) => {
  return (
    <button onClick={onClick} className={`${styles.custombutton} ${isActive ? styles.activeButton : ""}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          
        />
      )}
      <span>{name}</span>
    </button>
  );
};

export default CustomButton;
