import OwlSlider from "../../OwlSlider/OwlSlider";
import utils from "../../../assets/styles/utils.module.scss";
import styles from "./our-teacher.module.scss";
import Card from "../../Card/Card";
import useQueryHook from "../../../hooks/useQueryHook";
import { TEACHERS } from "../../../services/api/api";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function OurTeacher() {
    const { t } = useTranslation();
    const { data } = useQueryHook({
        url: TEACHERS.pagination(1, 8),
    });

    const teacherdata = data?.data?.data || [];

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
            slidesPerView: data?.data?.size < 4 ? 3 : 4,
            spaceBetween: 20,
        },
        1450: {
            slidesPerView: data?.data?.size < 4 ? 3 : 4,
            spaceBetween: 20,
        },
    };
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className={styles["teacher-section"]} data-aos="fade-up">
            <div className={utils.container}>
                <h2
                    style={{
                        fontSize: "3rem",
                        textTransform: "uppercase",
                        fontFamily: "robot-bold",
                    }}
                >
                    {t("ourTeacher")}
                </h2>
                <OwlSlider breakpoints={bp}>
                    {data
                        ? teacherdata.map((data, index) => {
                              return (
                                  <Card
                                      key={index}
                                      type="teacher"
                                      data={data}
                                  />
                              );
                          })
                        : [1, 2, 3, 4, 5].map((e) => {
                              return <CardSkeleton key={e} loading />;
                          })}
                </OwlSlider>
            </div>
        </div>
    );
}

export default OurTeacher;
