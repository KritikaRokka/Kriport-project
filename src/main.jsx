import {
  StrictMode,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import App
  from "./App.jsx";

import Contact
  from "./pages/Contact.jsx";

import Work
  from "./pages/Work.jsx";

import ProjectDetail
  from "./ProjectDetail.jsx";


createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/work/:projectId"
          element={
            <ProjectDetail />
          }
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>

  </StrictMode>
);