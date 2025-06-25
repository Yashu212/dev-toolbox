import { useState } from "react";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import ToolShell from "../components/ToolShell";

const MarkdownTool = () => {
  const [markdown, setMarkdown] = useState("# Hello Markdown!\n\nThis is a simple **Markdown Previewer**.\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log('Hello, world!');\n```\n\n[Visit Yash's Github](https://github.com/Yashu212)");
  const [preview, setPreview] = useState("Run the tool to see the preview...");

  const handleRender = () => {
    setPreview(markdown);
  };

  return (
    <ToolShell title="Markdown Previewer" onExecute={handleRender}>
      {/* Editor */}
      <div className="bg-input rounded-md overflow-hidden border border-border">
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Markdown Input</h3>
        <Editor
          height="200px"
          language="markdown"
          value={markdown}
          onChange={(val) => setMarkdown(val || "")}
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

      {/* Preview */}
      <div className="bg-card rounded-md border border-border shadow-sm">
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Preview</h3>
        <div className="prose dark:prose-invert max-w-none p-4 rounded-b-md overflow-auto min-h-[150px] text-foreground">
          <ReactMarkdown>{preview}</ReactMarkdown>
        </div>
      </div>
    </ToolShell>
  );
};

export default MarkdownTool;