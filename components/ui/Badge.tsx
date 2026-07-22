import React from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "emerald" | "default";
}

export const Badge: React.FC<BadgeProps> = ({ children, icon: Icon, variant = "default" }) => {
  const variantStyles = {
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    default: "bg-slate-100 text-slate-800 border-slate-200",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border ${variantStyles[variant]}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  );
};
