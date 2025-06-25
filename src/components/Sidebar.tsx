import { cn } from "../lib/utils";
import {
  Wrench, 
  Code, 
  FileText, 
  Key, 
  Type, 
} from "lucide-react";

const toolList = [
  { id: "regex", label: "Regex Tester", icon: Type },
  { id: "json", label: "JSON Formatter", icon: Code },
  { id: "markdown", label: "Markdown Previewer", icon: FileText },
  { id: "jwt", label: "JWT Decoder", icon: Key },
];


const Sidebar = ({
  selectedTool,
  setSelectedTool,
}: {
  selectedTool: string;
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-64 bg-muted p-4 border-r border-border space-y-4 flex flex-col">
      <h1 className="text-xl font-bold flex items-center gap-2 mb-4 pb-4 border-b border-border">
        <Wrench size={24} /> <span>Dev Toolbox</span>
      </h1>
      <nav className="flex-1 space-y-2">
        {toolList.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={cn(
                "group flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors duration-200",
                selectedTool === tool.id
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "hover:bg-accent/70 hover:text-accent-foreground"
              )}
            >
              <Icon size={18} className="text-muted-foreground group-hover:text-accent-foreground transition-colors duration-200" />
              <span>{tool.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;