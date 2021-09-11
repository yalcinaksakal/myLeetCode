import styles from "./NavList.module.scss";

import Link from "next/link";
import NavItem from "./NavItem/NavItem";
import Image from "next/image";

import { SVGS } from "../../svg/svg";
import Search from "../Search/Search";

const NavList: React.FC = () => {
  return (
    <div className={styles.nav}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image src="/favicon.png" alt="ya's code" width={25} height={20} />
          <span>YA&apos;s LeetCode Solutions</span>
        </div>
      </Link>
      <Search />
      <ul className={styles.list}>
        {Object.values(SVGS).map((listItem, index) => {
          return (
            <NavItem
              key={index}
              item={listItem.name}
              svg={listItem.svg}
              desc={listItem.description}
              path={`/${listItem.path}`}
              isLoginRequired={listItem.isLoginRequired}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
