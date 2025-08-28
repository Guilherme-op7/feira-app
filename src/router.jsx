import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import AdminPanel from "../src/pages/admin/AdminPanel";
import LoginInterface from "./pages/admin/Login";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/painelAdmin" element={<AdminPanel />} />
        <Route path="/login" element={<LoginInterface />} />
      </Routes>
    </BrowserRouter>
  );
}