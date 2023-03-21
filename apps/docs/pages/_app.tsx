/* eslint-disable react/no-unknown-property */
/* eslint-disable react-native/no-inline-styles */
import '../public/fonts/font.css';

import { Container } from 'anu/lib';
import Navbar from 'components/navbar';
import RightSidebar from 'components/right-sidebar';
import SEO from 'components/seo';
import Sidebar from 'components/sidebar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import RootLayout from 'screens/common/provider';

/**
 *
 * @param props App props
 */
export default function App(props: AppProps) {
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <>
      <SEO />
      <RootLayout backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}>
        <Container disableGutters>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <style>{`body { background-color: ${backgroundColor} !important; }`}</style>
          </Head>
          <Navbar />
          <Container
            disableGutters
            style={{
              flexDirection: 'row',
              maxWidth: 1440,
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Sidebar />
            <props.Component {...props.pageProps} />
            <RightSidebar />
          </Container>
        </Container>
      </RootLayout>
    </>
  );
}
