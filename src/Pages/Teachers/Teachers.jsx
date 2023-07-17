import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import utils from "../../assets/styles/utils.module.scss";
import Grid from "../../Components/Grid/Grid";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import useQueryHook from "../../hooks/useQueryHook";
import { TEACHERS } from "../../services/api/api";
import styles from "./Teachers.module.scss";
import { MuiPagination } from "../../Components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
function Teachers() {
    const { t } = useTranslation();
    const [params] = useSearchParams("page");
    const [page, setPage] = useState(params.get("page"));

    const { data, refetch } = useQueryHook({
        url: TEACHERS.pagination(page ? page : 1, 8),
    });

    useEffect(() => {
        refetch();
        return () => {
            window.scrollTo(0, 0);
        };
    }, [page]);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const ourResult = data?.data?.data || [];

    return data ? (
        <div className={styles.teachers}>
            <AppPageMetadata title={t("results")} />
            <h1 style={{ color: "white", textTransform: "uppercase" }}>
                {t("ourTeacher")}
            </h1>
            <div className={utils.container} data-aos="fade-up">
                <Grid minmax={"290px"} gap="30px 15px">
                    {ourResult.map((data, i) => (
                        <Card
                            type="teacher"
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
            />
        </div>
    ) : (
        <Loader isLoading={true} />
    );
}

export default Teachers;
