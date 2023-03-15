import React, { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  const toggleTheme = useCallback(
    () =>
      setTheme((currentTheme) => (currentTheme === "white" ? "dark" : "white")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
