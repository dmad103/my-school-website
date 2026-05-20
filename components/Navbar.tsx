"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: School Identity */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            Divine Shepherd College
          </span>
          <span className="text-xs text-gray-500">
            Lipa City, Batangas
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/care-program">CARE Program</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/requirements">Requirements</Link>
          <Link href="/student-life">Student Life</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right label (desktop only) */}
        <div className="text-xs text-gray-500 hidden md:block">
          Official Website
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700 border-t">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/academics" onClick={() => setOpen(false)}>Academics</Link>
          <Link href="/care-program" onClick={() => setOpen(false)}>CARE Program</Link>
          <Link href="/admissions" onClick={() => setOpen(false)}>Admissions</Link>
          <Link href="/requirements" onClick={() => setOpen(false)}>Requirements</Link>
          <Link href="/student-life" onClick={() => setOpen(false)}>Student Life</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}