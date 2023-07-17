import React, { useState, useEffect } from "react";
import style from "./navbar.module.scss";
import utils from "../../../assets/styles/utils.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navbar } from "../../../assets/constants/navbar";
import logo from "../../../assets/images/Logo.svg";
import Button from "../../Button/Button";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import Ellipse7 from "../../../assets/images/Ellipse1.png";
import { useLocation } from "react-router-dom";

import cn from "classnames";
import CustomizedMenus from "../../Language/language";
const Navbar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
  }, [width]);
  const handleToggle = () => {
    if (1050 > width) {
      setToggle(false);
    }
    return;
  };
  const classNames = cn(
    style["navlinks"],
    toggle ? `${style["visible"]}` : `${style["hidden"]}`
  );
  return (
    <nav className={style.navbar}>
      <div className={utils.container}>
        <div className={style.control}>
          <Link to={"/"} className={style.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className={classNames}>
            <div className={style.bgellipse}>
              <img alt="" src={Ellipse7} />
            </div>
            <div className={style.mobilelogobar}>
              <Link to={"/"} className={style.logo}>
                <img src={logo} alt="logo" />
              </Link>
              <button
                className={style.toggle}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <HiX className={style.icon} />
                ) : (
                  <HiOutlineMenuAlt1 className={style.icon} />
                )}
              </button>
            </div>
            {navbar.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    type={"nav-link"}
                    to={item.path}
                    onClick={handleToggle}
                    style={{ padding: 0, margin: 0 }}
                    active={
                      pathname === item.path
                        ? true
                        : pathname.startsWith(`/${item.name}`)
                    }
                  >
                    {t(item.name)}
                  </Button>
                </li>
              );
            })}
          </ul>
          <div className={style.toggleContainer}>
            <CustomizedMenus />
            <button className={style.toggle} onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <HiX className={style.icon} />
              ) : (
                <HiOutlineMenuAlt1 size={32} className={style.icon} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
