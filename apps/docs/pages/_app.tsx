/* eslint-disable react/no-unknown-property */
/* eslint-disable react-native/no-inline-styles */
import 'setimmediate';
import 'raf/polyfill';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import '../public/fonts/font.css';

import { Container } from 'anu/lib';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import RightSidebar from 'components/right-sidebar';
import Scripts from 'components/scripts';
import SEO from 'components/seo';
import Sidebar from 'components/sidebar';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootLayout from 'screens/common/provider';
import { footerLinks } from 'services/docs/footer';

/**
 *
 * @param props App props
 */
export default function App(props: AppProps) {
  const [backgroundColor, setBackgroundColor] = useState('');

  const { height, width } = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SEO />
      <Scripts />
      <RootLayout backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}>
        <Container disableGutters sx={{ height: height, width: width, overflow: 'scroll' }}>
          <Head>
            <style>{`body { background-color: ${backgroundColor} !important; }`}</style>
          </Head>
          <Navbar />

          <Container
            disableGutters
            justify='space-between'
            style={{
              flexDirection: 'row',
              maxWidth: props.router.pathname === '/' ? undefined : 1440,
              width: width,
              marginTop: 70,
              alignSelf: 'center',
            }}
          >
            <Sidebar />
            {/* <props.Component {...props.pageProps} /> */}
            <RightSidebar />
          </Container>
          {props.router.pathname === '/' ? null : <Footer {...footerLinks} />}
        </Container>
      </RootLayout>
    </GestureHandlerRootView>
  );
}
