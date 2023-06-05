import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-950 absolute w-full  font-cousine text-stone-200">
      <Navbar />
      <section
        id="home"
        className="h-screen flex flex-col justify-evenly lg:w-large"
      >
        <div>
          <h1 className="select-none text-stone-200 text-5xl font-roboto-light">
            John Dosselman
          </h1>
          <h2 className="select-none text-blue-400 text-5xl font-roboto-light">
            software developer
          </h2>
        </div>
        <div className="text-stone-200 flex flex-col gap-5 max-w-xs">
          <h3 className=" text-xl">THEME</h3>

          <Link
            href="/"
            className=" px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
          >
            Modern
          </Link>

          <Link
            href="/"
            className="px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
          >
            Sleek
          </Link>

          <Link
            href="/"
            className="px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
          >
            Striking
          </Link>
        </div>
      </section>
      <section id="about" className="bg-blue-900">
        <h1>About</h1>
        <h2>Welcome! I&apos;m John.</h2>
        <Image
          src={"/ProfilePic.png"}
          alt={"Me"}
          width={200}
          height={200}
        ></Image>
        <p>
          Whether it be through finding creative solutions or acquiring new
          skills, I love problem solving and the development process. Currently,
          I&apos;m using Next.js and AWS to develop a fullstack application
          centered around spaced repetition learning {"("}check back soon!
          {")"}.
        </p>
        <div className="w-20 h-20 bg-green-500"></div>
        <p>
          I design and build web applications that are performant, responsive,
          and accessible.
        </p>
        <p>
          Learning is a passion of mine! In May 2023, I graduated University of
          Illinois Springfield <em>summa cum laude</em> with a B.S. in Computer
          Science. Some of technologies I&apos;ve studied, used, and continue to
          learn include:
        </p>
        <ul>
          <li>React</li>
          <li>Firebase</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>CSS3</li>
          <li>HTML</li>
          <li>Java</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Python</li>
        </ul>
      </section>
      <section id="projects" className="bg-yellow-600">
        <h1>Projects</h1>
        <h2></h2>
        <div className="flex flex-col md:flex-row">
          <div>
            <Link href={"https://fastQR.netlify.app"}>
              <h3>FastQR.netlify.app</h3>
              <Image
                src={"/fastQRunloaded.png"}
                alt={"fastQR.netlify.app"}
                width={300}
                height={300}
              />
            </Link>
            <p>QR code generation web app deployed on Netlify.</p>
            <ul className="flex">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
