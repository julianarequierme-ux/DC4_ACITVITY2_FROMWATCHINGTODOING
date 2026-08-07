import React, { useState, useEffect, useRef } from "react";

function DraftEditor() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(0);


  renderCount.current += 1;


  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  
  useEffect(() => {
    console.log("Draft saved: " + text);
  }, [text]); 

  return (
    <div>
      <h2>Draft Editor</h2>

      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your draft..."
      />

      <p>Character Count: {text.length}</p>

      
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default DraftEditor;

