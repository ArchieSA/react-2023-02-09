import React from "react";

import Logo from "./img/logo.svg";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.root}>
      <img src={Logo} />
    </header>
  );
};
