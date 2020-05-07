import { useState } from "react";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import DefaultSeoConfig from "../default-seo.config";
import {
  activeTabContext,
  setActiveTabContext,
} from "../context/NavigationContext";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // Active Tab Global State
  const [activeTab, setActiveTab] = useState("");

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
      <activeTabContext.Provider value={activeTab}>
        <setActiveTabContext.Provider value={setActiveTab}>
          <Component {...pageProps} />
        </setActiveTabContext.Provider>
      </activeTabContext.Provider>
    </>
  );
}
