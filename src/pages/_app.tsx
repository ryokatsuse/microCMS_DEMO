import { AppProps } from 'next/app';
import "../styles/index.css";

import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;