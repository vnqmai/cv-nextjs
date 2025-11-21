// components/sections/SkillsSection.tsx
"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Lang } from "@/lib/content";
import { skillsGroups } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

type Props = { lang: Lang };

export const SkillsSection: React.FC<Props> = ({ lang }) => {
  useGSAP(() => {
    gsap.from(".skill-card", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow={{ en: "Skills", vi: "Kỹ năng" }}
          title={{
            en: "Technologies and tools I work with.",
            vi: "Công nghệ và công cụ tôi sử dụng."
          }}
          lang={lang}
        />

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {skillsGroups.map((group) => (
            <Card
              key={group.title.en}
              className="skill-card rounded-2xl p-5 flex flex-col gap-3"
            >
              <h3 className="text-sm font-semibold text-[color:var(--text-main)]">
                {group.title[lang]}
              </h3>
              <ul className="space-y-1.5 text-sm text-[color:var(--text-subtle)]">
                {group.items.map((item) => (
                  <li key={item.en} className="flex gap-2">
                    <span className="mt-[7px] h-[3px] w-[10px] rounded-full bg-[#D81B60]" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
