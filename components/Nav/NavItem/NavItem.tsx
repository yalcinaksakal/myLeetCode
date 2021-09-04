import styles from "./NavItem.module.scss";

import { useState } from "react";
import Link from "next/link";

const NavItem: React.FC<{
  item: string;
  isPageActive: boolean;
  svg: any;
  path: string;
  desc: string;
}> = ({ item, isPageActive, svg, path, desc }) => {
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
      }`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {item !== "signInOut" ? (
        <Link href={path} passHref>
          {svgJSX}
        </Link>
      ) : (
        svgJSX
      )}

      {showDetails && !isPageActive && (
        <div className={styles.navItemDetail}>{desc}</div>
      )}
    </li>
  );
};

export default NavItem;
