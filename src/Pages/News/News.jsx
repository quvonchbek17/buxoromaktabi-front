import React, { useState, useEffect } from "react";
import Grid from "../../Components/Grid/Grid";
import utils from "../../assets/styles/utils.module.scss";
import Card from "../../Components/Card/Card";
import styles from "./News.module.scss";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import useQueryHook from "../../hooks/useQueryHook";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import { NEWS } from "../../services/api/api";
import { useTranslation } from "react-i18next";
import { MuiPagination } from "../../Components";
import { useSearchParams, useNavigate } from "react-router-dom";

function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams("page");
  const [page, setPage] = useState(params.get("page"));

  const { data, refetch } = useQueryHook({
    url: NEWS.pagination(page ? page : 1, 8),
  });
  const newsData = data?.data?.data || [];

  useEffect(() => {
    refetch();
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <AppPageMetadata title={t("news")} />
      <div className={styles.container}>
        <h2
          style={{
            fontSize: "3rem",
            textTransform: "uppercase",
            fontFamily: "robot-bold",
          }}
        >
          {t("ourNews")}
        </h2>
        <div className={utils.container}>
          <Grid className minmax={"290px"} gap="30px 20px">
            {data
              ? newsData.map((data) => (
                  <Card
                    type="news"
                    key={data.news_id}
                    data={data}
                    handleClick={() => navigate(`/news/${data.news_id}`)}
                  />
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
                  return <CardSkeleton loading />;
                })}
          </Grid>
        </div>
        <MuiPagination
          size={8}
          setter={setPage}
          count={Math.ceil(data?.data?.size / 8)}
        />
      </div>
    </>
  );
}

export default News;
