/* eslint-disable react/no-unknown-property */
/* eslint-disable react-native/no-inline-styles */
import '../public/fonts/font.css';

import { Container } from 'anu/lib';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import RightSidebar from 'components/right-sidebar';
import SEO from 'components/seo';
import Sidebar from 'components/sidebar';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
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
    <>
      <SEO />
      <RootLayout backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}>
        <Container disableGutters sx={{ height: height, width: width, overflow: 'scroll' }}>
          <Head>
            <style>{`body { background-color: ${backgroundColor} !important; }`}</style>
          </Head>
          <Navbar />
          <Container
            disableGutters
            style={{
              flexDirection: 'row',
              maxWidth: 1440,
              width: width,
              marginTop: 70,
              alignSelf: 'center',
            }}
          >
            <Sidebar />
            <props.Component {...props.pageProps} />
            <RightSidebar />
          </Container>
          {props.router.pathname === '/' ? null : <Footer {...footerLinks} />}
        </Container>
      </RootLayout>
    </>
  );
}
