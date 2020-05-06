// CSS
import styles from "../../styles/Header.module.css";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import Navigation from "../Navigation/Navigation";

const Header = () => (
  <header className={`${styles.bgHero} z-0 pb-12`}>
    {/* <!-- Header Container --> */}
    <div className="container max-w-screen-md mx-auto px-4">
      {/* <!-- Navigation Section --> */}
      <Navigation />
      {/* <!-- Hero section --> */}
      <section className="flex flex-col items-center justify-center lg:flex-row pt-6">
        {/* <!-- Hero Section: About Text --> */}
        <div className="flex flex-col order-last lg:order-first">
          <p className="pb-2 text-blue-600 font-normal text-2xl lg:text-3xl leading-normal">
            Hi, I'm Melvin George. I help the world by building quality
            software.
          </p>
          <p className="pt-2 text-left text-blue-300">
            <a href="https://www.github.com/melvin2016" target="blank">
              <FontAwesomeIcon
                className="transition transition-colors duration-300 hover:text-gray-900"
                icon={faGithub}
                size="2x"
              />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://mozillians.org/en-US/u/melvin2016/" target="blank">
              <FontAwesomeIcon
                className="transition transition-colors duration-300 hover:text-orange-500"
                icon={faFirefoxBrowser}
                size="2x"
              />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/alkitj10" target="blank">
              <FontAwesomeIcon
                className="transition transition-colors duration-300 hover:text-blue-700"
                icon={faFacebook}
                size="2x"
              />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.twitter.com/melvin2016_" target="blank">
              <FontAwesomeIcon
                className="transition transition-colors duration-300 hover:text-blue-400"
                icon={faTwitter}
                size="2x"
              />
            </a>
          </p>
        </div>
        {/* Hero Section: Image */}
        <div className="order-first lg:order-last">
          <div className={`${styles.heroImg} block lg:hidden`} />
          <img
            width="640"
            height="360"
            className="hidden lg:block order-first md:order-last w-full z-0"
            src={require("../../public/me.png?webp")}
            alt="Picture of Melvin george"
          />
        </div>
      </section>
    </div>
  </header>
);

export default Header;
