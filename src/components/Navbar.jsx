// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import PurchaseButton from "./PurchaseButton.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#00020F] border-b border-black/40 fixed top-0 left-0 z-40">
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center gap-4 h-20">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logo} alt="Varman Tech" className="h-10 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* CENTER: nav items (centered) */}
          <nav className="hidden md:flex justify-center">
            <ul className="flex items-center gap-4">
              {/* each nav link as a rounded pill */}
              <li>
                <Link
                  to="/services"
                  className="inline-block px-5 py-2 rounded-full text-sm text-white border border-white/6 hover:border-white/18 hover:scale-105 transition-all duration-200 whitespace-nowrap"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block px-5 py-2 rounded-full text-sm text-white border border-white/6 hover:border-white/18 hover:scale-105 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-2 rounded-full text-sm text-white border border-white/6 hover:border-white/18 hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#support"
                  className="inline-block px-5 py-2 rounded-full text-sm text-white border border-white/6 hover:border-white/18 hover:scale-105 transition-all duration-200"
                >
                  support
                </a>
              </li>
            </ul>
          </nav>

          {/* RIGHT: Purchase CTA + small circular action / hamburger on mobile */}
          <div className="flex items-center justify-end gap-3">
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <PurchaseButton/>
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel (simple) */}
      {open && (
        <div className="md:hidden bg-[#00020F] border-t border-black/30">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="block px-3 py-2 rounded-md text-white">Services</Link></li>
              <li><Link to="/about" className="block px-3 py-2 rounded-md text-white">About Us</Link></li>
              <li><Link to="/contact" className="block px-3 py-2 rounded-md text-white">Contact Us</Link></li>
              <li><a href="#support" className="block px-3 py-2 rounded-md text-white">support</a></li>
              <li className="pt-2">
                <a
                  href="#purchase"
                  className="block text-center rounded-full bg-white text-[var(--color-bg-dark)] px-6 py-3 font-semibold"
                >
                  PURCHASE NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
