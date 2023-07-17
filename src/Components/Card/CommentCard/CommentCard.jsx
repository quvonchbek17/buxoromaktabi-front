import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

import CardLayout from "../CardLayout/CardLayout";
import styles from "./CommentCard.module.scss";

function CommentCard({ data }) {
  const {
    comment_name: name,
    whois = "Mijoz",
    comment_desc: body,
    date = "12/11/2022",
    img_url: imgUrl,
  } = data;

  return (
    <CardLayout to="#">
      <div className={styles["wrapper-top"]}>
        <div className={styles["bid-info"]}>
          <div className={styles["img-box"]}>
            <img src={imgUrl} alt="" />
          </div>
          <p>{name}</p>
        </div>

        <button className={styles["share-btn"]}>
          <AiOutlineEllipsis className={styles["icon"]} />
        </button>
      </div>

      <h4 className={styles["title"]}>{whois}</h4>
      <div className={styles["description"]}>
        <p>{body}</p>
      </div>

      <div className={styles["wrapper-bottom"]}>
        <div className={styles["price"]}>{date}</div>
        <div className={styles["view"]}></div>
      </div>
    </CardLayout>
  );
}

export default CommentCard;
