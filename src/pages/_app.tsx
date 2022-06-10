import React from "react";
import type { AppProps } from "next/app";
import "../assets/sass/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}

export default MyApp;
