import React, { useEffect, useRef, useState } from "react";
import brace from "brace";
import InteractiveWrapper from "./InteractiveWrapper";
import "brace/theme/tomorrow_night";
import "brace/mode/javascript";

function BraceEditor() {
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
      // setCodeCheckResult("Code is valid!");
    } catch (error) {
      // setCodeCheckResult("Code is invalid: " + error.message);
    }
  };

  return (
    <InteractiveWrapper title="Try coding">
      <div
        id="brace-editor"
        ref={editorRef}
        style={{ width: "100%", height: "100px" }}
      />
      <div className="flex flex-row w-full">
        <div className="w-full">
          <p className="p-2 text-gray-400 bg-gray-700 font-mono text-xs">
            Output
          </p>
          <p className="p-2 bg-gray-700 font-mono text-sm">
            {">"} hello world {codeCheckResult}
          </p>
        </div>
        <button className="p-5 bg-pink-400 inline-block" onClick={checkCode}>
          &#9658;
        </button>
      </div>
    </InteractiveWrapper>
  );
}

export default BraceEditor;
