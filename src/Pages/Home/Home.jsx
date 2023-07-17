import React from "react";
import ShowCase from "../../Components/Sections/Show-case";
import CommentSection from "../../Components/Sections/CommentSection";
import OurCourse from "../../Components/Sections/Our-course";
import OurTeacher from "../../Components/Sections/Our-teacher";
import OurResult from "../../Components/Sections/Our-result";
import AppPageMetadata from "../../Components/AppPageMetaData/AppPageMetaData";
import Loader from "../../Components/Loader/Loader";
import NewsSection from "../../Components/Sections/NewsSection";
import { Registration } from "../../Components";
import { t } from "i18next";
import "./Home.scss";

function Home() {
    return (
        <>
            <AppPageMetadata title={t("home")} />
            <ShowCase />
            <OurCourse />
            <OurTeacher />
            <NewsSection />
            <OurResult hasBtn={true} />
            <CommentSection />
            <Registration />
            <Loader isLoading={false} />
        </>
    );
}

export default Home;
