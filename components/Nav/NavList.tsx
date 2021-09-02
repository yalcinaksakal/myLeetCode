import styles from "./NavList.module.scss";
import Link from "next/link";
import NavItem from "./NavItem/NavItem";

const NavList: React.FC = () => {
  return (
    <ul>
      <NavItem item="signInOut" isBeforeLast={false} isLast={true} />
      {/* {navList.map((listItem, index) => {
        const item =
          listItem === "login" && loginState.isLoading ? "loading" : listItem;
        return (
          <NavItem
            key={item}
            item={item}
            isLast={index === navList.length - 1}
            isBeforeLast={index === navList.length - 2}
          />
        );
      })} */}
    </ul>
  );
};

export default NavList;
