// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy-load pages so App remains tiny
const Home = React.lazy(() => import("./pages/Home"));
const Services = React.lazy(() => import("./pages/Services"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-dark)] text-[var(--color-light)]">
            Loading…
          </div>
        }
      >
        <Routes>
          {/* Layout wraps every page (Navbar + Outlet) */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
