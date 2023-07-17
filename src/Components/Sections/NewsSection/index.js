import OwlSlider from "../../OwlSlider/OwlSlider";
import styles from "./our-course.module.scss";
import Ellipse3 from "../../../assets/images/Ellipse3.png";
import utils from "../../../assets/styles/utils.module.scss";
import Card from "../../Card/Card";
import useMutationHook from "../../../hooks/useMutationHook";
import { NEWS } from "../../../services/api/api";
import { useEffect } from "react";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function NewsSection() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { mutate, data } = useMutationHook({
        method: "get",
        url: NEWS.pagination(1, 8),
    });

    useEffect(() => {
        mutate();
        AOS.init({ duration: 2000 });
    }, []);

    const newsData = data?.data?.data || [];

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
                    {t("ourNews")}
                </h2>
                <OwlSlider breakpoints={bp}>
                    {data
                        ? newsData.map((data, index) => {
                              return (
                                  <Card
                                      handleClick={() => {
                                          navigate(`news/${data.news_id}`);
                                      }}
                                      key={index}
                                      type="news"
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

export default NewsSection;
