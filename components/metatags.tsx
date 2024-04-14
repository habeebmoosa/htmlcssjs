import {
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog";

interface MetaTagsProps {
    tags: string;
    setTags: (tags: string) => void;
}

export const MetaTags = ({ tags, setTags }: MetaTagsProps) => {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Meta Tags</DialogTitle>
                <DialogDescription>
                    Add meta tags to your project to improve SEO. You can also add CND's for libraries like Bootstrap, TailwindCSS, etc.
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4">
                <div>
                    <textarea
                        id="meta-description"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Add meta tags here..."
                        onChange={(e) => {
                            setTags(e.target.value);
                            localStorage.setItem('metatagsandcdns', e.target.value);
                        }}
                        value={tags}
                    />
                </div>
            </div>
        </DialogContent>
    )
}