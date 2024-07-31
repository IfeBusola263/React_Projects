import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
          to='/'
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Products
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
