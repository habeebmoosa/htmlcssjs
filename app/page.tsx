"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Home() {

  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col items-center mt-48">
        <header className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-center">
            <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> Welcome to <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
            <h1 data-animate="title" className="md:hidden text-5xl font-bold"> Welcome to <br /><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
          </div>
          <div className="mt-8 px-1">
            <p className="text-xl max-w-[40rem] text-center">It is a simple code editor for HTML, CSS, and JavaScript. You can write your code and see the output in real-time.</p>
          </div>
        </header>
        <div className="mt-8">
          <Link href={"/code-editor"}>
            <Button>Start Coding</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 mx-2">
        <Image
          src="/hero-image.png"
          alt="Code Editor"
          width={1000}
          height={600}
          className="rounded-lg shadow-2xl"
        />
      </div>

      <section className="flex flex-col items-center mt-32">
        <div>
          <h2 className="text-4xl font-bold">How it works</h2>
        </div>
        <div className="mt-20 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2 w-64 p-10 bg-gray-900 text-white rounded-full">
            <h3 className="text-2xl font-bold">Write code</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-300">Write your code in the editor. You can write HTML, CSS, and JavaScript code.</p>
          </div>
          <div className="w-1 h-20 lg:w-40 lg:h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-2 w-64 p-10 bg-gray-900 text-white rounded-full">
            <h3 className="text-2xl font-bold">See output</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-300">You can see the output of your code in real-time with the help of preview section.</p>
          </div>
          <div className="w-1 h-20 lg:w-40 lg:h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-2 w-64 p-10 bg-gray-900 text-white rounded-full">
            <h3 className="text-2xl font-bold">Download</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-300">You can download your code as a zip file with the help of download button.</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mt-32 mx-2">
        <Image
          src="/texteditor.png"
          alt="Code Editor"
          width={1000}
          height={600}
          quality={100}
          className="rounded-lg shadow-2xl"
        />
      </div>

      <section className="flex flex-col items-center mt-32 mx-2">
        <div>
          <h2 className="text-4xl font-bold">Features</h2>
        </div>
        <div className="mt-20 flex flex-col gap-4 justify-center items-center bg-gray-900 rounded-lg p-4 w-full max-w-96">
          <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg w-full">
            <p className="text-xl md:text-2xl font-bold text-gray-400">Rich Code Editor</p>
          </div>
          <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg w-full">
            <p className="text-xl md:text-2xl font-bold text-gray-400">Realtime Preview</p>
          </div>
          <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg w-full">
            <p className="text-xl md:text-2xl font-bold text-gray-400">Downlodable Code</p>
          </div>
          <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg w-full">
            <p className="text-xl md:text-2xl font-bold text-gray-400">Responsive Design</p>
          </div>
          <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg w-full">
            <p className="text-xl md:text-2xl font-bold text-gray-400">Keyboard shortcut</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-32">
        <div>
          <h2 className="text-4xl font-bold">Technologies</h2>
        </div>
        <div className="mt-8">
          <p className="text-xl max-w-[40rem] text-center">The project is built with the following technologies.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-20">
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <TbBrandNextjs className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <BiLogoTypescript className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <SiTailwindcss className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <FaNodeJs className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <IoLogoVercel className="text-7xl" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-32">
        <div>
          <h2 className="text-4xl font-bold">Contributing</h2>
        </div>
        <div className="mt-8">
          <p className="text-xl max-w-[40rem] text-center">
            Explore the project's source code on GitHub. And you can contribute to the project by raising issues and creating pull requests.</p>
        </div>
        <div className="mt-8">
          <a href={"https://github.com/habeebmoosa/htmlcssjs"} target={"_blank"}>
            <Button>Contribute
              <FaGithub className="ml-2" />
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
