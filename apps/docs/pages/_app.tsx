/* eslint-disable react-native/no-inline-styles */
import '../public/fonts/font.css';

import Navbar from 'components/navbar';
import RightSidebar from 'components/right-sidebar';
import SEO from 'components/seo';
import Sidebar from 'components/sidebar';
import { AppProps } from 'next/app';
import { View } from 'react-native';
import RootLayout from 'screens/common/provider';

/**
 *
 * @param props App props
 */
export default function App(props: AppProps) {
  return (
    <RootLayout>
      <SEO />
      <Navbar />
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 1440,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Sidebar />
        <props.Component {...props.pageProps} />
        <RightSidebar />
      </View>
    </RootLayout>
  );
}
