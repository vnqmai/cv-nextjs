"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  lang: Lang;
  onSwitchLang: (l: Lang) => void;
};

export const Header: React.FC<Props> = ({
  theme,
  toggleTheme,
  lang,
  onSwitchLang
}) => {
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBorder(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 md:px-8 pt-4">
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-colors duration-300 ${
          hasBorder
            ? "border-[color:var(--border-subtle)] bg-[color:var(--section-bg)]/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D81B60] flex items-center justify-center text-xs font-semibold text-white">
            M
          </div>
          <span className="text-xs sm:text-sm text-[color:var(--text-muted)]">
            Vo Ngoc Quynh Mai · Frontend Developer
          </span>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm text-[color:var(--text-subtle)]">
            <button
              onClick={() => scrollToSection("#work")}
              className="hover:text-[color:var(--text-main)]"
            >
              {lang === "en" ? "Work" : "Dự án"}
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className="hover:text-[color:var(--text-main)]"
            >
              {lang === "en" ? "About" : "Giới thiệu"}
            </button>
            <button
              onClick={() => scrollToSection("#experience")}
              className="hover:text-[color:var(--text-main)]"
            >
              {lang === "en" ? "Experience" : "Kinh nghiệm"}
            </button>
            <button
              onClick={() => scrollToSection("#skills")}
              className="hover:text-[color:var(--text-main)]"
            >
              {lang === "en" ? "Skills" : "Kỹ năng"}
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="hover:text-[color:var(--text-main)]"
            >
              {lang === "en" ? "Contact" : "Liên hệ"}
            </button>
          </nav>

          {/* Lang switch */}
          <div className="flex items-center gap-1 text-[10px] border border-[color:var(--border-subtle)] rounded-full px-1.5 py-0.5 bg-[color:var(--chip-bg)]">
            <button
              onClick={() => onSwitchLang("en")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "en"
                  ? "bg-[#D81B60] text-white"
                  : "text-[color:var(--text-subtle)]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onSwitchLang("vi")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "vi"
                  ? "bg-[#D81B60] text-white"
                  : "text-[color:var(--text-subtle)]"
              }`}
            >
              VI
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--chip-bg)] flex items-center justify-center text-xs text-[color:var(--text-subtle)] hover:text-[color:var(--text-main)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};
