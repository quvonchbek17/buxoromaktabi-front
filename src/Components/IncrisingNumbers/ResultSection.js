import React from "react";
import InscrisingNumbers from "./IncrisingNumbers";
import styles from "./IncrisingNumbers.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const ResultSection = ({ data, type }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.results}>
            <div>
                <h2 className={styles.title}>{t("ourResults")}</h2>
                <p className={styles.desc}>{t("ourResultsDesc")}</p>
            </div>
            <div className={styles.numbers}>
                {data.map((data, index) => (
                    <InscrisingNumbers key={index} data={data} />
                ))}
            </div>
            <div className={styles.btns}>
                {type ? (
                    <Button type="primary" to={"/results"}>
                        {t("btnResult")}
                    </Button>
                ) : null}
                <Button type={"link-hover"} to={"/register"}>
                    {t("linkRegister")}
                </Button>
            </div>
        </div>
    );
};

export default ResultSection;
