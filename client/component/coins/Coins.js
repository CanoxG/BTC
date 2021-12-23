import React from "react";
import styles from "./Coins.scss";

export default function Coins({ image, name, symbol, price, volume }) {
  return (
    <div className={styles.coinsContainer}>
      <div className={styles.coinRow}>
        <div className={styles.coin}>
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <p className={styles.symbol}>{symbol}</p>
        </div>
        <coinData className={styles.coinData}>
          <p className={styles.coinPrice}>${price}</p>
          <p className={styles.coinVolume}>${volume.toLocaleString()}</p>
        </coinData>
      </div>
    </div>
  );
}
