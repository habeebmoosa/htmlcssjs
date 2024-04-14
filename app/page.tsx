"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

export default function Home() {

  return (
    <main className="">
      <nav className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-30">
        <div className="flex flex-row items-center">
          <p className="text-3xl text-gray-500">{"["}</p>
          <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold">HTML CSS JS</h1>
          <p className="text-3xl text-gray-500">{"]"}</p>
        </div>
        <div>
          <Link href={"/code-editor"}>
            <Button>Start Coding</Button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center mt-48">
        <header className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-center">
            <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> Welcome to <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
            <h1 data-animate="title" className="md:hidden text-5xl font-bold"> Welcome to <br/><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
          </div>
          <div className="mt-8">
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
          src="/heroImage.png"
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
        </div>
      </section>

      <footer className="flex flex-col items-center mt-16 w-full bg-gray-900">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-72">
          <div className="flex flex-row items-center gap-4 p-4">
            <p className="text-3xl text-gray-200">{"["}</p>
            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold">HTML CSS JS</h1>
            <p className="text-3xl text-gray-200">{"]"}</p>
          </div>
          <div className="flex flex-row items-center gap-4 p-4">
              <nav className="flex flex-row items-center gap-4 text-gray-200">
                <Link href={"/code-editor"} className="hover:text-gray-400">
                  Code Editor
                </Link>
                <Link href={"/about"} className="hover:text-gray-400">
                  About
                </Link>
                <Link href={"/contact"} className="hover:text-gray-400">
                  Contact
                </Link>
              </nav>
          </div>
        </div>
        <div className="w-96 h-[0.07rem] bg-gray-500"></div>
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-gray-200">&copy; 2024 <Link href={"/"} className="hover:text-gray-400 hover:underline">HTML CSS JS.</Link> All rights reserved.</p>
          <p className="text-gray-200">Designed and developed by</p>
          <p><a href="/" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"> Habeeb Moosa</a></p>
        </div>
      </footer>
    </main>
  );
}
