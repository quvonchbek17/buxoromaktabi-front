import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";

import CardLayout from "../CardLayout/CardLayout";
import styles from "./ResultCard.module.scss";
import userImg from "../../../assets/images/login.png";
import { useTranslation } from "react-i18next";

function ResultCard({ data }) {
    const { t } = useTranslation();
    const {
        result_fullname,
        result_year,
        result_university,
        result_points,
        result_status,
    } = data;

    return (
        <CardLayout to="#">
            <div className={styles["wrapper-top"]}>
                <div className={styles["bid-info"]}>
                    <div className={styles["img-box"]}>
                        <img src={userImg} alt="user" />
                    </div>
                    <p>{result_fullname}</p>
                </div>

                <button className={styles["share-btn"]}>
                    <AiOutlineEllipsis className={styles["icon"]} />
                </button>
            </div>

            <div className={styles["description"]}>
                <span>
                    <IoCalendarClearOutline />
                </span>
                <p>{result_year}</p>
            </div>
            <div className={styles["description"]}>
                <span>
                    <HiOutlineLocationMarker />
                </span>
                <p>{result_university}</p>
            </div>

            <div className={styles["wrapper-bottom"]}>
                <div className={styles["point"]}>
                    {result_points} {t("score")}
                </div>
                <div
                    className={styles["status"]}
                    style={{
                        background:
                            result_status === "true" ? "#67C23A" : "#3973cf",
                    }}
                >
                    {result_status === "true" ? t("grant") : t("contract")}
                </div>
            </div>
        </CardLayout>
    );
}

export default ResultCard;
