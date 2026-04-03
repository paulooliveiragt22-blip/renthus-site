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
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-renthus-orange/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0716]",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            default:
              "bg-renthus-purple-light/20 text-zinc-100 border border-white/10 hover:border-renthus-orange/40 hover:bg-renthus-purple-light/30",
            outline:
              "border border-white/15 bg-transparent text-zinc-100 hover:border-renthus-orange/50 hover:text-white",
            ghost: "text-zinc-300 hover:bg-white/5 hover:text-white",
            cta:
              "bg-gradient-to-br from-[#FF8C00] to-[#FF4500] text-white shadow-orange-glow-soft hover:shadow-orange-glow-soft-lg hover:scale-[1.02] active:scale-[0.98]",
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
