import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </>
  );
};

export default Home;
