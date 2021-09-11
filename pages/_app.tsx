import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavList from "../components/Nav/NavList";
import Head from "next/head";
import { auth, createUserProfileDocument } from "../utils/firebaseauth.utils";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../store";
import { loginActions } from "../store/login-slice";
import { useRouter } from "next/router";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
import { webActions } from "../store/web-slice";
import {
  getOpenSearchList,
  getPrivateSearchList,
} from "../utils/getSearchLists";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const [isRouting, setIsRouting] = useState(false);
  const { events } = useRouter();
  const { isLoggingIn, isLoggedIn, loginClicked, total } = useSelector(
    (state: RootState) => state.login
  );
  const { openSolutionsLength, privateSolutionsLength } = useSelector(
    (state: RootState) => state.web
  );
  //sign in
  useEffect(() => {
    if (isLoggedIn) return;
    dispatch(loginActions.setLoggingIn(true));
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (!user) {
        dispatch(loginActions.setLoggingIn(false));
        dispatch(loginActions.setLoginClicked(false));
        return;
      }
      const userData = await createUserProfileDocument(user);
      dispatch(
        loginActions.login({
          displayName: user.displayName,
          picture: user.photoURL,

          ...userData,
        })
      );
    });
    return () => unsubscribeFromAuth();
  }, []);

  // while navigating between pages show spinner
  useEffect(() => {
    const start = () => setIsRouting(true);
    const end = () => setIsRouting(false);
    events.on("routeChangeStart", start);
    events.on("routeChangeComplete", end);
    events.on("routeChangeError", end);
    return () => {
      events.off("routeChangeStart", start);
      events.off("routeChangeComplete", end);
      events.off("routeChangeError", end);
    };
  }, [events]);

  //webSlice openSearchlist, privateSearchList
  useEffect(() => {
    const getData = async () => {
      if (!openSolutionsLength) {
        const openList = await getOpenSearchList();
        dispatch(webActions.setOpenSearchList([...openList]));
      }

      if (privateSolutionsLength || !isLoggedIn) return;
      const privateList = await getPrivateSearchList();
      dispatch(webActions.setPrivateSearchList([...privateList]));
    };
    getData();
  }, [isLoggedIn]);
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
      {isLoggingIn && loginClicked && (
        <div>
          <h3 style={{ textAlign: "center" }}>Signing In...</h3>
          <Modal />
        </div>
      )}
      {isRouting || isLoggingIn ? <Spinner /> : <Component {...pageProps} />}
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
function MyLeetCode(props: AppProps) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}

export default MyLeetCode;
