// components/sections/WorkSection.tsx
"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Lang } from "@/lib/content";
import { projects } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

type Props = { lang: Lang };

export const WorkSection: React.FC<Props> = ({ lang }) => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0.25, scale: 0.96, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <section id="work" className="section">
      <div className="section-inner">
        <div className="flex items-baseline justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow={{ en: "Projects", vi: "Dự án" }}
            title={{
              en: "Selected web applications I have worked on.",
              vi: "Một số dự án web tiêu biểu tôi đã tham gia."
            }}
            description={{
              en: "A selection of platforms where I implemented frontend features, integrated APIs, and collaborated with cross-functional teams.",
              vi: "Các sản phẩm nơi tôi phát triển frontend, tích hợp API và phối hợp với nhiều team."
            }}
            lang={lang}
          />
        </div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="work-card p-5 md:p-7 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-10"
            >
              <div className="relative md:w-2/5">
                <div
                  className="rounded-2xl bg-gradient-to-br from-[#111827] via-[#020617] to-black border border-[color:var(--border-subtle)] aspect-[4/3] overflow-hidden flex items-center justify-center text-xs text-[color:var(--text-muted)]"
                  style={{
                    backgroundImage: `url(./img/${project.imageName})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {
                    !project.imageName &&
                    <span className="px-4 text-center">
                      {lang === "en"
                        ? "Project preview / mockup (replace with real screenshot)"
                        : "Preview / mockup dự án (thay bằng screenshot thật)"}
                    </span>
                  }
                </div>
                <Badge className="absolute -bottom-3 left-4 text-[10px] px-3 py-1 bg-[color:var(--chip-bg)]">
                  {project.label[lang]}
                </Badge>
              </div>

              <div className="md:w-3/5 flex flex-col gap-3">
                <h3 className="text-lg md:text-xl font-semibold text-[color:var(--text-main)]">
                  {project.title[lang]}
                </h3>
                <p className="text-sm text-[color:var(--text-subtle)]">
                  {project.subtitle[lang]}
                </p>

                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)] mt-1">
                  {lang === "en"
                    ? "Focus & responsibilities"
                    : "Phạm vi & trách nhiệm"}
                </p>
                <p className="text-sm text-[color:var(--text-main)]/80">
                  {project.focus[lang]}
                </p>

                <ul className="mt-3 space-y-2 text-sm text-[color:var(--text-subtle)]">
                  {project.bullets.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[12px] rounded-full bg-[#D81B60]" />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-[color:var(--text-muted)]">
                  Stack:{" "}
                  <span className="text-[color:var(--text-subtle)]">
                    {project.stack}
                  </span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
