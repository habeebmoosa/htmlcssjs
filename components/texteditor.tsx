
import MonacoEditor from '@monaco-editor/react'

interface TextEditorProps {
    lang: string;
    code: string;
    setCode: (code: string) => void;
}

export const TextEditor = ({ lang, code, setCode }: TextEditorProps) => {

    return (
        <div className="flex items-center justify-between w-full rounded-lg mt-4 bg-[#1e1e1e] p-2">
            <MonacoEditor
                className={`w-full rounded-lg`}
                height={'70vh'}
                language={lang}
                defaultValue={localStorage.getItem(lang) || code}
                onMount={(editor, monaco) => {editor.getModel()?.updateOptions({ tabSize: 2 });}}
                theme='vs-dark'
                onChange={(value) => {
                    setCode(value);
                    localStorage.setItem(lang, value);
                }}
                value={code}
            />
        </div>
    )
};