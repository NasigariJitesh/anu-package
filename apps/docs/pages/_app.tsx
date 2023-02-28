import { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from 'screens/common/provider';

/**
 *
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}
