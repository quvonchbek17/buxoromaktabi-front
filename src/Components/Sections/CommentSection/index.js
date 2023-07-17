import React, { useEffect } from "react";
import utils from "../../../assets/styles/utils.module.scss";
import styles from "./commentSection.module.scss";
import OwlSlider from "../../OwlSlider/OwlSlider";
import Ellipse4 from "../../../assets/images/Ellipse4.png";
import Card from "../../Card/Card";
import useQueryHook from "../../../hooks/useQueryHook";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import { COMMENTS } from "../../../services/api/api";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function CommentSection() {
    const { t } = useTranslation();
    const { data } = useQueryHook({
        url: COMMENTS.pagination(1, 8),
    });

    const CommentData = data?.data?.data || [];

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
            slidesPerView: 3,
            spaceBetween: 20,
        },
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles["comment-section"]} data-aos="fade-up">
            <div className={utils.container}>
                <div className={styles["comment-background"]}>
                    <div className={styles["bg-ellipse"]}>
                        <img alt="" src={Ellipse4} />
                    </div>
                </div>
                <div className={styles["wrapper"]}>
                    <div className={styles["top"]}>
                        <h2
                            style={{
                                fontSize: "3rem",
                                fontFamily: "robot-bold",
                                marginBottom: "0",
                                textTransform: "uppercase",
                                padding: "0",
                            }}
                        >
                            {t("ourCustomer")}
                        </h2>
                        <p>{t("ourCustomerDesc")}</p>
                    </div>
                    <OwlSlider breakpoints={bp}>
                        {data
                            ? CommentData.map((data, i) => {
                                  return (
                                      <Card
                                          key={i}
                                          type="comment"
                                          data={data}
                                      />
                                  );
                              })
                            : [1, 2, 3, 4, 5].map((e) => {
                                  return (
                                      <CardSkeleton
                                          width={420}
                                          key={e}
                                          loading
                                      />
                                  );
                              })}
                    </OwlSlider>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;
