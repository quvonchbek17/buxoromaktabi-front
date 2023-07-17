import React from "react";
import { Pagination } from "@mui/material";
import "./MuiPagination.scss";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function MuiPagination({ size, setter, count }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [paginate, setPaginate] = useState(+searchParams.get("page") || 1);

  useEffect(() => {
    navigate(`?page=${paginate}&size=${size || 4}`);
  }, []);

  return (
    <>
      <Pagination
        sx={{
          button: {
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.23)",
            display: "inline-block",
          },
        }}
        color="primary"
        count={count}
        size={"large"}
        variant="outlined"
        shape="rounded"
        page={paginate}
        onChange={(_, page) => {
          navigate({
            search: `?page=${page}&size=${size || 4}`,
          });
          setPaginate(page);
          setter(page);
        }}
      />
    </>
  );
}

export default MuiPagination;
