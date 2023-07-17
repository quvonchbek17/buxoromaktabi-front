import React from "react";
import Button from "../../Button/Button";
import styles from "./CardLayout.module.scss";

function CardLayout({ imgUrl, to, children, ...others }) {
  return (
    <div className={styles["card-box"]} {...others}>
      <div className={styles["card-rotate-bg"]}></div>

      <div className={styles["card"]}>
        {imgUrl ? (
          <div className={styles["card-head"]}>
            <img src={imgUrl} alt="name" />
            {to ? (
              <div className={styles["bid-btn"]}>
                <Button type="primary" to={to}>
                  Batafsil
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={styles["card-body"]}>{children}</div>
      </div>
    </div>
  );
}

export default CardLayout;
