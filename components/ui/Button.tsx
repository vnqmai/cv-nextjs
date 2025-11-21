import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-colors border";
  const styles =
    variant === "primary"
      ? "border-[color:var(--border-subtle)] bg-[color:var(--button-bg)] hover:bg-[color:var(--button-bg-hover)]"
      : "border-transparent text-[color:var(--text-subtle)] hover:text-[color:var(--text-main)]";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
