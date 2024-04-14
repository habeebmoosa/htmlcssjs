
import MonacoEditor from '@monaco-editor/react'

interface TextEditorProps {
    lang: string;
    code: string;
    setCode: (code: string) => void;
}

export const TextEditor = ({ lang, code, setCode }: TextEditorProps) => {

    const localStorageValue = localStorage.getItem(lang);

    const defaultValue = localStorageValue !== null && localStorageValue !== undefined ? localStorageValue : code;

    return (
        <div className="flex items-center justify-between w-full rounded-lg mt-4 bg-[#1e1e1e] p-2">
            <MonacoEditor
                className={`w-full h-96 rounded-lg`}
                language={lang}
                defaultValue={defaultValue}
                onMount={(editor, monaco) => {editor.getModel()?.updateOptions({ tabSize: 2 });}}
                theme='vs-dark'
                onChange={(value) => {
                    if(value !== undefined) {
                        setCode(value);
                        
                        if(window !== undefined) {
                            localStorage.setItem(lang, value);
                        }
                    }
                }}
                value={code}
            />
        </div>
    )
};