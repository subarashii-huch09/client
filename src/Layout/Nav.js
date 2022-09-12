import { NavLink, Link } from "react-router-dom";
import styles from "./Nav.module.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuIcon = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className={styles.wrapper}>
      <h1>
        <Link className={styles.mobileTitle} to="/">
          Ilha Formosa
        </Link>
      </h1>
      <div className={styles.navWrapper}>
        <div className={styles.menuIconContainer}>
          <Link to="/">
            <FaIcons.FaBars
              size={42}
              className={styles.menuIcon}
              onClick={toggleMenuIcon}
            />
          </Link>
        </div>
        {showMenu ? (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link to="#">
                  <AiIcons.AiOutlineClose
                    size={28}
                    className={styles.close}
                    onClick={toggleMenuIcon}
                  />
                </Link>
              </li>
              <>
                <li>
                  <NavLink className={styles.navItem} to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navItem} to="/reservations">
                    Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navItem} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navItem} to="/order">
                    Order
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navItem} to="/catering">
                    Catering
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navItem} to="/location">
                    Location
                  </NavLink>
                </li>
              </>
            </ul>
          </nav>
        ) : (
          false
        )}
      </div>
      <nav className={styles.xlNav}>
        <ul className={styles.xlNavList}>
          <li>
            <ul className={styles.xlListFlex}>
              <li>
                <NavLink className={styles.xlNavItem} to="/menu">
                  MENU
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.xlNavItem} to="/reservations">
                  RESERVATIONS
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.xlNavItem} to="/about">
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <h1>
              <Link className={styles.xlTitle} to="/">
                Ilha Formosa
              </Link>
            </h1>
          </li>
          <li>
            <ul className={styles.xlListFlex}>
              <li>
                <NavLink className={styles.xlNavItem} to="/order">
                  ORDER
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.xlNavItem} to="/catering">
                  CATERING
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.xlNavItem} to="/location">
                  LOCATION
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
