import '../public/fonts/font.css';

import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import { View } from 'dripsy';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ScrollView } from 'react-native';
import RootLayout from 'screens/common/provider';

/**
 *
 * @param root0.Component
 * @param root0.pageProps
 * @param root0.Component.Component
 * @param root0.Component.pageProps
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <View
        sx={{
          flexDirection: 'row',
          maxWidth: 1440,
          width: '100%',
          alignSelf: 'center',
          marginVertical: 40,
        }}
      >
        <Sidebar />
        {/* <ScrollView>
          <Component {...pageProps} />
        </ScrollView> */}
      </View>
    </RootLayout>
  );
}
