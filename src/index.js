import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);
  

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
   <>
     <button onClick={showValue}>Show value</button>
     <Editor
       height="90vh"
       language="python" 
       defaultValue="#some comment"
       onMount={handleEditorDidMount}
     />
   </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);