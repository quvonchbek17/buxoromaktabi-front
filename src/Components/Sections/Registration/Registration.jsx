import React, { useState, useEffect } from "react";
import styles from "./Registration.module.scss";
import Button from "../../Button/Button";
import { TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import { ClockLoader } from "react-spinners";
import "react-phone-input-2/lib/material.css";
import { Snackbar, Alert } from "@mui/material";
import useMutationHook from "../../../hooks/useMutationHook";
import { API } from "../../../services/api/api";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftImage from "../../../assets/images/registr.jpg";
import { useTranslation } from "react-i18next";
function Registration() {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const { mutateAsync, isLoading } = useMutationHook({
        method: "post",
        url: API + "/users",
    });
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Snackbar
                sx={{ zIndex: 2222222222222 }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                key={"topleft"}
            >
                {type === "error" ? (
                    <Alert
                        severity="error"
                        sx={{
                            width: "100%",
                            position: "relative",
                            zIndex: 1111111111111,
                        }}
                    >
                        {t("registerWarning")}
                    </Alert>
                ) : (
                    <Alert severity="success" sx={{ width: "100%" }}>
                        {t("registerSuccess")}
                    </Alert>
                )}
            </Snackbar>
            <div className={styles.container} data-aos="fade-up">
                <div className={styles.Registration}>
                    <div className={styles.left}>
                        <img
                            className={styles.img}
                            src={LeftImage}
                            alt="admin photo"
                        />
                    </div>
                    <div className={styles.right}>
                        <h3>{t("courseRegister")}</h3>
                        <p>{t("courseRegisterDesc")}</p>
                        <form
                            name="registration"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                if (
                                    !(
                                        ("+" + phone).match(
                                            /(?:\+[9]{2}[8][0-9]{9})/g
                                        ) && name?.length > 2
                                    )
                                ) {
                                    setOpen(true);
                                    setType("error");
                                }
                                await mutateAsync({
                                    fullname: name,
                                    phone: phone,
                                }).then(() => {
                                    setOpen(true);
                                    setType("success");
                                });
                            }}
                        >
                            <TextField
                                className={styles.input}
                                id="filled-basic"
                                label={t("inputPlacName")}
                                variant="outlined"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <PhoneInput
                                prefix="+"
                                inputClass={styles.phone}
                                country={"uz"}
                                disableDropdown
                                placeholder="+998 90 123 45 67"
                                specialLabel="Nimadir"
                                onlyCountries={["uz"]}
                                countryCodeEditable={false}
                                onChange={(e) => setPhone(e)}
                                isValid={(value, _) => {
                                    if (
                                        !(
                                            "+" +
                                            value.match(
                                                /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/g
                                            )
                                        )
                                    ) {
                                        return "Invalid value";
                                    } else {
                                        return true;
                                    }
                                }}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                            />
                            <div className={styles.btnWrapper}>
                                <Button type={"primary"}>{t("btnSend")}</Button>
                                <ClockLoader
                                    color="white"
                                    size={20}
                                    loading={isLoading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;
