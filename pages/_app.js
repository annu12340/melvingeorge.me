import "../styles/global.css";
import { DefaultSeo } from "next-seo";
import DefaultSeoConfig from "../components/Seo/default-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DefaultSeoConfig}></DefaultSeo>
      <Component {...pageProps} />
    </>
  );
}
