import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"
const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navBar}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <NavLink to="/" className={classes.navLink}>Home</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink to="/explore" className={classes.navLink}>Explore</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink to="/community" className={classes.navLink}>Community</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink to="/about" className={classes.navLink}>About Us</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink to="/contact" className={classes.navLink}>Contact</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink to="/search" className={classes.navLink}>Search Results</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
