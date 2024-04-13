import { FaGear } from "react-icons/fa6";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MetaTags } from "./metatags";
import { Dialog, DialogTrigger } from "./ui/dialog";

interface OptionsMenuProps {
    html: string;
    css: string;
    js: string;
    tags: string;
    setTags: (tags: string) => void;
}

export const OptionsMenu = ({ html, css, js, tags, setTags }: OptionsMenuProps) => {

    let code = `
    <html>
        <head>
            <style>${css}</style>
            ${tags}
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
    </html>
    `;

    const downloadCode = () => {
        const element = document.createElement("a");
        const file = new Blob([code], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "code.html";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="flex items-center hover:cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="">
                        <FaGear size={20} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem className="cursor-pointer"
                    onClick={()=>{
                        downloadCode();
                    }}
                    >
                        <span>Download Code</span>
                    </DropdownMenuItem>
                    <Dialog>
                        <DialogTrigger asChild>
                            <DropdownMenuItem className="cursor-pointer"
                                onSelect={(e) => e.preventDefault()}
                            >
                                <span>Add Meta Tags</span>
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <MetaTags tags={tags} setTags={setTags} />
                    </Dialog>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                            localStorage.setItem('html', '');
                            localStorage.setItem('css', '');
                            localStorage.setItem('javascript', '');
                            window.location.reload();
                        }}
                    >
                        <span>Reset Code</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}