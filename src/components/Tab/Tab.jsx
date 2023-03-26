import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";

export const Tab = ({ to, title, className }) => {
  return (
    <NavLink to={to} className={className}>
      {({ isActive }) => <Button disabled={isActive}>{title}</Button>}
    </NavLink>
  );
};
