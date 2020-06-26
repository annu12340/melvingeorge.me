import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import DefaultSeoConfig from "../default-seo.config";
import { ActiveTabProvider } from "../context/ActiveTab";
import "../styles/global.css";
import "highlight.js/styles/night-owl.css";

const App = ({ Component, pageProps }) => {
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
          "https://twitter.com/developer_369",
        ]}
      />
      <ActiveTabProvider>
        <Component {...pageProps} />
      </ActiveTabProvider>
    </>
  );
};

export default App;
