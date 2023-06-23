import React from "react";
import vg from "../assets/png.png";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>QuickFix</h1>
          <p>
            Empowering Your Digital Journey with Expert Repair and IT Solutions
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Unleash the power of your technology with our expert computer repair
            and IT solutions. Seamless technology experience guaranteed: Leave
            your tech worries behind.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to Quickfix, where you can find trustworthy IT support and
            computer repair. We are your go-to specialists for fixing computer
            problems and improving your digital infrastructure. Our hardworking
            group of knowledgeable experts is here to offer quick fixes that
            will keep your computers operating efficiently. We provide complete
            corporate IT solutions, such as network configuration, data
            recovery, and cybersecurity services. Our team works diligently to
            provide top-notch service, open communication, and swift solutions
            catered to your unique needs. Enjoy tranquilly of mind understanding
            that your IT problems and computer repair are in competent hands.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
