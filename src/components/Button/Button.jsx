import React from "react";
import classNames from "classnames";
import { SIZE } from "../../constants/size";
import { BUTTON_VIEW_VARIANT } from "./constants";

import styles from "./styles.module.css";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = SIZE.m,
  viewVariant = BUTTON_VIEW_VARIANT.primary,
}) => {
  return (
    <button
      className={classNames(
        styles.root,
        styles[size],
        styles[viewVariant],
        className,
        {
          [styles.disabled]: disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
