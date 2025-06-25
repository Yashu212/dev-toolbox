import { useState } from "react";
import Editor from "@monaco-editor/react";
import ToolShell from "../components/ToolShell";

const RegexTool = () => {
  const [pattern, setPattern] = useState("\\b\\w{5}\\b");
  const [testText, setTestText] = useState("Hello world, regex is fun! You can test your patterns here.");
  const [output, setOutput] = useState("");

  const handleRunRegex = () => {
    try {
      const regex = new RegExp(pattern, "g");
      const matches = [...testText.matchAll(regex)].map((m) => m[0]);
      setOutput(matches.length ? matches.join("\n") : "No matches found.");
    } catch (err: any) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <ToolShell title="Regex Tester" onExecute={handleRunRegex}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <div className="bg-input rounded-md overflow-hidden border border-border">
          <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Regex Pattern</h3>
          <Editor
            height="150px"
            language="javascript" 
            value={pattern}
            onChange={(value) => setPattern(value || "")}
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

        <div className="bg-input rounded-md overflow-hidden border border-border">
          <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Test String</h3>
          <Editor
            height="150px"
            language="text"
            value={testText}
            onChange={(value) => setTestText(value || "")}
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
      </div>

      <div className="bg-card rounded-md border border-border shadow-sm">
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Output</h3>
        <pre className="text-sm p-4 rounded-b-md whitespace-pre-wrap overflow-auto max-h-96 text-foreground">
          {output || "Run the regex to see matches."}
        </pre>
      </div>
    </ToolShell>
  );
};

export default RegexTool;