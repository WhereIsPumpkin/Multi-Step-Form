import Personal from "./pages/Personal";
import Plan from "./pages/Plan";
import AddOns from "./pages/AddOns";
import Thank from "./pages/Thank";
import Finish from "./pages/Finish";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#EFF5FF] h-screen ">
      <Routes>
        <Route path="/" element={<Navigate to="/personal" />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/thankyou" element={<Thank />} />
      </Routes>
    </div>
  );
}

export default App;
