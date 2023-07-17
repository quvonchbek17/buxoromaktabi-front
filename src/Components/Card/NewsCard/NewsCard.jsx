import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineVisibility } from "react-icons/md";
import Button from "../../Button/Button";
import CardLayout from "../CardLayout/CardLayout";
import styles from "./NewsCard.module.scss";

function NewsCard({ data, handleClick, isImg = true }) {
  const { news_id, news_desc, news_title, news_img, news_view } = data;
  const { t, i18n } = useTranslation();
  return (
    <CardLayout imgUrl={isImg ? news_img : null} onClick={handleClick}>
      <h4 className={styles["title"]}>
        {JSON.parse(news_title)[i18n.language]}
      </h4>
      <div className={styles["description"]}>
        <p>{JSON.parse(news_desc)[i18n.language]}</p>
      </div>

      <div className={styles["wrapper-bottom"]}>
        <div className={styles["view"]}>
          <MdOutlineVisibility className={styles["icon"]} />
          <span>{news_view}</span>
        </div>
        <Button type="link-hover">{t("linkFull")}</Button>
      </div>
    </CardLayout>
  );
}

export default NewsCard;
