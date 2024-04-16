import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-30">
        <Link href={"/"} className="flex flex-row items-center">
          <h1 className="hidden sm:block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold">HTML CSS JS</h1>
          <Image
            src="/logo2.png"
            alt="HTML CSS JS"
            width={60}
            height={60}
            className="pl-2"
          />
        </Link>
      <div>
        <Link href={"/code-editor"}>
          <Button>Start Coding</Button>
        </Link>
      </div>
    </nav>
  )
}