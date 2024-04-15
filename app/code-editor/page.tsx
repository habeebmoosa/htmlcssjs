"use client";

import { useEffect, useRef, useState } from "react";

import { CodePanel } from "@/components/codepanel";
import { Output } from "@/components/output";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { OptionsMenu } from "@/components/options";

export default function CodeEditor() {

    const [html, setHtml] = useState<string>("");
    const [css, setCss] = useState<string>("");
    const [js, setJs] = useState<string>("");
    const [tags, setTags] = useState<string>("");

    const drawerTriggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            setHtml(localStorage.getItem('html') || `<h1 class="heading">Here you can see the output of your <span class="workTitle">work!</span></h1>`);
            setCss(localStorage.getItem('css') || `.heading { text-align: center; margin-top: 150px; font-size: 3.5rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; } .workTitle { background-image: linear-gradient(to right, #ff6b81, #6b5b95, #4b5c69); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: 0.05em; }`);
            setJs(localStorage.getItem('javascript') || "");
            setTags(localStorage.getItem('metatagsandcdns') || "");
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (typeof window !== 'undefined' && event.ctrlKey && event.shiftKey && event.key === 'Z') {
                drawerTriggerRef.current?.click();
                event.preventDefault();
            }
        };
        if (typeof window !== 'undefined') {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, []);

    return (
        <main className="flex h-screen flex-col items-center justify-between md:px-6 md:pt-2 p-1 bg-gray-200">
            <Output html={html} css={css} js={js} tags={tags} />
            <div className="flex items-center justify-between w-full max-w-5xl bg-[#1e1e1e] text-white px-4 rounded-lg m-2">
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                </div>
                <Drawer>
                    <DrawerTrigger ref={drawerTriggerRef} asChild>
                        <div className="hover:cursor-pointer p-4">
                            Click to open Code Editor
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="flex justify-center w-full">
                            <CodePanel html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs} />
                        </div>
                    </DrawerContent>
                </Drawer>
                <OptionsMenu html={html} css={css} js={js} tags={tags} setTags={setTags} />
            </div>
        </main>
    );
}
