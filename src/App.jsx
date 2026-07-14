import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import OverallPlanner from "./pages/OverallPlanner";
import SGPAPlanner from "./pages/SGPAPlanner";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Planner Selection */}
        <Route
          path="/planner"
          element={<Planner />}
        />

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

    </BrowserRouter>
  );
}

export default App;