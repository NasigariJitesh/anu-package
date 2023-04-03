/* eslint-disable turbo/no-undeclared-env-vars */
import NextScript from 'next/script';

const Script = () => {
  return (
    <>
      <NextScript
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <NextScript strategy='lazyOnload' id='google-analytics'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </NextScript>
    </>
  );
};

export default Script;
