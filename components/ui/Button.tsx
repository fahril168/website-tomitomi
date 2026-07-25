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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200",
    outline:
      "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-none",
    white:
      "bg-white text-slate-900 hover:bg-slate-50 shadow-sm border border-slate-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 rounded-xl",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && iconPosition === "left" && <Icon className="w-4.5 h-4.5 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4.5 h-4.5 shrink-0" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === "left" && <Icon className="w-4.5 h-4.5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4.5 h-4.5 shrink-0" />}
    </button>
  );
};
