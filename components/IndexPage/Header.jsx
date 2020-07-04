// ICONS
import dynamic from "next/dynamic";
const FontAwesomeIcon = dynamic(
  async () => (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon,
);

import {
  faGithub,
  faFacebook,
  faTwitter,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <>
    <header className="z-0 pb-12 bgHero">
      {/* <!-- Header Container --> */}
      <div className="container max-w-screen-md mx-auto px-4">
        {/* <!-- Hero section --> */}
        <section
          className="flex flex-col items-center justify-center lg:flex-row pt-6"
        >
          {/* <!-- Hero Section: About Text --> */}
          <div className="flex flex-col order-last lg:order-first">
            <p
              className="pb-2 text-white font-medium text-2xl lg:text-3xl leading-normal"
            >
              Hi, I'm Melvin George. I help the world by building quality
              software.
            </p>
            <p className="pt-2 text-left text-white">
              <a href="https://www.github.com/melvin2016" target="blank">
                <FontAwesomeIcon
                  className=" transition-colors duration-300 hover:text-gray-900"
                  icon={faGithub}
                  size="2x"
                  width="0"
                />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://mozillians.org/en-US/u/melvin2016/"
                target="blank"
              >
                <FontAwesomeIcon
                  className=" transition-colors duration-300 hover:text-orange-300"
                  icon={faFirefoxBrowser}
                  size="2x"
                  width="0"
                />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/alkitj10" target="blank">
                <FontAwesomeIcon
                  className="transition transition-colors duration-300 hover:text-blue-700"
                  icon={faFacebook}
                  size="2x"
                  width="0"
                />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.twitter.com/developer_369" target="blank">
                <FontAwesomeIcon
                  className=" transition-colors duration-300 hover:text-blue-300"
                  icon={faTwitter}
                  size="2x"
                  width="0"
                />
              </a>
            </p>
          </div>
          {/* Hero Section: Image */}
          <div className="order-first lg:order-last">
            <div
              className="heroImg block lg:hidden w-full"
            />
            <img
              width="640"
              height="360"
              className="hidden lg:block order-first md:order-last z-0"
              src={require("../../public/me2.png?webp")}
              alt="Picture of Melvin george"
            />
          </div>
        </section>
      </div>
    </header>
    <style jsx>
      {`
      .heroImg {
        width: 160px;
        height: 160px;
        margin: 25px auto;
        border-radius: 50%;
        background: url(${require("../../public/me.png?webp")}) -30px / cover
          no-repeat #4299E1;
        background-repeat: no-repeat;
      }
    `}
    </style>
  </>
);

export default Header;
