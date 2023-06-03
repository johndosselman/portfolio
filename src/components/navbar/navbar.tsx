"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-500 ease-in-out md:flex md:flex-row items-center text-stone-200 md:justify-around ${
        scrolled ? "backdrop-blur-sm bg-stone-900/80 shadow-lg" : ""
      } ${menuOpen ? "bg-stone-900 shadow-lg h-3/4 md:h-fit" : ""}`}
    >
      <div className="w-full flex justify-between items-center lg:w-large py-2 sm:py-3 md:py-4">
        <Link
          href=""
          className="px-5 py-2 text-center line-clamp-1 border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
        >
          J / D
        </Link>
        <button
          className="md:hidden fill-stone-200 hover:fill-green-600 transition ease-in-out duration-200"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="M118.001-239.95v-67.588h725.331v67.588H118.001Zm0-206.923v-67.588h725.331v67.588H118.001Zm0-205.589v-67.588h725.331v67.588H118.001Z" />
          </svg>
        </button>
      </div>
      <ul
        className={
          menuOpen
            ? "h-full flex flex-col md:flex-row justify-around md:gap-10"
            : "hidden md:flex md:flex-row md:gap-10"
        }
      >
        <li>
          <Link
            href=""
            className="px-5 py-4 text-center rounded-md hover:bg-stone-900/50 hover:text-green-500 transition ease-in-out duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="px-5 py-4 text-center rounded-md hover:bg-stone-900/50 hover:text-green-500 transition ease-in-out duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="px-5 py-4 text-center rounded-md hover:bg-stone-900/50 hover:text-green-500 transition ease-in-out duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
