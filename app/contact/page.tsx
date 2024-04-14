import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact the creator of the project.",
};

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>You can contact the creator of this project by sending an email to <a href="mailto:habeebmoosadev@gmail.com">
                Habeeb Moosa </a>.</p>
        </div>
    )
}