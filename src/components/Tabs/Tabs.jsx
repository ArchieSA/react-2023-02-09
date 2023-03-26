import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabs }) => {
  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }) => (
        <Tab title={title} to={id} className={styles.tab} />
      ))}
    </div>
  );
};
