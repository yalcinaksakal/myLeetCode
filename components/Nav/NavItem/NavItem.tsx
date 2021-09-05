import styles from "./NavItem.module.scss";

import { useState } from "react";
import Link from "next/link";

const NavItem: React.FC<{
  item: string;
  isPageActive: boolean;
  svg: any;
  path: string;
  desc: string;
  isLoginRequired: boolean;
}> = ({ item, isPageActive, svg, path, desc, isLoginRequired }) => {
  const isLoggedIn = false;
  const isDisabled = isLoginRequired && !isLoggedIn;
  const [showDetails, setShowDetails] = useState(false);
  const svgJSX = (
    <svg width="25" height="25" viewBox="0 0 25 25" onClick={() => {}}>
      {svg}
    </svg>
  );
  return (
    <li
      className={`${styles.item} ${isPageActive ? styles.active : ""} ${
        item === "logout" ? styles.red : ""
      } ${isDisabled ? styles.disabled : ""}`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {item !== "signInOut" ? (
        <Link href={path} passHref>
          {svgJSX}
        </Link>
      ) : (
        <div className={isLoggedIn ? styles.red : ""}>{svgJSX}</div>
      )}

      {showDetails && !isPageActive && (
        <div className={styles.navItemDetail}>
          {isDisabled
            ? "Please Sign In"
            : item === "signInOut" && isLoggedIn
            ? "Sign Out"
            : desc}
        </div>
      )}
    </li>
  );
};

export default NavItem;
