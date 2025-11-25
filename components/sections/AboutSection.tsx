// components/sections/AboutSection.tsx
"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Lang, Localized } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Props = { lang: Lang };

export const AboutSection: React.FC<Props> = ({ lang }) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#about .about-image", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(
      "#about .about-content",
      {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.from("#about .about-chip", {
      opacity: 0,
      y: 10,
      scale: 0.9,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const aboutIntro: Localized = {
    en: "I am a dedicated Frontend Developer with experience in building responsive user interfaces and maintaining scalable web applications. My main stack includes ReactJS, Redux, TypeScript, and SCSS.",
    vi: "Tôi là một Frontend Developer với kinh nghiệm xây dựng giao diện web responsive và duy trì các ứng dụng có thể mở rộng. Stack chính của tôi gồm ReactJS, Redux, TypeScript và SCSS.",
  };

  const aboutDetails: Localized = {
    en: "I have worked on learning platforms, campaign management systems, container planning tools, and enterprise widgets. My responsibilities typically include analyzing requirements, breaking down tasks, implementing UI, integrating APIs, deploying with Jenkins, and resolving bugs in production environments.",
    vi: "Tôi đã tham gia các dự án LMS, hệ thống quản lý chiến dịch, công cụ lập kế hoạch container và widgets doanh nghiệp. Công việc thường bao gồm phân tích yêu cầu, chia task, triển khai UI, tích hợp API, deploy bằng Jenkins và xử lý bug trên môi trường production.",
  };

  return (
    <section id="about" className="section overflow-x-hidden">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">
        <div className="about-image relative">
          <div
            className="rounded-3xl overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--card-bg)] aspect-[4/5] flex items-center justify-center"
            style={{
              backgroundImage: "url(./img/avatar-3.jpg)",
              backgroundSize: "cover"
            }}
          >
            {/* <div className="w-32 h-32 rounded-full border border-[color:var(--border-subtle)] bg-[radial-gradient(circle,_rgba(216,27,96,0.3),_transparent)] flex items-center justify-center">
              <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                Mai
              </span>
            </div> */}
          </div>
          <div className="absolute -bottom-4 left-6 px-4 py-2 rounded-full bg-[color:var(--chip-bg)] text-xs border border-[color:var(--border-subtle)] text-[color:var(--text-subtle)]">
            Ho Chi Minh City · Vietnam · Remote-friendly
          </div>
        </div>

        <div className="about-content space-y-4">
          <SectionTitle
            eyebrow={{ en: "About", vi: "Giới thiệu" }}
            title={{
              en: "Frontend developer with over five years of experience.",
              vi: "Frontend Developer với hơn 5 năm kinh nghiệm.",
            }}
            lang={lang}
          />
          <p className="text-sm md:text-base text-[color:var(--text-subtle)]">
            {aboutIntro[lang]}
          </p>
          <p className="text-sm md:text-base text-[color:var(--text-muted)]">
            {aboutDetails[lang]}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "ReactJS · TypeScript",
              "Redux / Redux Toolkit",
              "SCSS, Tailwind",
              "Agile / Scrum",
            ].map((tag) => (
              <span
                key={tag}
                className="about-chip px-3 py-1 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--chip-bg)] text-xs text-[color:var(--text-subtle)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
