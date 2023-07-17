import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Button.module.scss";
import rightArrow from "../../assets/svg/right-arrow.svg";

function Button({
  type,
  active = false,
  children,
  to,
  disabled,
  isSocial = false,
  handleClick,
  ...others
}) {
  const classNames = cn(
    styles["button"],
    type === "primary"
      ? `${styles["primary"]}`
      : type === "primary-outline"
      ? `${styles["primary-outline"]}`
      : type === "link-hover"
      ? `${styles["link-hover"]}`
      : type === "nav-link"
      ? `${styles["nav-link"]}`
      : `${styles["link"]}`,
    disabled && `${styles["disabled"]}`,
    active && `${styles["active"]}`
  );

  return (
    <>
      {to ? (
        isSocial ? (
          <a href={to} target="_blank" className={classNames} {...others}>
            <span>{children}</span>
            {type === "link-hover" ? (
              <div className={styles["icon-right"]}>
                <img src={rightArrow} alt="right-arrow" />
              </div>
            ) : null}
          </a>
        ) : (
          <Link to={to} className={classNames} {...others}>
            <span>{children}</span>
            {type === "link-hover" ? (
              <div className={styles["icon-right"]}>
                <img src={rightArrow} alt="right-arrow" />
              </div>
            ) : null}
          </Link>
        )
      ) : (
        <button
          onClick={disabled ? null : handleClick}
          className={classNames}
          {...others}
        >
          <span>{children}</span>
          {type === "link-hover" ? (
            <div className={styles["icon-right"]}>
              <img src={rightArrow} alt="right-arrow" />
            </div>
          ) : null}
        </button>
      )}
    </>
  );
}

export default Button;
