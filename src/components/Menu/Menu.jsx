import React from "react";

export const Menu = ({ menu }) => {
  const dishes = menu.map(({ name }) => name).join(" ,");
  return (
    <div>
      <h3>Menu</h3>
      <div>{dishes}</div>
    </div>
  );
};
