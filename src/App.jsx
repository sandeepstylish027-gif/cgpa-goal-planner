import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const Planner = lazy(() => import("./pages/Planner"));
const OverallPlanner = lazy(() => import("./pages/OverallPlanner"));
const SGPAPlanner = lazy(() => import("./pages/SGPAPlanner"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Planner Selection */}
          <Route path="/planner" element={<Planner />} />

          {/* Overall CGPA Planner */}
          <Route
            path="/planner/overall"
            element={<OverallPlanner />}
          />

          {/* Semester SGPA Planner */}
          <Route
            path="/planner/semester"
            element={<SGPAPlanner />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;