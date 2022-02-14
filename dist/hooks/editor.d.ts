/// <reference types="react" />
export declare const useEditorInput: (consoleFocused: boolean, editorInput: string, setEditorInput: any, setProcessCurrentLine: any, enableInput: boolean) => void;
export declare const useBufferedContent: (processCurrentLine: any, setProcessCurrentLine: any, prompt: string, currentText: any, setCurrentText: any, commands: any, errorMessage: any) => void;
export declare const useCurrentLine: (caret: boolean, consoleFocused: boolean, prompt: string, commands: any, errorMessage: any, enableInput: boolean) => JSX.Element;
export declare const useScrollToBottom: (changesToWatch: any, wrapperRef: any) => void;
