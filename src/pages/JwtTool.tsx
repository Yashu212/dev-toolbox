import { useState } from "react";
import Editor from "@monaco-editor/react";
import ToolShell from "../components/ToolShell";

const JwtTool = () => {
  const [jwt, setJwt] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0IiwibmFtZSI6Illhc2ggU2h1a2xhIiwicm9sZSI6ImFkbWluIn0.dummysignature");
  const [output, setOutput] = useState("");

  const decodeBase64 = (str: string) => {
    try {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
    } catch {
      return "Invalid base64 encoding";
    }
  };

  const handleDecodeJwt = () => {
    const parts = jwt.split(".");
    if (parts.length !== 3) {
      setOutput("Invalid JWT format: A JWT must have three parts separated by dots (header.payload.signature)");
      return;
    }

    const [header, payload] = parts;
    const decodedHeader = decodeBase64(header);
    const decodedPayload = decodeBase64(payload);

    setOutput(`Header:\n${decodedHeader}\n\nPayload:\n${decodedPayload}`);
  };

  return (
    <ToolShell title="JWT Decoder" onExecute={handleDecodeJwt}>
      <div className="bg-input rounded-md overflow-hidden border border-border">
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">JWT Token</h3>
        <Editor
          height="150px"
          language="text"
          value={jwt}
          onChange={(val) => setJwt(val || "")}
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

      <div className="bg-card rounded-md border border-border shadow-sm">
        <h3 className="p-3 text-lg font-medium bg-secondary text-secondary-foreground border-b border-border">Decoded Output</h3>
        <pre className="text-sm p-4 rounded-b-md whitespace-pre-wrap overflow-auto max-h-96 text-foreground">
          {output || "Enter a JWT and click 'Execute' to decode."}
        </pre>
      </div>
    </ToolShell>
  );
};

export default JwtTool;