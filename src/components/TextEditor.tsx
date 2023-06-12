import React, { useEffect, useRef, useState } from "react";
import brace from "brace";
import InteractiveWrapper from "./InteractiveWrapper";
import "brace/theme/tomorrow_night";
import "brace/mode/javascript";

function BraceEditor({ lang = "js", title = "untitled" }) {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [codeCheckResult, setCodeCheckResult] = useState("");

  useEffect(() => {
    const braceEditor = brace.edit(editorRef.current);
    braceEditor.getSession().setMode("brace/mode/javascript");
    braceEditor.setTheme("brace/theme/tomorrow_night");
    braceEditor.setFontSize(18);
    setEditor(braceEditor);
  }, []);

  const checkCode = () => {
    try {
      // console.log(editor.getValue());
      setCodeCheckResult("Code is valid!");
    } catch (error) {
      setCodeCheckResult("Code is invalid: " + error.message);
    }
  };

  return (
    <InteractiveWrapper title="Try coding">
      <div className="flex">
        <div className="px-4 py-2 bg-gray-200 text-gray-500 rounded-t-lg shadow-md text-xs border-b-2 border-gray-300">
          {title}.{lang}
        </div>
      </div>
      <div
        id="brace-editor"
        ref={editorRef}
        style={{ width: "100%", height: "100px" }}
      />
      <div className="flex flex-row w-full overflow-hidden rounded-b-lg">
        {codeCheckResult && (
          <div className="w-full">
            <div>
              <p className="p-2 text-gray-400 bg-gray-700 font-mono text-xs">
                Output
              </p>
              <p className="p-2 bg-gray-700 font-mono text-sm">
                {">"} {codeCheckResult}
              </p>
            </div>
          </div>
        )}
        <button
          className={`p-5 bg-cyan-400 block w-${
            codeCheckResult ? "60" : "full"
          }`}
          onClick={checkCode}
        >
          &#9658;
        </button>
      </div>
    </InteractiveWrapper>
  );
}

export default BraceEditor;
