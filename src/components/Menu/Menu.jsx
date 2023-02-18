import React from "react";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>{menu}</div>
    </div>
  );

  // return React.createElement('div', {
  //   children: [
  //     React.createElement('h3', {
  //       children: 'Menu'
  //     }),
  //     React.createElement('div', {
  //       children: menu
  //     })
  //   ]
  // })
};