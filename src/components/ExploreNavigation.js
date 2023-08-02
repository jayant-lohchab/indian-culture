import { NavLink } from "react-router-dom";
import classes from "./ExploreNavigation.module.css";
const ExploreNavigation = () => {
  return (
    <header className={classes.random}>
      <nav>
        <ul>
          <li>
            <NavLink to="festivals">Festivals</NavLink>
          </li>
          <li>
            <NavLink to="traditions">Traditions</NavLink>
          </li>
          <li>
            <NavLink to="cuisine">Cuisine</NavLink>
          </li>
          <li>
            <NavLink to="history">History</NavLink>
          </li>
          <li>
            <NavLink to="artsandmusic">Arts and Music</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ExploreNavigation;
