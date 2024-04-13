"use client";

import { useState } from "react";

import { CodePanel } from "@/components/codepanel";
import { Output } from "@/components/output";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { OptionsMenu } from "@/components/options";

export default function CodeEditor() {

    const [html, setHtml] = useState<string>(localStorage.getItem('html') || "");
    const [css, setCss] = useState<string>(localStorage.getItem('css') || "");
    const [js, setJs] = useState<string>(localStorage.getItem('javascript') || "");

    const [tags, setTags] = useState<string>(localStorage.getItem('metatagsandcdns') || "");

    return (
        <main className="flex h-screen flex-col items-center justify-between px-6 pt-2 bg-gray-200">
            <Output html={html} css={css} js={js} tags={tags} />
            <div className="flex items-center justify-between w-full max-w-5xl bg-[#1e1e1e] text-white px-4 rounded-lg m-2">
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                </div>
                <Drawer>
                    <DrawerTrigger asChild>
                        <div className="hover:cursor-pointer p-4">
                            Click to open Code Editor
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="flex justify-center w-full">
                            <CodePanel html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs}/>
                        </div>
                    </DrawerContent>
                </Drawer>
                <OptionsMenu html={html} css={css} js={js} tags={tags} setTags={setTags}/>
            </div>
        </main>
    );
}
