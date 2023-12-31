import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function CardSkeleton(props) {
  const { loading = false, element, width } = props;

  return loading ? (
    <Card
      sx={{
        minWidth: width || 300,
        m: 2,
        bgcolor: "#464d66",
      }}
    >
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      {<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}
      <CardContent>
        {
          <>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        }
      </CardContent>
    </Card>
  ) : (
    element
  );
}

export default CardSkeleton;
