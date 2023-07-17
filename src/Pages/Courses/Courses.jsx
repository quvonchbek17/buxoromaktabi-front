import React from "react";
import Card from "../../Components/Card/Card";
import utils from "../../assets/styles/utils.module.scss";
import Grid from "../../Components/Grid/Grid";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import { t } from "i18next";
import useQueryHook from "../../hooks/useQueryHook";
import { COURSES } from "../../services/api/api";
import { useEffect } from "react";
import styles from "./Courses.module.scss";
import { MuiPagination } from "../../Components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Courses() {
    const { t } = useTranslation();
    const [params] = useSearchParams("page");
    const [page, setPage] = useState(params.get("page"));

    const { data, refetch } = useQueryHook({
        url: COURSES.pagination(page ? page : 1, 8),
    });

    useEffect(() => {
        refetch();
        AOS.init({ duration: 800 });
        return () => {
            window.scrollTo(0, 0);
        };
    }, [page]);

    const ourResult = data?.data?.data || [];

    return data ? (
        <div className={styles.teachers}>
            <AppPageMetadata title={t("results")} />
            <h1
                style={{ textTransform: "uppercase", color: "white" }}
                data-aos="fade-up"
            >
                {t("ourCourse")}
            </h1>
            <div
                className={utils.container}
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <Grid minmax={"290px"} gap="30px 15px">
                    {ourResult.map((data, i) => (
                        <Card
                            type="course"
                            key={i}
                            id={data?.id}
                            data={data || []}
                        />
                    ))}
                </Grid>
            </div>
            <MuiPagination
                size={8}
                setter={setPage}
                count={Math.ceil(data?.data?.size / 8)}
                data-aos="fade-up"
                data-aos-delay="200"
            />
        </div>
    ) : (
        <Loader isLoading={true} />
    );
}

export default Courses;
