import styles from "./NavItem.module.scss";
import { useState } from "react";
import { SVGS } from "../../../svg/svg";

const NavItem: React.FC<{
  item: string;
  isLast: boolean;
  isBeforeLast: boolean;
}> = ({ item, isLast, isBeforeLast }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      className={styles.item}
      // ${isPageActive ? styles.active : ""} ${
      //   item === "logout" ? styles.red : ""
      // }`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <svg width="25" height="25" viewBox="0 0 25 25" onClick={() => {}}>
        {SVGS[item].svg}
      </svg>
      {/* 
      {showDetails && window.innerWidth > 400 && (
        // !isPageActive &&
        <NavItemDetails
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
          show
          name={NAV_ITEMS[item].name}
          isLast={isLast}
          content={
            item === "logout" || item === "profile"
              ? { userName, userFamilyName, email, profileImg }
              : item === "login"
              ? "Sign In or Sign Up with your google account. "
              : item === "loading"
              ? "Signing in"
              : null
          }
          isBeforeLast={isBeforeLast}
        />
      )} */}
    </li>
  );
};

export default NavItem;
