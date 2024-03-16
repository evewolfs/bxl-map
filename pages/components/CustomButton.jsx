// components/CustomButton.js
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React from 'react';

const CustomButton = ({ name, imageUrl, onClick }) => {
  return (
    <button onClick={onClick} className={styles.custombutton}>
      {imageUrl && <Image src={imageUrl} alt={name} style={{ marginRight: '8px' }} width={40} height={40} />}
      <span>{name}</span>
    </button>
  );
};

export default CustomButton;
