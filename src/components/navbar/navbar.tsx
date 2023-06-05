"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  return (
    <nav
      className={`fixed w-full z-50 text-stone-200  ${
        expanded ? "h-screen" : ""
      }`}
    >
      <div
        className={`flex flex-col bg-green-900 shadow-md shadow-purple-900 transition-all duration-300
        }`}
      >
        <div className="flex items-center justify-between">
          <a href={"#home"} className="">
            J / D
          </a>
          <button
            className="md:hidden bg-red-500 p-4"
            onClick={() => setExpanded(!expanded)}
            id="buttonMenu"
            title="menu"
          ></button>
          <ul
            className={`hidden md:flex md:gap-5 items-center
            }`}
          >
            <li>
              <a href={"#about"}>About</a>
            </li>
            <li>
              <a href={"#projects"}>Projects</a>
            </li>
            <li>
              <a href={"#contact"}>Contact</a>
            </li>
            <li>
              <button
                className={"p-3 bg-purple-500 rounded block"}
                id="buttonToggleDark"
                title="toggleDark"
              ></button>
            </li>
          </ul>
        </div>
        <div
          className={`transition-all ease-in-out duration-150 md:hidden ${
            expanded ? "h-screen-60" : "h-0"
          }`}
        >
          <div
            className={`h-full flex flex-col justify-center transition ease-in-out duration-500 ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul
              className={`text-center items-center h-3/4 flex flex-col justify-around ${
                expanded ? "" : "hidden"
              }`}
            >
              <li>
                <a href={"#about"} onClick={() => setExpanded(false)}>
                  About
                </a>
              </li>
              <li>
                <a href={"#projects"} onClick={() => setExpanded(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href={"#contact"} onClick={() => setExpanded(false)}>
                  Contact
                </a>
              </li>
              <li>
                <button
                  className={"p-3 bg-purple-500 rounded"}
                  id="buttonToggleDarkMobile"
                  title="toggleDarkMobile"
                ></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`h-full transition duration-500 backdrop-blur ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setExpanded(false)}
      ></div>
    </nav>
  );
}
