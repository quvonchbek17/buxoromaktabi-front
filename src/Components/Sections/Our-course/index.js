import OwlSlider from "../../OwlSlider/OwlSlider";
import styles from "./our-course.module.scss";
import Ellipse3 from "../../../assets/images/Ellipse3.png";
import utils from "../../../assets/styles/utils.module.scss";
import Card from "../../Card/Card";
import { useTranslation } from "react-i18next";
import useQueryHook from "../../../hooks/useQueryHook";
import { COURSES } from "../../../services/api/api";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurCourse() {
  const { t } = useTranslation();
  const { data } = useQueryHook({
    url: COURSES.pagination(1, 8),
  });

  const coursedata = data?.data?.data || [];
  const bp = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    850: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles["course-section"]} data-aos="fade-up">
      <div className={utils.container}>
        <div className={styles["course-background"]}>
          <div className={styles["bg-ellipse"]}>
            <img alt="" src={Ellipse3} />
          </div>
        </div>
        <h2
          style={{
            fontSize: "3rem",
            textTransform: "uppercase",
            fontFamily: "robot-bold",
          }}
        >
          {t("ourCourse")}
        </h2>
        <OwlSlider breakpoints={bp}>
          {data
            ? coursedata.map((data, index) => {
                return <Card key={index} type="course" data={data} />;
              })
            : [1, 2, 3, 4, 5].map((e) => {
                return <CardSkeleton key={e} loading />;
              })}
        </OwlSlider>
      </div>
    </div>
  );
}

export default OurCourse;
