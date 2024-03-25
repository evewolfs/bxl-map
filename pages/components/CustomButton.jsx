// CustomButton.js
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";

const CustomButton = ({ name, imageUrl, greenImageUrl, onClick, isActive }) => {
  return (
    <button onClick={onClick} className={`${styles.custombutton} ${isActive ? styles.activeButton : ""}`}>
      {isActive ? (
        <Image
          src={greenImageUrl} // Show green image when active
          alt={name}
          width={80}
          height={80}
        />
      ) : (
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
