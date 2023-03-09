/* eslint-disable react-native/no-inline-styles */
import '../public/fonts/font.css';

import Navbar from 'components/navbar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { View } from 'react-native';
import RootLayout from 'screens/common/provider';

/**
 *
 * @param props App props
 */
export default function App(props: AppProps) {
  return (
    <RootLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <View style={{ marginTop: 20 }}>
        <props.Component {...props.pageProps} />
      </View>
    </RootLayout>
  );
}
