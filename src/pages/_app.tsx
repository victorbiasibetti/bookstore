import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import reduxWrapper from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default reduxWrapper.withRedux(MyApp);
