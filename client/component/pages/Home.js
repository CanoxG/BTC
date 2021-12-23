import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.scss";
import Coins from "../coins/Coins";

export function Home() {
  const [rates, setRates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs" +
          "_currency=usd&order=market" +
          "_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((respond) => {
        console.log(respond);
        setRates(respond.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredRates = rates.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.coinApp}>
        <div className={styles.coinSearch}>
          <h1>SEARCH CURRENCY</h1>
          <form action="">
            <input
              onChange={handleChange}
              type="text"
              placeholder={"Search"}
              className={styles.coinInput}
            />
          </form>
        </div>
        {filteredRates.map((coin) => (
          <Coins
            key={coin.id}
            naem={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
          />
        ))}
    </div>
  );
}
