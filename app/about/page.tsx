import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about the project and the creator.",
};

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is a simple code editor for HTML, CSS, and JavaScript. You can write your code and see the output in real-time.</p>
        </div>
    )
}