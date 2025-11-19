// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-dark)] text-[var(--color-light)]">
      {/* Navbar stays fixed on top */}
      <Navbar />

      {/* Page content renders here */}
      <main className="flex-1">
        <Outlet />
      </main>


    </div>
  );
}
