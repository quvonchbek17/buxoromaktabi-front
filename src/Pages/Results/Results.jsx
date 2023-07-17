import React from "react";
import Card from "../../Components/Card/Card";
import OurResult from "../../Components/Sections/Our-result";
import utils from "../../assets/styles/utils.module.scss";
import Grid from "../../Components/Grid/Grid";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import { t } from "i18next";
import useQueryHook from "../../hooks/useQueryHook";
import { RESULTS } from "../../services/api/api";
import { useEffect } from "react";
import styles from "./Results.module.scss";
import { MuiPagination } from "../../Components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Ellipse7 from "../../assets/images/Ellipse7.png";

function Results() {
  const [params] = useSearchParams("page");
  const [page, setPage] = useState(params.get("page"));

  const { data, refetch } = useQueryHook({
    url: RESULTS.pagination(page ? page : 1, 8),
  });

  useEffect(() => {
    refetch();
    return () => {
      window.scrollTo(0, 0);
    };
  }, [page]);

  const ourResult = data?.data?.data || [];

  return data ? (
    <div className={styles.results}>
      <AppPageMetadata title={t("results")} />
      <OurResult hasBtn={false} />
      <div className={styles["bg-ellipse"]}>
        <img alt="" src={Ellipse7} />
      </div>
      <div className={utils.container}>
        <Grid minmax={"290px"} gap="30px 15px">
          {ourResult.map((data, i) => (
            <Card type="result" key={i} id={data?.id} data={data || []} />
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

export default Results;
