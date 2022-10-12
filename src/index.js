import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import "./assets/css/sera-test.css"

const AdminLayout = lazy(() => import ("./layouts/Admin.js"));
const AuthLayout = lazy(() => import ("./layouts/Auth.js"));
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Please wait...</div>}>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route
        path="/"
        element={<Navigate to="/admin/index" replace />}
    />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
