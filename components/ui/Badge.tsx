import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export const Badge: React.FC<Props> = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--chip-bg)] text-xs text-[color:var(--text-subtle)] ${className}`}
  >
    {children}
  </span>
);
