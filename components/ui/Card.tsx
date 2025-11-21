import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export const Card: React.FC<Props> = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--card-bg)] ${className}`}
  >
    {children}
  </div>
);
