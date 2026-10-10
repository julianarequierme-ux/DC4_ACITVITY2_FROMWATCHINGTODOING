import { useEffect, useRef, useState } from "react";
import "./App.css";

function DraftEditor() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const displayedRenderCount = useRef(null);

  renderCount.current += 1;
  if (displayedRenderCount.current === null) {
    displayedRenderCount.current = renderCount.current;
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("Draft saved: " + text);
  }, [text]);

  return (
    <main className="draft-editor">
      <h1>Draft Editor</h1>
      <label htmlFor="draft-input">Your draft</label>
      <input
        id="draft-input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type your draft..."
      />
      <p>Character Count: {text.length}</p>
      <p>Render Count: {displayedRenderCount.current}</p>
    </main>
  );
}

export default DraftEditor;

// renderCount.current increases in the component body, but a ref mutation alone does not trigger a render. Typing does trigger renders through the text state, so renderCount.current continues increasing in the background. The screen reads a separate ref that stores the first render-count value and is never updated; therefore the displayed number stays fixed while typing, even though the live renderCount ref changes.
