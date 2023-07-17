import styles from "./show-case.module.scss";
import Button from "../../Button/Button";
import utils from "../../../assets/styles/utils.module.scss";
import Ellipse1 from "../../../assets/images/Ellipse1.png";
import Ellipse2 from "../../../assets/images/Ellipse2.png";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ShowCase() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className={styles["show-case"]}>
            <div className={styles["hero-background"]}>
                <div className={styles["bg-ellipse1"]}>
                    <img alt="" src={Ellipse1} />
                </div>
                <div className={styles["bg-ellipse2"]}>
                    <img alt="" src={Ellipse2} />
                </div>
            </div>
            <div className={utils.container}>
                <div className={styles["content"]} data-aos="fade-right">
                    <div className={styles["content__text-block"]}>
                        <h1>BUXORO MAKTABI</h1>
                        <p>
                            {t("showcaseDesc1")} {t("showcaseDesc2")}
                        </p>
                    </div>
                    <div className={styles["content__button-block"]}>
                        <Button type={"primary"} to="/courses">
                            {t("btnCourse")}
                        </Button>
                        <Button type={"link-hover"} to={"/register"}>
                            {t("linkRegister")}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowCase;
