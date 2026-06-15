"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900">
            Divine Shepherd College
          </span>
          <span className="text-xs text-gray-500">
            Lipa City, Batangas
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition duration-200">About</Link>
          <Link href="/academics" className="hover:text-blue-600 transition duration-200">Academics</Link>
          <Link href="/care-program" className="hover:text-blue-600 transition duration-200">CARE Program</Link>
          <Link href="/admissions" className="hover:text-blue-600 transition duration-200">Admissions</Link>
          <Link href="/requirements" className="hover:text-blue-600 transition duration-200">Requirements</Link>
          <Link href="/student-life" className="hover:text-blue-600 transition duration-200">Student Life</Link>
          <Link href="/facilities" className="hover:text-blue-600 transition duration-200">Facilities</Link>
          <Link href="/faculty" className="hover:text-blue-600 transition duration-200">Faculty</Link>
          <Link href="/contact" className="hover:text-blue-600 transition duration-200">Contact</Link>
        </nav>

        <div className="text-xs text-gray-500 hidden md:block">
          Official Website
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700 shadow-sm">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">About</Link>
          <Link href="/academics" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Academics</Link>
          <Link href="/care-program" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">CARE Program</Link>
          <Link href="/admissions" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Admissions</Link>
          <Link href="/requirements" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Requirements</Link>
          <Link href="/student-life" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Student Life</Link>
          <Link href="/facilities" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Facilities</Link>
          <Link href="/faculty" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Faculty</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Contact</Link>
        </div>
      )}
    </header>
  );
}