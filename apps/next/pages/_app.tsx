import 'raf/polyfill';
import 'setimmediate';
import '../public/fonts/font.css';

import { makeTheme, Provider } from 'anu';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

interface PageProperties extends AppProps {
  pageProps: {
    seo?: Record<string, never>;
  };
}

const theme = makeTheme({});

/**
 *
 * @param props
 */
export default function App(props: PageProperties) {
  const { Component, pageProps } = props;

  return (
    <>
      {pageProps?.seo ? <NextSeo {...pageProps.seo} /> : null}
      <Provider theme={theme}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
