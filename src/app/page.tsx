import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-950 font-bitter text-stone-200">
      <Navbar />

      <section id="about" className="bg-blue-900 max-w-7xl">
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
          <em>summa cum laude</em> with a B.S. in Computer Science in May 2023.
        </p>
        <p>
          Whether it be in finding creative solutions or acquiring new skills, I
          love problem solving and the development process.
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
        <Link href={"https://"}></Link>
      </section>
    </div>
  );
}
