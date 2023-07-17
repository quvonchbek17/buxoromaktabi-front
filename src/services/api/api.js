import axios from "axios";

const API = process.env.REACT_APP_MAIN_URL;

const NEWS = {
  all_news: "/news/all",
  one_news: "/news/one",
  put_news: "/news",
  pagination: (page = 1, size = 20) => `/news/page=${page}&size=${size}`,
};

const RESULTS = {
  all_results: "/results/all",
  one_results: "/results/one",
  pagination: (page = 1, size = 20) => `/results/page=${page}&size=${size}`,
};

const TEACHERS = {
  all_teachers: "/teachers/all",
  one_teachers: "/teachers/one",
  pagination: (page = 1, size = 20) => `/teachers/page=${page}&size=${size}`,
};

const COMMENTS = {
  all_comments: "/comments/all",
  one_comments: "/comments/one",
  pagination: (page = 1, size = 20) => `/comments/page=${page}&size=${size}`,
};

const COURSES = {
  all_courses: "/courses/all",
  one_courses: "/courses/one",
  pagination: (page = 1, size = 20) => `/courses/page=${page}&size=${size}`,
};

const API_URL = axios.create({
  baseURL: API
});

export {
  NEWS,
  RESULTS,
  TEACHERS,
  COMMENTS,
  COURSES,
  API,
  API_URL
};
