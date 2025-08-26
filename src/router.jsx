import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import AdminPanel from "../src/pages/admin/AdminPanel";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/painelAdmin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}