import 'raf/polyfill';
import 'setimmediate';

import { Provider } from 'app/provider';
import Head from 'next/head';
import type { SolitoAppProps } from 'solito';

/**
 *
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta name='description' content='Expo + Next.js with Solito. By Fernando Rojo.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
