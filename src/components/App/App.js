import React, { useState } from "react";
import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import YelpApi from "../../utils/YelpApi";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    YelpApi.searchYelp(term, location, sortBy).then(results => setBusinesses(results));
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;

