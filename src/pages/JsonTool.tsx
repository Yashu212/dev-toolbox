import { useState } from "react";
import Editor from "@monaco-editor/react";
import ToolShell from "../components/ToolShell";

const JsonTool = () => {
  const [jsonInput, setJsonInput] = useState('{"name": "Dev Toolbox", "version": "1.0.0", "description": "A collection of useful developer tools."}');
  const [output, setOutput] = useState("");

  const handleValidateAndFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (err: any) {
      setOutput("Invalid JSON: " + err.message);
    }
  };

  return (
    <ToolShell title="JSON Formatter / Validator" onExecute={handleValidateAndFormat}>
      <div className="bg-input rounded-md overflow-hidden border border-border"> {/* Editor container */}
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">JSON Input</h3>
        <Editor
          height="250px"
          language="json"
          value={jsonInput}
          onChange={(val) => setJsonInput(val || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            renderValidationDecorations: 'off',
          }}
        />
      </div>

      <div className="bg-card rounded-md border border-border shadow-sm"> {/* Output container */}
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Output</h3>
        <pre className="text-sm p-4 rounded-b-md whitespace-pre-wrap overflow-auto max-h-96 text-foreground">
          {output || "Run the tool to see output..."}
        </pre>
      </div>
    </ToolShell>
  );
};

export default JsonTool;