import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </>
  );
};

export default Home;
