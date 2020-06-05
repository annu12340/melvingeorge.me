import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo-96x96.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
          <meta name="theme-color" content="#90cdf4" />
          {/* Google Tag manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168709438-1"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-168709438-1');
          </script>
        </Head>
        <body className="bg-gray-100 text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
