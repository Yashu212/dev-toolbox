// App.tsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import RegexTool from "./pages/RegexTool";
import JsonTool from "./pages/JsonTool";
import MarkdownTool from "./pages/MarkdownTool";
import JwtTool from "./pages/JwtTool";

const tools = {
  regex: <RegexTool />,
  json: <JsonTool />,
  markdown: <MarkdownTool />,
  jwt: <JwtTool />,
};

function App() {
  const [selectedTool, setSelectedTool] = useState<keyof typeof tools>("regex");

  return (
    <div className="flex h-screen bg-background text-foreground font-sans"> 
      <Sidebar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <div className="flex-1 p-8 overflow-y-auto relative"> 
        <div className="absolute top-4 right-4 z-10"> 
          <DarkModeToggle />
        </div>
        <div className="max-w-4xl mx-auto py-4">
          {tools[selectedTool]}
        </div>
      </div>
    </div>
  );
}

export default App;