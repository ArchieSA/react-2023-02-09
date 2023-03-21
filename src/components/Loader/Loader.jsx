import React from "react";
import styles from "./Loader.module.css";
import classnames from "classnames";

export const Loader = ({ isHide = false }) => {
  return (
    <div className={classnames({ [styles.hide]: isHide })}>
      <span>Loading...</span>
    </div>
  );
};
