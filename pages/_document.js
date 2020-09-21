import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer/Footer";

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
          <script
            async
            src="https://cdn.requestmetrics.com/agent/current/rm.js"
            data-rm-token="q9pq8mv:f4qg9se"
          ></script>
        </Head>
        <body className="bg-gray-100 text-base">
          <Main />
          <NextScript />
          <footer>
            <Footer />
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
