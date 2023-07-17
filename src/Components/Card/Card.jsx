import React from "react";

import CommentCard from "./CommentCard/CommentCard";
import CourseCard from "./CourseCard/CourseCard";
import NewsCard from "./NewsCard/NewsCard";
import ResultCard from "./ResultCard/ResultCard";
import TeacherCard from "./TeacherCard/TeacherCard";

function Card({ type = "course", ...others }) {
  switch (type) {
    case "course":
      return <CourseCard {...others} />;
    case "teacher":
      return <TeacherCard {...others} />;
    case "comment":
      return <CommentCard {...others} />;
    case "result":
      return <ResultCard {...others} />;
    case "news":
      return <NewsCard {...others} />;
    default:
      break;
  }
}

export default Card;
