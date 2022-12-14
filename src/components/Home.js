import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import ScrollDown from "./ScrollDown";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
import Feature_1 from "../images/Feature1.jpg";
import Feature_2 from "../images/Feature2.png";
import Feature_3 from "../images/Feature3.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Parallax } from "react-parallax";
import parallaxImg1 from "../images/parallaxImg-1.jpg";

import oysterOmelet from "../images/menu/oysterOmelet.jpeg"
import pineappleCake from "../images/menu/pineapplecakes.jpeg"
import stinkyTofu from "../images/menu/stinkyTofu.jpeg"
import wheelCake from "../images/menu/wheelcake.jpeg"
import taroCake from "../images/menu/taroCake.jpeg"
import redRiceCake from "../images/menu/redRiceCake.jpeg"

import { FaRegGrinHearts } from "react-icons/fa";
import Map from "../Layout/Map"

import "csshake";

const Home = () => {
  const email = "info@ilhaformosa.co.nz";
  const phoneNum = "+64-4-123-4567";

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`${styles.bannerSetting} ${styles.HomeBanner_1}`}
          ></div>
          <Link to="scroll" spy={true} smooth={true}>
            <ScrollDown />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.bannerSetting} ${styles.HomeBanner_2}`}
          ></div>
          <Link to="scroll" spy={true} smooth={true}>
            <ScrollDown />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.bannerSetting} ${styles.HomeBanner_3}`}
          ></div>
          <Link to="scroll" spy={true} smooth={true}>
            <ScrollDown />
          </Link>
        </SwiperSlide>
      </Swiper>

      <main id="scroll" className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The taste of Taiwan</h2>
          <p className={styles.introduction}>
            <strong>Ilha Formosa</strong> is a Taiwanese restaurant that offers
            the best of Taiwanese cuisine. We specialise in{" "}
            <strong>authentic Taiwanese</strong> street food, and use only the
            finest ingredients to ensure top quality. Let us take you on a
            gastronomic journey to Taiwan !
          </p>
        </section>
        <section>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div data-aos="fade-right">
                <img
                  src={Feature_1}
                  alt="Feature-1"
                  className={styles.featureImg}
                />
              </div>
              <div className={styles.feature} data-aos="fade-left">
                <h3>The meaning of Ilha Formosa</h3>
                <p>
                  In 1544, Portuguese sailors first passed by Taiwan, named
                  Taiwan ' Ilha Formosa' meaning "Beautiful Island" due to the
                  breathtaking scenery.
                </p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <div data-aos="fade-right">
                <img
                  src={Feature_2}
                  alt="Feature-2"
                  className={`${styles.featureImg} ${styles.oppositeFeatureImg}`}
                />
              </div>
              <div
                className={`${styles.feature} ${styles.oppositeFeature}`}
                data-aos="fade-left"
              >
                <h3>Authenticity guaranteed</h3>
                <p>
                  We use the best ingredients to make our dishes. Our chefs are
                  trained in Taiwan and brought their skills to New Zealand. We
                  offer the most authentic Taiwanese cuisine outside of Taiwan!
                </p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <div data-aos="fade-right">
                <img
                  src={Feature_3}
                  alt="Feature-3"
                  className={styles.featureImg}
                />
              </div>
              <div className={styles.feature} data-aos="fade-left">
                <h3>A night market brought to you</h3>
                <p>
                  Enjoy all the flavours of a night market right in Ilha
                  Formosa! We offer a wide range of Taiwanese street food
                  specialities, so you can be sure to find something that will
                  suit your taste buds.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Parallax bgImage={parallaxImg1} strength={300} width={"100vw"}>
        <div className={styles.parallaxImg1}></div>
      </Parallax>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>People's favourites</h2>
          <ul className={styles.popularOptionList}>
            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={oysterOmelet}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}>Oyster Omelet</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>
            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={pineappleCake}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}> Pineapple Cake</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>

            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={redRiceCake}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}>Red Rice Cake</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>
            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={taroCake}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}>Taro Cake</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>
            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={wheelCake}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}>Wheel Cake</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>
            <li
              className={`${styles.optionItem} shake shake-slow>`}
              data-aos="zoom-in-up"
            >
              <img
                className={styles.popularOptionImg}
                src={stinkyTofu}
                alt="popular option"
              />
              <h4 className={styles.optionTitle}>Stinky Tofu</h4>
              <FaRegGrinHearts
                className={styles.medal}
                size={42}
                color={"red"}
              ></FaRegGrinHearts>
            </li>
          </ul>
        </section>
      </main>
      <main className={styles.main}>
        <section className={styles.section}>
          <ul className={styles.contactInfoList}>
            <li className={styles.contactInfoItem}>
              <h4 className={styles.contactTitle}>LOCATION</h4>
              <div className={styles.contactContent}>
                <p>123 Oriental Parade</p>
                <p>Wellington 6011</p>
              </div>
            </li>
            <li className={styles.contactInfoItem}>
              <h4 className={styles.contactTitle}>HOURS</h4>
              <div className={styles.contactContent}>
                <p>
                  Tuesday - Saturday <strong>|</strong> 12pm until late
                </p>
                <p>
                  Sunday - Monday <strong>|</strong> Closed
                </p>
              </div>
            </li>
            <li className={styles.contactInfoItem}>
              <h4 className={styles.contactTitle}>CONTACT</h4>
              <div className={styles.contactContent}>
                <p>
                  <a href={`tel:${phoneNum}`}> 04-123-4567</a>
                </p>
                <p>
                  <a href={`mailto:${email}`}> info@ilhaformosa.co.nz</a>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Map />
    </>
  );
};

export default Home;
