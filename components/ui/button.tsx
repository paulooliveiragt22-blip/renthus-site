import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-renthus-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-renthus-surface",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            default:
              "border border-gray-200 bg-white text-renthus-purple shadow-sm hover:scale-[1.02] hover:border-renthus-orange/35 hover:bg-gray-50 hover:shadow-md",
            outline:
              "border border-gray-300 bg-transparent text-gray-800 hover:scale-[1.02] hover:border-renthus-orange hover:text-renthus-purple hover:shadow-sm",
            ghost:
              "text-gray-600 hover:bg-gray-100 hover:text-renthus-purple hover:scale-[1.02]",
            cta:
              "bg-renthus-orange text-white shadow-sm hover:bg-renthus-orange-hover hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
          }[variant],
          {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-5 text-sm",
            lg: "h-12 px-8 text-base",
          }[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
