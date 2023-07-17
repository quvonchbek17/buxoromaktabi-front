import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import CardLayout from "../CardLayout/CardLayout";
import styles from "./TeacherCard.module.scss";

function TeacherCard({ data }) {
  const { t, i18n } = useTranslation();
  const {
    teacher_name,
    teacher_surname,
    teacher_experince,
    teacher_subjects,
    teacher_about,
    teacher_img,
  } = data;

  return (
    <CardLayout imgUrl={teacher_img}>
      <div className={styles["wrapper-top"]}>
        <div className={styles["bid-info"]}>
          <div className={styles["img-box"]}>
            <BsPatchCheckFill className={styles["check"]} />
          </div>
          <p>{`${teacher_experince} yillik tajriba`}</p>
        </div>

        <button className={styles["share-btn"]}>
          <AiOutlineEllipsis className={styles["icon"]} />
        </button>
      </div>

      <h4 className={styles["title"]}>
        {teacher_name} {teacher_surname}
      </h4>
      <div className={styles["description"]}>
        <p>{JSON.parse(teacher_about)[i18n.language]}</p>
      </div>

      <div className={styles["wrapper-bottom"]}>
        <div className={styles["subjects"]}>{teacher_subjects}</div>
        <span>{t("teacherDesc")}</span>
      </div>
    </CardLayout>
  );
}

export default TeacherCard;
