"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-body font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sigma-orange disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-sigma-orange text-white shadow-lg shadow-sigma-orange/20 hover:bg-sigma-orange/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border-2 border-transparent",
        secondary: "bg-white text-sigma-dark border-2 border-transparent shadow-sm hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
        outline: "bg-transparent border-2 border-sigma-dark/10 text-sigma-dark hover:border-sigma-dark hover:bg-sigma-dark hover:text-white hover:-translate-y-0.5 active:scale-95",
        ghost: "bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-sigma-dark hover:-translate-y-0.5 active:scale-95",
        subtle: "bg-white/10 text-white hover:bg-white/20 border-2 border-transparent backdrop-blur-sm hover:-translate-y-0.5 active:scale-95",
      },
      size: {
        default: "h-12 px-8 py-3 text-base [&_svg]:size-5",
        sm: "h-10 px-6 py-2 text-sm [&_svg]:size-4",
        lg: "h-14 px-10 py-4 text-lg [&_svg]:size-6",
        xl: "h-16 px-12 py-5 text-xl [&_svg]:size-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
