import React from "react";
import style from "./footer.module.scss";
import utils from "../../../assets/styles/utils.module.scss";
import logo from "../../../assets/images/Logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { footer } from "../../../assets/constants/footer";
import { navbar } from "../../../assets/constants/navbar";
import Button from "../../Button/Button";
import Ellipse3 from "../../../assets/images/Ellipse3.png";
import Ellipse5 from "../../../assets/images/Ellipse5.png";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style.bgellipse2}>
        <img alt="" src={Ellipse5} />
      </div>
      <div className={utils.container}>
        <div className={style.control}>
          <div className={style.email}>
            <Link to={"/"}>
              <img src={logo} className={style.logo} alt="footer logo" />
            </Link>
            <p className={style.text}>{t("footerDesc")}</p>
          </div>
          <div className={style.footernavigate}>
            <ul className={style.lists}>
              {footer.social.map((item, index) => {
                return (
                  <li key={index} className={style.list}>
                    <Button
                      type={"nav-link"}
                      isSocial={true}
                      to={item.path}
                      style={{
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {item.name === "Twitter" ? (
                        <AiFillTwitterCircle size={32} />
                      ) : item.name === "Instagram" ? (
                        <AiFillInstagram size={32} />
                      ) : item.name === "You Tube" ? (
                        <AiFillYoutube size={32} />
                      ) : item.name === "Facebook" ? (
                        <AiFillFacebook size={32} />
                      ) : item.name === "Telegram" ? (
                        <FaTelegramPlane size={32} />
                      ) : null}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ul className={style.bottomlist}>
          {navbar.map((item, index) => {
            return (
              <li key={index} className={style.list}>
                <Button
                  type={"nav-link"}
                  to={item.path}
                  style={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {t(item.name)}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.bgellipse1}>
        <img alt="" src={Ellipse3} />
      </div>
    </footer>
  );
};

export default Footer;
