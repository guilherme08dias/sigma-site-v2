"use client";

interface LogoProps {
  className?: string;
  variant?: "color" | "negative";
  heightClass?: string;
}

export default function Logo({ className = "", variant = "color", heightClass = "h-14 md:h-20" }: LogoProps) {
  const filterStyle = variant === "negative" 
    ? { filter: "brightness(0) invert(1)" }
    : {};

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Logo SigmaPDV.svg" 
        alt="SigmaPDV Automação Comercial" 
        className={`${heightClass} w-auto`}
        style={filterStyle}
      />
    </div>
  );
}
