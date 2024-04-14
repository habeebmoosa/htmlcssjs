import { useState } from "react";
import { TextEditor } from "./texteditor";

interface CodePanelProps {
    html: string;
    css: string;
    js: string;
    setHtml: (html: string) => void;
    setCss: (css: string) => void;
    setJs: (js: string) => void;
}

export const CodePanel = ({ html, css, js, setHtml, setCss, setJs }: CodePanelProps) => {

    const [code, setCode] = useState<string>("html");

    return (
        <div className={`flex flex-col items-center justify-center w-full max-w-5xl mb-4 rounded-lg`}>

            <p className="text-sm mb-1 text-gray-600 hidden lg:block">Use Ctrl+Shift+Z to open and close the code editor</p>

            <div className="flex items-center justify-between w-full bg-[#1e1e1e] text-white p-4 rounded-lg">
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                </div>
                <div className="flex items-center">
                    <button
                        className={`${code === "html" ? "bg-gray-700" : "bg-gray-500"} rounded-full px-2 text-sm sm:text-lg sm:px-4`}
                        onClick={() => setCode("html")}
                    >HTML</button>

                    <button
                        className={`${code === "css" ? "bg-gray-700" : "bg-gray-500"} rounded-full px-2 text-sm sm:text-lg sm:px-4 ml-2`}
                        onClick={() => setCode("css")}
                    >CSS</button>

                    <button className={`${code === "javascript" ? "bg-gray-700" : "bg-gray-500"} rounded-full px-2 text-sm sm:text-lg sm:px-4 ml-2`}
                        onClick={() => setCode("javascript")}
                    >JavaScript</button>
                </div>
            </div>
            <TextEditor code={code === "html" ? html : code === "css" ? css : js} setCode={code === "html" ? setHtml : code === "css" ? setCss : setJs} lang={code} />
        </div>
    );
}