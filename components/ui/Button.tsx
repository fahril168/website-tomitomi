import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm";

  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30",
    secondary:
      "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60",
    outline:
      "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white",
    ghost:
      "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 shadow-none",
    white:
      "bg-white text-emerald-700 hover:bg-emerald-50 shadow-md hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5 rounded-2xl",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && iconPosition === "left" && <Icon className="w-5 h-5 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-5 h-5 shrink-0" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 shrink-0" />}
    </button>
  );
};
