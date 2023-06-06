"use client";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

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
    <div className={`font-work`}>
      <nav className={`fixed w-full z-50  ${expanded ? "h-screen" : ""}`}>
        <div
          className={`p-5 flex flex-col shadow-md transition duration-200 border-b ease-in-out ${
            darkMode
              ? "bg-stone-800 border-stone-900"
              : "bg-stone-200 border-stone-300"
          }
        }`}
        >
          <div className="flex items-center justify-between">
            <a
              href={"#about"}
              className={`transition-colors duration-200 ease-in-out ${
                darkMode ? "text-stone-200" : "text-stone-900"
              }`}
            >
              John Dosselman
            </a>
            <button
              className="md:hidden relative h-6 w-8"
              onClick={() => setExpanded(!expanded)}
              id="buttonMenu"
              title="menu"
            >
              <div
                className={`top-0 absolute w-8 py-px rounded-sm transition ease-in-out ${
                  expanded ? "opacity-0 origin-right -rotate-45" : ""
                } ${darkMode ? "bg-stone-200" : "bg-stone-800"}`}
              />
              <div
                className={`top-1/2 absolute w-8 py-px rounded-sm transition ease-in-out -translate-y-1/2 ${
                  expanded ? "rotate-45" : ""
                } ${darkMode ? "bg-stone-200" : "bg-stone-800"}`}
              />
              <div
                className={`top-1/2 absolute w-8 py-px rounded-sm transition ease-in-out -translate-y-1/2 ${
                  expanded ? "-rotate-45" : "opacity-0"
                } ${darkMode ? "bg-stone-200" : "bg-stone-800"}`}
              />
              <div
                className={`bottom-0 absolute w-8 py-px  rounded-sm transition ease-in-out ${
                  expanded ? "opacity-0 origin-right rotate-45" : ""
                } ${darkMode ? "bg-stone-200" : "bg-stone-800"}`}
              />
            </button>
            <ul
              className={`hidden md:flex md:gap-20 items-center transition-colors duration-200 ease-in-out ${
                darkMode ? "text-stone-200" : "text-stone-900"
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
            </ul>
            <button
              className={"hidden p-3 bg-purple-500 rounded md:block "}
              id="buttonToggleDark"
              title="toggleDark"
              onClick={() => setDarkMode(!darkMode)}
            ></button>
          </div>
          <div
            className={`transition-all ease-in md:hidden ${
              expanded ? "h-screen-60" : "h-0"
            }`}
          >
            <div
              className={`h-full flex flex-col justify-center  ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul
                className={`text-center items-center h-3/4 flex flex-col justify-around transition-colors ease-in-out duration-200 ${
                  expanded ? "" : "hidden"
                } ${darkMode ? "text-stone-200" : "text-stone-900"}`}
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
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
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
      <main
        className={`transition duration-200 ease-in-out ${
          darkMode
            ? "bg-stone-800 text-stone-200"
            : "bg-stone-200 text-stone-900"
        }`}
      >
        <section id="about">
          <h1>About</h1>
          <Image
            src={"/ProfilePic.png"}
            alt={"Me"}
            width={200}
            height={200}
          ></Image>
          <h2>I&apos;m a software developer based out of Dallas.</h2>
          <p>
            I graduated University of Illinois Springfield{" "}
            <em>summa cum laude</em> with a B.S. in Computer Science in May
            2023.
          </p>
          <p>
            Whether it be in finding creative solutions or acquiring new skills,
            I love problem solving and the development process.
          </p>

          <p>
            I design and build web applications that are performant, responsive,
            and accessible.
          </p>
          <p>Lighthouse scores</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 text-center max-w-xs">
            <div>
              <div className="m-auto select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center text-green-300 text-sm">
                <div className="absolute w-px h-1 m-auto bg-green-900 self-start"></div>
                <p>98</p>
              </div>
              <p>Performance</p>
            </div>
            <div>
              <div className="m-auto select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center text-green-300 text-sm">
                <p>100</p>
              </div>
              <p>Accessibility</p>
            </div>
            <div>
              <div className="m-auto select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center text-green-300 text-sm">
                <p>100</p>
              </div>
              <p>Best Practices</p>
            </div>
            <div>
              <div className="m-auto select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center text-green-300 text-sm">
                <p>100</p>
              </div>
              <p>SEO</p>
            </div>
          </div>
          <p>
            This site was developed in VS Code using Next.js, TypeScript, and
            Tailwind. Some of the other tools and technologies I use include:
          </p>
          <ul>
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Firebase</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS3</li>
            <li>HTML</li>
          </ul>
        </section>
        <section id="projects" className="bg-red-800">
          <h1>Projects</h1>
          <h2></h2>
          <h3>FastQR.netlify.app</h3>
          <div className="flex flex-col md:flex-row">
            <Link href={"https://fastQR.netlify.app"}>
              <Image
                className="rounded"
                src={"/fastQRunloaded.png"}
                alt={"fastQR.netlify.app"}
                width={300}
                height={300}
              />
            </Link>
            <div>
              <p>QR code generation web app deployed on Netlify.</p>
              <ul className="flex">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <h3>Docs Darker</h3>
          <div className="flex flex-col md:flex-row">
            <Image
              className="rounded"
              src={"/fastQRunloaded.png"}
              alt={"Docs Darker"}
              width={300}
              height={300}
            />

            <div>
              <p>Google Docs dark mode Chrome extension.</p>
              <ul className="flex">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-purple-800">
          <h1>Contact</h1>
          <h2>
            I am currently available for collaboration and employment offers.
          </h2>
          <h2>Reach me at</h2>
        </section>
      </main>
    </div>
  );
}
