"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    <div
      className={`font-work w-full transition duration-200 ease-in-out ${
        darkMode ? "bg-neutral-900 text-white/70" : "bg-stone-100 text-black/60"
      }`}
    >
      <nav
        className={`fixed w-full z-50 selection:text-white selection:bg-slate-400 ${
          expanded ? "h-screen md:h-0" : "h-0"
        }`}
      >
        <div
          className={`p-5 flex flex-col shadow-md transition duration-200 border-b ease-in-out ${
            darkMode
              ? "bg-neutral-900 border-neutral-950"
              : "bg-stone-100 border-stone-200"
          }
        }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href={"https://johndosselman.com"}
              className={`transition-colors duration-200 ease-in-out ${
                darkMode ? "text-stone-200" : "text-stone-900"
              }`}
            >
              John Dosselman
            </Link>
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
            <ul className={`hidden md:flex md:gap-20 items-center`}>
              <li>
                <a
                  href={"#about"}
                  className={`transition-colors px-5 py-3 rounded-md duration-200 ease-in-out ${
                    darkMode
                      ? "text-stone-200 hover:bg-stone-900/50 hover:text-white"
                      : "text-stone-900 hover:bg-stone-300/50 hover:text-black"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a href={"#projects"}>Projects</a>
              </li>
              <li>
                <a href={"#contact"}>Contact</a>
              </li>
            </ul>
            <button
              className={`hidden md:block ${
                darkMode
                  ? "fill-white/80 hover:fill-white"
                  : "fill-black/80 hover:fill-black"
              }`}
              id="buttonToggleDark"
              title="dark mode toggle"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <svg
                className={`${darkMode ? "hidden" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="1.5rem"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z" />
              </svg>
              <svg
                className={`${darkMode ? "" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="1.5rem"
              >
                <path d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z" />
              </svg>
            </button>
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
                    className={`block h-6 w-6 rounded-full md:hidden ${
                      darkMode
                        ? "fill-white/80 hover:fill-white"
                        : "fill-black/80 hover:fill-black"
                    }`}
                    id="buttonToggleDarkMobile"
                    title="dark mode toggle mobile"
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setExpanded(false);
                    }}
                  >
                    <svg
                      className={`${darkMode ? "hidden" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      width="1.5rem"
                    >
                      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z" />
                    </svg>
                    <svg
                      className={`${darkMode ? "" : "hidden"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      width="1.5rem"
                    >
                      <path d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z" />
                    </svg>
                  </button>
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
        className={`flex flex-col divide-y max-w-90 sm:max-w-80 md:max-w-70 lg:max-w-65 xl:max-w-60 m-auto lg:text-lg  ${
          darkMode ? "divide-white/10" : "divide-black/10"
        }`}
      >
        <section
          id="about"
          className="relative mt-6 sm:mt-12 md:mt-20 selection:text-white selection:bg-green-400"
        >
          <div className="absolute -left-4 sm:-left-6 lg:-left-8 top-20 w-0.5 h-1/4 lg:h-1/2">
            <div className="w-max-w bg-green-400 h-9/10" />
            <div className="w-max-w bg-amber-300 h-1/20" />
            <div className="w-max-w bg-sky-400 h-1/20" />
          </div>
          <h1 className="text-4xl lg:text-5xl mt-20">About</h1>
          <h2
            className={`mt-8 lg:mt-12 text-2xl lg:text-4xl ${
              darkMode ? "text-white/80" : "text-black/80"
            }`}
          >
            I&apos;m John, a software developer based out of Dallas.
          </h2>
          <div
            className={`mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-20 ${
              darkMode ? "text-white/70" : "text-black/70"
            }`}
          >
            <div>
              <p>
                I graduated from the University of Illinois Springfield with a{" "}
                <span
                  className={`whitespace-nowrap ${
                    darkMode ? "text-white/80" : "text-black"
                  }`}
                >
                  B.S. in Computer Science
                </span>{" "}
                in May 2023. I gained a strong foundation in data structures and
                algorithms and object-oriented programming, and earned the
                distinction of <em>summa cum laude</em>.
              </p>
              <Image
                className={`mt-8 lg:mt-20 m-auto select-none rounded-full border-8 shadow shadow-md transition-all duration-200 ease-in-out ${
                  darkMode
                    ? "bg-green-400 border-neutral-800 shadow-xl"
                    : "bg-green-400 border-stone-50"
                }`}
                src={"/ProfilePic.png"}
                alt={"Me"}
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <p className="mt-8 lg:mt-0">
                I design and build{" "}
                <span
                  className={` ${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  web applications
                </span>{" "}
                that are performant, responsive, and user-friendly.
              </p>
              <figure className=" m-auto mt-6">
                <figcaption className="text-center text-sm">
                  Lighthouse scores for johndosselman.com
                </figcaption>
                <div className="max-w-[14rem] sm:max-w-full m-auto grid grid-cols-2 gap-y-10 sm:grid-cols-4 mt-6">
                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center shadow">
                      <div className="absolute w-px h-1 m-auto bg-green-900 self-start" />
                      <p className="text-green-300 text-sm">98</p>
                    </div>
                    <p className="text-center text-xs">Performance</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center shadow">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-xs">Accessibility</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center shadow">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-xs">Best Practices</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center shadow">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-xs">SEO</p>
                  </div>
                </div>
              </figure>

              <p className="mt-6">
                This website was developed in{" "}
                <span
                  className={`whitespace-nowrap ${
                    darkMode ? "text-white/80" : "text-black/90"
                  }`}
                >
                  VS Code
                </span>{" "}
                using{" "}
                <span
                  className={`${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  Next.js
                </span>
                ,{" "}
                <span
                  className={`${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  TypeScript
                </span>
                , and{" "}
                <span
                  className={`${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  Tailwind
                </span>
                . Other tools and technologies I use and work with include:
              </p>
              <ul
                className={`grid grid-cols-3 text-center mt-6 gap-y-4 max-w-xs m-auto ${
                  darkMode ? "text-white/80" : "text-black/90"
                }`}
              >
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Firebase</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>HTML</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>NPM</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="mt-20 relative selection:text-white selection:bg-amber-300"
        >
          <div className="absolute -left-4 sm:-left-6 lg:-left-8 top-20 w-0.5 h-1/4 lg:h-1/2">
            <div className="w-max-w bg-green-400 h-1/20" />
            <div className="w-max-w bg-amber-300 h-9/10" />
            <div className="w-max-w bg-sky-400 h-1/20" />
          </div>
          <h1 className="text-4xl lg:text-5xl mt-20">Projects</h1>
          <h2
            className={`mt-8 lg:mt-12 text-2xl lg:text-4xl ${
              darkMode ? "text-white/80" : "text-black/80"
            }`}
          >
            Featured and recent work. More coming soon.
          </h2>
          <div className="mt-8 lg:mt-12 grid md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 ">
            <div>
              <a
                href={"https://github.com/johndosselman/fastqr"}
                className="flex text-2xl lg:text-3xl gap-1 max-w-fit group underline"
                target="_blank"
              >
                <h3
                  className={`${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  FastQR
                </h3>
                <svg
                  viewBox="0 0 98 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 ${
                    darkMode ? "fill-white/70" : "fill-black/70"
                  }`}
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
              </a>
              <p className="mt-4">
                QR code generation web application hosted and deployed on
                Netlify. Built using{" "}
                <a
                  className={`underline ${
                    darkMode ? "text-white/80" : "text-black/90"
                  }`}
                  href="https://github.com/davidshimjs"
                >
                  davidshimjs
                </a>
                &apos;s qrcodejs.js.
              </p>

              <ul
                className={`mt-4 flex gap-6 ${
                  darkMode ? "text-white/80" : "text-black/90"
                }`}
              >
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <div
                className={`mt-6 transition duration-200 ease-in-out rounded-lg p-2 shadow-md max-w-fit ${
                  darkMode ? "bg-neutral-800" : "bg-stone-50"
                }`}
              >
                <Image
                  className={`rounded-lg overflow-hidden`}
                  src={"/fastqr.png"}
                  alt={"fastQR.netlify.app"}
                  width={300}
                  height={150}
                />
              </div>

              <a
                href={"https://fastqr.netlify.app"}
                className="mt-4 underline flex text-xl gap-1 max-w-fit"
                target="_blank"
              >
                <h3
                  className={` ${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  fastqr.netlify.app
                </h3>

                <svg
                  width="1rem"
                  viewBox="0 0 24 24"
                  className={` ${darkMode ? "fill-white/70" : "fill-black/70"}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href={"https://github.com/johndosselman/google-docs-darker"}
                className="flex text-2xl lg:text-3xl gap-1 max-w-fit group underline"
                target="_blank"
              >
                <h3
                  className={`${darkMode ? "text-white/80" : "text-black/90"}`}
                >
                  Google Docs Darker
                </h3>
                <svg
                  viewBox="0 0 98 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 ${
                    darkMode ? "fill-white/70" : "fill-black/70"
                  }`}
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
              </a>
              <p className="mt-4">
                Dark mode Chrome extension for Google Docs.
              </p>
              <ul
                className={`mt-6 lg:mt-10 flex gap-6 ${
                  darkMode ? "text-white/80" : "text-black/90"
                }`}
              >
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <div
                className={`mt-6 transition duration-200 ease-in-out rounded-lg p-2 shadow-md max-w-fit ${
                  darkMode ? "bg-neutral-800" : "bg-stone-50"
                }`}
              >
                <Image
                  className={`rounded-lg overflow-hidden`}
                  src={"/docsdarker.png"}
                  alt={"Google Docs Darker"}
                  width={300}
                  height={150}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="mt-20 relative selection:text-white selection:bg-sky-400"
        >
          <div className="absolute -left-4 sm:-left-6 lg:-left-8 top-20 w-0.5 h-3/4">
            <div className="w-max-w bg-green-400 h-1/20" />
            <div className="w-max-w bg-amber-300 h-1/20" />
            <div className="w-max-w bg-sky-400 h-9/10" />
          </div>
          <h1 className="text-4xl lg:text-5xl mt-20">Contact</h1>
          <h2
            className={`mt-8 lg:mt-12 text-2xl lg:text-4xl ${
              darkMode ? "text-white/80" : "text-black/80"
            }`}
          >
            For professional inquiries and everything dev.
          </h2>
          <ul>
            <li
              className={`mt-8 flex text-lg sm:text-xl lg:text-2xl gap-4 max-w-fit group ${
                darkMode ? "text-white/80" : "text-black/90"
              }${darkMode ? "text-white/80" : "text-black/90"}`}
            >
              <a href={"mailto:contact@johndosselman.com"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className={`w-8 ${
                    darkMode ? "fill-white/70" : "fill-black/70"
                  }`}
                >
                  <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z" />
                </svg>
              </a>
              contact@johndosselman.com
            </li>
            <li>
              <a
                href={"https://github.com/johndosselman"}
                className={`mt-8 flex text-lg sm:text-xl lg:text-2xl gap-4 max-w-fit group underline ${
                  darkMode ? "text-white/80" : "text-black/90"
                }${darkMode ? "text-white/80" : "text-black/90"}`}
                target="_blank"
              >
                <svg
                  viewBox="0 0 98 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-8 ${
                    darkMode ? "fill-white/70" : "fill-black/70"
                  }`}
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
                github.com/johndosselman
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="mt-20 text-sm text-center selection:text-white selection:bg-slate-400">
        6/9/2023
      </footer>
    </div>
  );
}
