import React, { useEffect } from "react";
import bm from "../../assets/images/bm.jpg";
import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  return (
    <div className={styles["news-id-box"]} data-aos={"fade-up"}>
      <div className={styles["news-id-box__container"]}>
        <div className={styles["img-box"]}>
          <img src={bm} alt={"biz haqimizda"} />
        </div>
        <div className={styles["data"]}>
          {t("aboutDesc1")}
          {t("aboutDesc2")}
          {t("aboutDesc3")}
        </div>
        <div className={styles["wrapper-bottom"]}>
          <div className={styles["by"]}>BUXORO MAKTABI</div>
        </div>
      </div>
    </div>
  );
}
export default About;
