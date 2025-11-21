import React from "react";

export const EmotionBackground: React.FC = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 bg-[color:var(--bg-page)]" />
    <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-[#D81B60]/25 blur-3xl" />
    <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full bg-emerald-400/20 blur-3xl" />
    <div className="absolute bottom-[-120px] left-1/4 w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent)] opacity-70" />
  </div>
);
