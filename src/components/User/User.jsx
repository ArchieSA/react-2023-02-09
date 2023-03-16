import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/entities/user/selector";
import styles from "./User.module.css";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  const { name } = user;
  return <div className={styles.root}>{name}</div>;
};
