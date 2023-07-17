import React, { useEffect } from "react";
import draftToHtml from "draftjs-to-html";
import { useTranslation } from "react-i18next";
import styles from "./NewsIdSection.module.scss";
import { MdOutlineVisibility } from "react-icons/md";
import AppPageMetadata from "../../AppPageMetaData/AppPageMetaData";
import useMutationHook from "../../../hooks/useMutationHook";
import { NEWS } from "../../../services/api/api";

function NewsIdSection({ data }) {
  const { t, i18n } = useTranslation();
  const { news_data, news_desc, news_id, news_img, news_title, news_view } =
    data;
  const postHtml = JSON.parse(news_data);
  const html = draftToHtml(postHtml[i18n.language]);

  // view plus mutation
  const { mutate } = useMutationHook({
    method: "put",
    url: NEWS.put_news,
    onSelect: (data) => data?.data?.data,
  });

  const viewPlusFunc = () => {
    const newPost = {
      data: news_data,
      desc: news_desc,
      id: news_id,
      imgUrl: news_img,
      title: news_title,
      view: news_view ? news_view + 1 : 1,
    };

    mutate(newPost);
  };

  useEffect(() => {
    viewPlusFunc();
  }, []);

  return (
    <>
      <AppPageMetadata title={JSON.parse(news_title)[i18n.language]} />
      <div className={styles["news-id-box"]}>
        <div className={styles["news-id-box__container"]}>
          <h2
            className={styles["title"]}
            style={{
              fontSize: "3rem",
              fontFamily: "robot-bold",
              color: "white",
              textAlign: "center",
            }}
          >
            {JSON.parse(news_title)[i18n.language]}
          </h2>
          <div className={styles["img-box"]}>
            <img src={news_img} alt={news_title} />
          </div>
          <div
            className={styles["data"]}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className={styles["wrapper-bottom"]}>
            <div className={styles["by"]}>BUXORO MAKTABI</div>
            <div className={styles["view"]}>
              <MdOutlineVisibility className={styles["icon"]} />
              <span>{news_view + 1 || 0} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsIdSection;
