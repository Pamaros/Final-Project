import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/main.css";
import Homepage from "./Pages/Homepage.tsx";
import ContactPage from "./Pages/ContactPage.tsx";
import ProjectPage from "./Pages/ProjectPage.tsx";
import NavBar from "./Components/NavBar.tsx";
import AboutPage from "./Pages/AboutPage.tsx";
import PageWrapper from "./Components/PageWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/project/:id" element={<ProjectPage />} />

      </Routes>
      </PageWrapper>
    </BrowserRouter>
  </StrictMode>
);
