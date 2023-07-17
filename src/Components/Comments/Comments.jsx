import React from "react";
import styles from "./Comments.module.scss";

function Comments({ name, whois, body, date, imgUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={imgUrl} alt="Nimadir" />
        <span>
          <div className={styles.name}>{name}</div>
          <div className={styles.whois}>{whois}</div>
        </span>
      </div>
      <div className={styles.body}>{body}</div>
      <div className={styles.bottom}>{date}</div>
    </div>
  );
}

export default Comments;
