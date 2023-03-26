import React from "react";
import { useSelector } from "react-redux";

export const withAuthorized = (Authorized, NotAuthorized = null) => {
  const Wrapper = () => {
    const isAuthorized = false;

    return isAuthorized ? Authorized : NotAuthorized;
  };

  return Wrapper;
};
