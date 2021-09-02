import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavList from "../components/Nav/NavList";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavList />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
