import "../styles/global.css";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import DefaultSeoConfig from "../components/Seo/default-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DefaultSeoConfig}></DefaultSeo>
      <SocialProfileJsonLd
        type="Person"
        name="MELVIN GEORGE"
        url="http://melvingeorge.me/"
        sameAs={[
          "https://www.facebook.com/alkitj10",
          "https://github.com/melvin2016",
          "https://www.linkedin.com/in/melvin2016/",
          "https://twitter.com/melvin2016_",
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
