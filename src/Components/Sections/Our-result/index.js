import utils from "../../../assets/styles/utils.module.scss";
import ResultSection from "../../IncrisingNumbers/ResultSection";
import styles from "./our-result.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";

function OurResult({ hasBtn }) {
    const { t } = useTranslation();
    const incdata = [
        {
            duration: 7,
            end: 6316,
            desc: t("ourResultsItem1"),
        },
        {
            duration: 7,
            end: 1129,
            desc: t("ourResultsItem2"),
        },
        {
            duration: 7,
            end: 5187,
            desc: t("ourResultsItem3"),
        },
        {
            duration: 7,
            end: 370,
            desc: t("ourResultsItem4"),
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className={styles["result-section"]} data-aos="fade-up">
            <div className={utils.container}>
                <div className={styles["result-background"]}>
                </div>
                {hasBtn ? (
                    <ResultSection data={incdata} type={true} />
                ) : (
                    <ResultSection data={incdata} type={false} />
                )}
            </div>
        </div>
    );
}

export default OurResult;
