import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavList from "../components/Nav/NavList";
import Head from "next/head";
import { auth } from "../utils/firebase.utils";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });
    return () => unsubscribeFromAuth();
  }, []);
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
      <NavList />
      <Component {...pageProps} />
      <div className={styles.footer}>
        <a
          href="https://github.com/yalcinaksakal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="ya's code" width={30} height={30} />
          <span>YA&apos;s github page</span>
        </a>
      </div>
    </>
  );
}
export default MyApp;
