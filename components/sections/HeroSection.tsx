// components/sections/HeroSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Lang, Localized } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

gsap.registerPlugin();

type Props = {
  lang: Lang;
};

export const HeroSection: React.FC<Props> = ({ lang }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-pill", {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
        duration: 0.6,
        ease: "power3.out"
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            filter: "blur(12px)",
            duration: 1,
            ease: "power3.out"
          },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power3.out"
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power3.out"
          },
          "-=0.3"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power3.out"
          },
          "-=0.3"
        );

      gsap.to(".hero-dot", {
        x: 60,
        y: -40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".hero-dot-2", {
        x: -40,
        y: 60,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // parallax + reset on mouse leave
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: x * 20,
          y: y * 10,
          duration: 0.4,
          ease: "power3.out"
        });
      }

      if (subRef.current) {
        gsap.to(subRef.current, {
          x: x * 12,
          y: y * 6,
          duration: 0.4,
          ease: "power3.out"
        });
      }

      gsap.to(".hero-blob", {
        x: x * -40,
        y: y * -40,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const reset = () => {
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      }
      if (subRef.current) {
        gsap.to(subRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      }
      gsap.to(".hero-blob", {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", reset);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", reset);
    };
  }, []);

  const heroTitle: Localized = {
    en: "Frontend developer specializing in React and scalable web applications.",
    vi: "Frontend Developer chuyên về React và các ứng dụng web có thể mở rộng."
  };

  const heroSub: Localized = {
    en: "Building responsive user interfaces, integrating APIs, and maintaining production code for platforms in e-learning, campaign management, logistics, and enterprise tools.",
    vi: "Xây dựng giao diện web responsive, tích hợp API và maintain code production cho các nền tảng e-learning, quản lý chiến dịch, logistics và công cụ doanh nghiệp."
  };

  const scrollText: Localized = {
    en: "Scroll down to see more",
    vi: "Cuộn xuống để xem thêm"
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="section !border-none flex items-center justify-center min-h-[75vh] md:min-h-[90vh]"
    >
      {/* background blobs + dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-blob absolute -top-32 left-0 w-72 h-72 rounded-full bg-[#D81B60]/25 blur-3xl" />
        <div className="hero-blob absolute -bottom-32 right-0 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent)] opacity-60" />
        <div className="hero-dot absolute top-1/3 left-10 w-8 h-8 rounded-full bg-[#D81B60]/30 blur-xl" />
        <div className="hero-dot-2 absolute bottom-1/4 right-16 w-6 h-6 rounded-full bg-emerald-400/30 blur-xl" />
      </div>

      <div className="section-inner relative text-center">
        <Badge className="hero-pill justify-center mb-4">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {lang === "en"
            ? "Frontend Developer · 5+ years · React & TypeScript"
            : "Frontend Developer · 5+ năm · React & TypeScript"}
        </Badge>

        <h1
          ref={titleRef}
          className="hero-title text-4xl md:text-6xl font-semibold mb-4 leading-tight text-[color:var(--text-main)]"
        >
          {heroTitle[lang]}
        </h1>

        <p
          ref={subRef}
          className="hero-sub text-base md:text-lg text-[color:var(--text-subtle)] mb-8 max-w-3xl mx-auto"
        >
          {heroSub[lang]}
        </p>

        <div className="hero-cta flex flex-col md:flex-row items-center justify-center gap-4">
          <Button onClick={() => scrollToSection("#work")} variant="primary">
            {lang === "en" ? "View projects" : "Xem dự án"}
            <span>→</span>
          </Button>
          <Button
            onClick={() => scrollToSection("#about")}
            variant="ghost"
            className="border-none px-0"
          >
            {lang === "en"
              ? "Learn more about my background"
              : "Xem thêm về kinh nghiệm của tôi"}
          </Button>
        </div>

        <div className="hero-scroll mt-16 flex flex-col items-center gap-2 text-xs text-[color:var(--text-muted)]">
          <span>{scrollText[lang]}</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
};
