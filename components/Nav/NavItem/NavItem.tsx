import styles from "./NavItem.module.scss";

import { useState } from "react";
import Link from "next/link";
import { auth, signInWithGoogle } from "../../../utils/firebaseauth.utils";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../store/login-slice";
import { RootState } from "../../../store";
import Spinner2 from "../../../UI/Spinner/Spinner2";
import { useRouter } from "next/router";
import ProfileImg from "../../../UI/ProfileImg/ProfileImg";
import { webActions } from "../../../store/web-slice";

const NavItem: React.FC<{
  item: string;

  svg: any;
  path: string;
  desc: string;
  isLoginRequired: boolean;
}> = ({ item, svg, path, desc, isLoginRequired }) => {
  const { isLoggedIn, isLoggingIn, displayName } = useSelector(
    (state: RootState) => state.login
  );
  const isDisabled = isLoginRequired && !isLoggedIn;
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const isPageActive = router.pathname === path;
  const svgJSX = (
    <svg width="25" height="25" viewBox="0 0 25 25">
      {svg}
    </svg>
  );
  return (
    <li
      className={`${styles.item} ${
        isPageActive && !isDisabled ? styles.active : ""
      } ${item === "logout" ? styles.red : ""} ${
        isDisabled ? styles.disabled : ""
      }`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {item !== "signInOut" ? (
        isLoggedIn && item === "profile" ? (
          <ProfileImg type="nav" isPageActive={isPageActive} />
        ) : (
          <Link href={path}>{svgJSX}</Link>
        )
      ) : (
        <div
          className={isLoggedIn ? styles.red : ""}
          onClick={
            isLoggedIn
              ? () => {
                  auth.signOut();
                  dispatch(loginActions.logout());
                  dispatch(webActions.logout());
                  router.replace("/");
                }
              : () => {
                  dispatch(loginActions.setLoggingIn(true));
                  dispatch(loginActions.setLoginClicked(true));
                  signInWithGoogle();
                }
          }
          style={{ transform: "translateY(2px)" }}
        >
          {isLoggingIn ? <Spinner2 /> : svgJSX}
        </div>
      )}

      {showDetails && !isPageActive && (
        <div className={styles.navItemDetail}>
          {isDisabled
            ? "Please Sign In"
            : item === "signInOut" && isLoggedIn
            ? "Sign Out"
            : item === "profile"
            ? displayName.split(" ")[0]
            : desc}
        </div>
      )}
    </li>
  );
};

export default NavItem;
