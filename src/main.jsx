import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import LoadingEffect from "./pages/Others/loadingEffect";
import ProjectDetails from "./pages/Projects/ProjectDetails.jsx"; // <-- matches your file tree
import Details from "./pages/Projects/Details.jsx"; // <-- matches your file tree

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingEffect delay={0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          {/* <Route path="/projects/Details" element={<Details />} /> */}
        </Routes>
      </LoadingEffect>
    </BrowserRouter>
  </StrictMode>
);
