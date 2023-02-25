import 'raf/polyfill';
import 'setimmediate';
import '../public/fonts/font.css';

import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

import { DripsyProvider } from '../config/dripsy';

interface PageProperties extends AppProps {
  pageProps: {
    seo?: Record<string, never>;
  };
}

export default function App(props: PageProperties) {
  const { Component, pageProps } = props;

  return (
    <>
      {pageProps?.seo ? <NextSeo {...pageProps.seo} /> : null}
      <DripsyProvider>
        <Component {...pageProps} />
      </DripsyProvider>
    </>
  );
}
