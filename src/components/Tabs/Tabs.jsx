import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabs, onTabClick, activeId }) => {
  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }) => (
        <Tab
          title={title}
          onClick={() => onTabClick(id)}
          isActive={activeId === id}
        />
      ))}
    </div>
  );
};
