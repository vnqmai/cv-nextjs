// components/sections/ExperienceSection.tsx
"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Lang } from "@/lib/content";
import { experiences } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Props = { lang: Lang };

export const ExperienceSection: React.FC<Props> = ({ lang }) => {
  useGSAP(() => {
    gsap.from(".experience-line", {
      scaleY: 0,
      transformOrigin: "top center",
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        end: "bottom 40%",
        scrub: true
      }
    });

    gsap.from(".experience-item", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow={{ en: "Experience", vi: "Kinh nghiệm làm việc" }}
          title={{
            en: "Professional experience.",
            vi: "Kinh nghiệm làm việc chuyên môn."
          }}
          lang={lang}
        />

        <div className="relative pl-6 md:pl-10 mt-8">
          <div className="experience-line absolute left-[13px] md:left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D81B60] via-[color:var(--border-subtle)] to-transparent" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-item relative flex gap-4 md:gap-6"
              >
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#D81B60] border border-[color:var(--border-subtle)]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[color:var(--text-muted)]">
                    {exp.period}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold text-[color:var(--text-main)]">
                    {exp.company} ·{" "}
                    <span className="text-[color:var(--text-subtle)]">
                      {exp.role}
                    </span>
                  </h3>
                  <p className="text-sm text-[color:var(--text-subtle)]">
                    {exp.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
