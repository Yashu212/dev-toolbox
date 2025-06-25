import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-md text-sm font-medium
               ring-offset-background transition-colors focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
               disabled:pointer-events-none disabled:opacity-50
               bg-blue-600 text-white hover:bg-blue-700
               h-10 px-4 py-2
               shadow-md hover:shadow-lg active:shadow-md" 
    {...props}
  >
    {children}
  </button>
);