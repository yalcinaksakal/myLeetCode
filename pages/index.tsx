import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My LeetCode</title>
        <meta
          name="description"
          content="YA's solutions to leetcode problems"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/yalcinaksakal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="ya's code" width={30} height={30} />
          <span>YA's github page</span>
        </a>
      </footer>
    </>
  );
};

export default Home;
