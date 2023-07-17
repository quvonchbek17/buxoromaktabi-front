import React from "react";
import CardLayout from "../CardLayout/CardLayout";
import styles from "./CourseCard.module.scss";
import { useTranslation } from "react-i18next";

function CourseCard({ data }) {
  const { course_desc, course_img, course_name, course_price } = data;

  const { i18n } = useTranslation();

  return (
    <CardLayout imgUrl={course_img} to="/register">
      <h4 className={styles["title"]}>{course_name}</h4>
      <div className={styles["description"]}>
        <p>{JSON.parse(course_desc)[i18n.language]}</p>
      </div>

      <div className={styles["wrapper-bottom"]}>
        <div className={styles["price"]}>{course_price} so'm</div>
      </div>
    </CardLayout>
  );
}

export default CourseCard;
