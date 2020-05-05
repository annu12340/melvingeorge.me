import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import DefaultSeoConfig from "../default-seo.config";
import "../styles/global.css";

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
