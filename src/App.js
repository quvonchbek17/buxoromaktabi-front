import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Components/Layout";
import Loader from "./Components/Loader/Loader";
import { Button } from "./Components";
import Courses from "./Pages/Courses/Courses";

const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const News = lazy(() => import("./Pages/News/News"));
const Teachers = lazy(() => import("./Pages/Teachers/Teachers"));
const Results = lazy(() => import("./Pages/Results/Results"));
const Register = lazy(() => import("./Pages/Register/Register"));
const NewsId = lazy(() => import("./Pages/NewsId/NewsId"));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/results"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <Results />
            </Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="/news/:newsId"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <NewsId />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/teachers"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <Teachers />
            </Suspense>
          }
        />
        <Route
          path="/courses"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <Courses />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <h1>404</h1>
              <p style={{ fontSize: "32px" }}>|</p>
              <p style={{ fontSize: "20px" }}>Afsuski sahifa topilmadi</p>
            </div>
            <Button type={"primary"} to="/">
              Ortga
            </Button>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
