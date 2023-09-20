// Layout.js
import React from "react";
import { useTheme } from "./ThemeContext";

import "./layout.css";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App theme-${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

export default Layout;
