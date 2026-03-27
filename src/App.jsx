import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import VacationCourse from "./pages/VacationCourse";
import PdfViewer from "./components/PdfViewer";
import ScrollToTop from "./components/ScrollToTop";

export default function XaidorWebsite() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once = only animate on first load
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PdfViewer />} />
        <Route
          path="/courses/vacation-special-ai-course"
          element={<VacationCourse />}
        />
        <Route path="/courses/:slug" element={<CoursePage />} />
      </Routes>
    </>
  );
}
