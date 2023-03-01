/* eslint-disable react-native/no-inline-styles */
import { getTheme } from 'anu/config';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';
// @ts-expect-error REASON: Types are not available
import { AppRegistry } from 'react-native-web';

const theme = getTheme();

// Follows the setup for react-native-web:
// https://necolas.github.io/react-native-web/docs/setup/#root-element
// Plus additional React Native scroll and text parity styles for various
// browsers.
// Force Next-generated DOM elements to fill their parent's height
const style = `
html, body, #__next {
  -webkit-overflow-scrolling: touch;
}


::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: ${theme.colors.$surfaceVariant};
}

::-webkit-scrollbar-thumb {
  background: ${theme.colors.$onSurfaceVariant};
  border-radius: 5px 
}

#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
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
