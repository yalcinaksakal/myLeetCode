import styles from "./NavList.module.scss";
import Link from "next/link";
import NavItem from "./NavItem/NavItem";
import Image from "next/image";
const NavList: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/favicon.png" alt="ya's code" width={25} height={20} />
        <span>YA's LeetCode Solutions</span>
      </div>
      <ul className={styles.list}>
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
    </div>
  );
};

export default NavList;
