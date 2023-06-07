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
    <div className={`font-work `}>
      <nav className={`fixed w-full z-50  ${expanded ? "h-screen" : ""}`}>
        <div
          className={`p-5 flex flex-col shadow-md transition duration-200 border-b ease-in-out ${
            darkMode
              ? "bg-neutral-900 border-neutral-950"
              : "bg-stone-100 border-stone-200"
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
              className={`hidden h-6 w-6 rounded-full md:block ${
                darkMode ? "bg-stone-200" : "bg-stone-800"
              }`}
              id="buttonToggleDark"
              title="dark mode toggle"
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
                    className={`block h-6 w-6 rounded-full md:hidden ${
                      darkMode ? "bg-stone-200" : "bg-stone-800"
                    }`}
                    id="buttonToggleDark"
                    title="dark mode toggle"
                    onClick={() => setDarkMode(!darkMode)}
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
        className={`flex flex-col max-w-90 sm:max-w-80  md:max-w-70 lg:max-w-65 xl:max-w-60 m-auto md:text-lg transition duration-200 ease-in-out ${
          darkMode
            ? "bg-neutral-900 text-stone-200"
            : "bg-stone-100 text-stone-700"
        }`}
      >
        <section id="about" className="pt-14 ">
          <h1 className="text-5xl mt-10 font-light">About</h1>
          <h2 className="mt-8 text-2xl">
            I&apos;m John, a software developer based out of Dallas.
          </h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-10">
            <div>
              <p>
                I graduated University of Illinois Springfield with a{" "}
                <span className="font-medium">B.S. in Computer Science</span> in
                May 2023. I attained a strong foundation in object-oriented
                programming and data structures and algorithms, and earned the
                distinction of <em>summa cum laude</em>.
              </p>
              <Image
                className="mt-8 select-none rounded-full bg-orange-300 border-8 border-white shadow m-auto"
                src={"/ProfilePic.png"}
                alt={"Me"}
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <p className="mt-8 lg:mt-0">
                I excel in the space where creativity and problem-solving
                intersect. In my current projects, I focus on building fullstack
                web applications that are performant, responsive, and
                user-friendly.
              </p>
              <figure className="max-w-[14rem] sm:max-w-full m-auto mt-6">
                <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center">
                      <div className="absolute w-px h-1 m-auto bg-green-900 self-start" />
                      <p className="text-green-300 text-sm">98</p>
                    </div>
                    <p className="text-center text-sm">Performance</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-sm">Accessibility</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-sm">Best Practices</p>
                  </div>

                  <div className="flex flex-col items-center gap-y-1">
                    <div className="select-none ring-3 ring-inset ring-green-400 rounded-full bg-green-900 h-10 w-10 flex justify-center items-center">
                      <p className="text-green-300 text-sm">100</p>
                    </div>
                    <p className="text-center text-sm">SEO</p>
                  </div>
                </div>
                <figcaption className="text-center text-xs mt-2">
                  Lighthouse scores for johndosselman.com
                </figcaption>
              </figure>

              <p className="mt-6">
                This website was developed in VS Code using{" "}
                <span className="font-medium">Next.js</span>,{" "}
                <span className="font-medium">TypeScript</span>, and{" "}
                <span className="font-medium">Tailwind</span>. Some of the other
                tools and technologies I&apos;ve worked with include:
              </p>
              <ul className="grid grid-cols-3 text-center font-medium mt-6 gap-y-4 max-w-xs m-auto">
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
            </div>
          </div>
        </section>
        <section id="projects">
          <h1 className="text-5xl mt-10 font-light">Projects</h1>
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
