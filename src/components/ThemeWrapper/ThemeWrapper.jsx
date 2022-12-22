import React, { useState, useEffect } from 'react';
import { createContext } from "react";
import styles from "../ThemeToggler/styles.module.css";

export const themes = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});

export function ThemeWrapper(props) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.light);

  function changeTheme(theme) {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.className = 'themeLight';
        document.getElementById('btn_sun').classList.remove(styles.hidden)
        document.getElementById('btn_moon').classList.add(styles.hidden)
        break;
      case themes.dark:
        document.body.className = 'themeDark';
        document.getElementById('btn_moon').classList.remove(styles.hidden)
        document.getElementById('btn_sun').classList.add(styles.hidden)
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}