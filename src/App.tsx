import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard-v2" replace />} />
      <Route path="/dashboard-v2" element={<Dashboard />} />
    </Routes>
  );
}
