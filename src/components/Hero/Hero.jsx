import React from "react";
import styles from "./Hero.module.css";
import HeadphonesImage from "../../assets/hero_headphones.svg";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={HeadphonesImage} width={212} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
