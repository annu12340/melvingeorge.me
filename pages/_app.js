import "../styles/global.css";
import { DefaultSeo } from "next-seo";
import SEO from "../components/Seo/next-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO}></DefaultSeo>
      <Component {...pageProps} />
    </>
  );
}
