import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-16 w-full bg-gray-900 pt-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-72">
          <Link className="flex flex-row items-center gap-4 p-4" href={"/"}>
            <p className="text-3xl text-gray-200">{"["}</p>
            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold">HTML CSS JS</h1>
            <p className="text-3xl text-gray-200">{"]"}</p>
          </Link>
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
  )
}