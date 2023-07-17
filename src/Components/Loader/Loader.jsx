import React from "react";
import { HashLoader } from "react-spinners";
import styles from "./Loader.module.scss";

function Loader({ isLoading }) {
  function generateStyles(isLoading) {
    return isLoading ? { display: "flex" } : { display: "none" };
  }

  return (
    <div className={styles.Loader} style={generateStyles(isLoading)}>
      <HashLoader color="white" />
    </div>
  );
}

export default Loader;
