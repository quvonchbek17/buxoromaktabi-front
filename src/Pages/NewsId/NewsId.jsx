import React, { useEffect } from "react";
import useMutationHook from "../../hooks/useMutationHook";
import NewsIdSection from "../../Components/Sections/NewsIdSection/NewsIdSection";
import useQueryHook from "../../hooks/useQueryHook";
import utils from "../../assets/styles/utils.module.scss";
import styles from "./NewsId.module.scss";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import { useParams } from "react-router-dom";
import { NEWS } from "../../services/api/api";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, OwlSlider } from "../../Components";
import Loader from "../../Components/Loader/Loader";

function NewsId() {
  const navigate = useNavigate();
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

  const { newsId } = useParams();
  // news one data
  const { t, i18n } = useTranslation();
  const { mutate, data, isSuccess } = useMutationHook({
    method: "post",
    url: NEWS.one_news,
  });
  const newData = data?.data?.data[0] || {};

  // carousel data
  const { data: recData, isSuccess: isSuccessRec } = useQueryHook({
    url: NEWS.pagination(1, 8),
  });
  const newsData = recData?.data?.data || [];

  useEffect(() => {
    if (newsId) {
      mutate({
        id: newsId,
      });
    }
    return () => {
      window.scrollTo(0, 0);
    };
  }, [newsId]);

  if (isSuccess && isSuccessRec) {
    return (
      <div className={styles["dynamic-news-box"]}>
        <div className={styles["news-id-background"]}>
          <div className={styles["bg-ellipse"]}>
            <img alt="" src={Ellipse1} />
          </div>
        </div>
        <div className={utils.container}>
          <NewsIdSection data={newData} />
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "robot-bold",
              color: "white",
            }}
          >
            {t("otherNews")}
          </h2>
          <OwlSlider breakpoints={bp}>
            {newsData.map((data, index) => (
              <Card
                key={index}
                type="news"
                data={data}
                handleClick={() => {
                  navigate(`/news/${data.news_id}`);
                }}
              />
            ))}
          </OwlSlider>
        </div>
      </div>
    );
  } else {
    return <Loader isLoading={true} />;
  }
}

export default NewsId;
