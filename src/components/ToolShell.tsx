import type { ReactNode } from "react";
import { Button } from "../components/ui/button"; 

type ToolShellProps = {
  title: string;
  onExecute: () => void;
  children: ReactNode;
};

const ToolShell = ({ title, onExecute, children }: ToolShellProps) => {
  return (
    <div className="flex flex-col gap-6 bg-card p-6 rounded-lg shadow-md border border-border">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <Button onClick={onExecute}>Execute</Button>
      </div>
      <div className="space-y-6"> 
        {children}
      </div>
    </div>
  );
};

export default ToolShell;