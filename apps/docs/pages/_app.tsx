/* eslint-disable react-native/no-inline-styles */
import '../public/fonts/font.css';

import Navbar from 'components/navbar';
import RightSidebar from 'components/right-sidebar';
import Sidebar from 'components/sidebar';
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
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 1440,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginVertical: 40,
        }}
      >
        <Sidebar />
        <div id='root-scroll' style={{ height: '100vh', overflow: 'scroll' }}>
          <props.Component {...props.pageProps} />
        </div>
        <RightSidebar />
      </View>
    </RootLayout>
  );
}
