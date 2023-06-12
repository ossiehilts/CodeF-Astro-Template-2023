import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; 

const TextEditor = ({ lineNumber = 1 }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative p-6 max-w-md mx-auto rounded-xl shadow-md" style={{ background: '#2d2d2d' }}>
      <div className="relative flex">
        <div className="flex flex-col items-center justify-center mr-4">
          <p className="text-gray-500">{lineNumber}</p>
        </div>
        <code
        id="code"
          className="language-javascript w-full text-sm bg-transparent text-transparent caret-white focus:outline-none text-lg h-3"
          contentEditable
onInput={e => {
    document.getElementById('code').innerText = e.target.innerText;
    Prism.highlightAll();

    // Get a range object representing the end of the content
    const range = document.createRange();
    range.selectNodeContents(e.target);
    range.collapse(false);

    // Get the window's selection object and update it with the new range
    const selection = window.getSelection();
    if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
    }
}}

        />
      </div>
    </div>
  );
}

export default TextEditor;
