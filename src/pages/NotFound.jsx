import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center text-[var(--color-light)]">
      <div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg opacity-80">Page not found</p>
      </div>
    </div>
  );
}
