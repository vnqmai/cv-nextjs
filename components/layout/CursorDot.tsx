"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#D81B60]/70 bg-[#D81B60]/10 backdrop-blur-sm mix-blend-screen"
    />
  );
};
