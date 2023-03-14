/* eslint-disable react-native/no-inline-styles */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';
// @ts-expect-error REASON: Types are not available
import { AppRegistry } from 'react-native-web';

// Follows the setup for react-native-web:
// https://necolas.github.io/react-native-web/docs/setup/#root-element
// Plus additional React Native scroll and text parity styles for various
// browsers.
// Force Next-generated DOM elements to fill their parent's height
const style = `
html, body, #__next {
  -webkit-overflow-scrolling: touch;
}

* {
  margin:0;
  padding:0;
}

::-webkit-scrollbar {
  width: 2.5px;
  height: 2.5px;
  background-color: 'transparent';
}

::-webkit-scrollbar-thumb {
  background: ${'#46464f'};
  border-radius: 5px 
}

#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#root-scroll::-webkit-scrollbar {
  display: none;
}

#root-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-behavior: smooth; !important
}

body {
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent('main', () => Main);
    const { getStyleElement } = AppRegistry.getApplication('main');
    const page = await renderPage();
    const styles = [<style key='react-native-style' dangerouslySetInnerHTML={{ __html: style }} />, getStyleElement()];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head />
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
