import { t } from "i18next";
import React, { useEffect } from "react";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import { Registration } from "../../Components";
import Ellipse3 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import styles from "./Register.module.scss";

function Register() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      <div className={styles.hehe}>
        <img src={Ellipse3} alt="Shadow" />
      </div>
      <div className={styles.hehe2}>
        <img src={Ellipse2} alt="Shadow" />
      </div>
      <AppPageMetadata title={t("register")} />
      <Registration />
    </div>
  );
}

export default Register;
