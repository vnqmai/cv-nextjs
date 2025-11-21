// app/[lang]/page.tsx
"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EmotionBackground } from "@/components/layout/EmotionBackground";
import { CursorDot } from "@/components/layout/CursorDot";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Lang } from "@/lib/content";

// Đăng ký plugin GSAP để dùng ScrollTrigger + ScrollTo cho toàn bộ page
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

declare global {
  interface Window {
    __lenis?: any;
  }
}

// Lenis smooth scroll
const useLenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08
    });

    window.__lenis = lenis;

    const onScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
};

const LangPage: React.FC<{ params: { lang: string } }> = ({ params }) => {
  const router = useRouter();
  
  // 👇 unwrap params Promise bằng React.use (Next yêu cầu)
  const { lang: rawLang } = use(params);
  const lang: Lang = rawLang === "vi" ? "vi" : "en";
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useLenisSmoothScroll();

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleSwitchLang = (nextLang: Lang) => {
    if (nextLang === lang) return;
    router.push(`/${nextLang}`);
  };

  return (
    <main
      data-theme={theme}
      className="min-h-screen transition-colors duration-500 bg-[color:var(--bg-page)] text-[color:var(--text-main)] cursor-none"
    >
      <EmotionBackground />
      <CursorDot />

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        onSwitchLang={handleSwitchLang}
      />

      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <WorkSection lang={lang} />
      <ExperienceSection lang={lang} />
      <SkillsSection lang={lang} />
      <ContactSection lang={lang} />
    </main>
  );
};

export default LangPage;
