import styles from "./styles.module.css";
import classnames from "classnames";
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";
import moon_icon from '../../img/moon-icon.svg'
import sun_icon from '../../img/sun-icon.svg'

export const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {({changeTheme, theme}) => (
        <button className={styles.btn} onClick={() => changeTheme(theme)}>
          <img id='btn_sun' className={styles.btn__sun} src={theme === "light" ? sun_icon : moon_icon} alt=""/>
          <img id='btn_moon' className={classnames(styles.btn__moon, styles.hidden)}
               src={theme === 'dark' ? moon_icon : sun_icon} alt=""/>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};