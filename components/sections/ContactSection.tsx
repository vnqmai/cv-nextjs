// components/sections/ContactSection.tsx
"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Lang, Localized } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

import IconEnvelope from "@/public/icons/envelope.svg";
import IconFile from "@/public/icons/file.svg";
import IconGithub from "@/public/icons/github.svg";
import IconLinkedIn from "@/public/icons/linkedin.svg";

type Props = { lang: Lang };

export const ContactSection: React.FC<Props> = ({ lang }) => {
  useGSAP(() => {
    gsap.from("#contact .contact-inner", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  const intro: Localized = {
    en: "Feel free to reach out if you are looking for a frontend developer or want to discuss a project. I'm available for remote-friendly roles and collaborations.",
    vi: "Nếu bạn đang tìm một Frontend Developer hoặc muốn trao đổi về dự án, hãy liên hệ với tôi. Tôi sẵn sàng cho các cơ hội làm việc remote."
  };

  // const nameLabel: Localized = {
  //   en: "Your name",
  //   vi: "Tên của bạn"
  // };

  // const projLabel: Localized = {
  //   en: "Your project / idea",
  //   vi: "Dự án / ý tưởng"
  // };

  // const msgLabel: Localized = {
  //   en: "Message",
  //   vi: "Lời nhắn"
  // };

  // const namePlaceholder: Localized = {
  //   en: "How should I call you?",
  //   vi: "Tôi nên xưng hô với bạn như thế nào?"
  // };

  // const projPlaceholder: Localized = {
  //   en: "What are you working on?",
  //   vi: "Bạn đang làm về dự án gì?"
  // };

  // const msgPlaceholder: Localized = {
  //   en: "Share details about your project, timeline, and expectations.",
  //   vi: "Hãy chia sẻ thêm về dự án, thời gian và mong đợi của bạn."
  // };

  // const sendLabel: Localized = {
  //   en: "Send message",
  //   vi: "Gửi lời nhắn"
  // };

  // nhớ copy file CV vào /public/cv/FrontendDeveloper_VoNgocQuynhMai.pdf
  const resumeHref = "/cv/FrontendDeveloper_VoNgocQuynhMai.pdf";
  const emailHref = "mailto:vnqmai01@gmail.com";
  const githubHref = "https://github.com/vnqmai";
  const linkedInHref = "https://www.linkedin.com"; // sửa thành LinkedIn thật của bạn

  const linkItems = [
    {
      key: "resume",
      href: resumeHref,
      icon: <IconFile />,
      label:
        lang === "en"
          ? "Resume"
          : "CV"
    },
    {
      key: "linkedin",
      href: linkedInHref,
      icon: <IconLinkedIn />,
      label:
        lang === "en"
          ? "LinkedIn"
          : "LinkedIn"
    },
    {
      key: "github",
      href: githubHref,
      icon: <IconGithub />,
      label:
        lang === "en"
          ? "GitHub"
          : "GitHub"
    },
    {
      key: "email",
      href: emailHref,
      icon: <IconEnvelope />,
      label:
        lang === "en"
          ? "Email"
          : "Email"
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner contact-inner text-center">
        <SectionTitle
          eyebrow={{ en: "Contact", vi: "Liên hệ" }}
          title={{ en: "Let's work together.", vi: "Cùng hợp tác nhé." }}
          align="center"
          lang={lang}
        />
        <p className="text-sm md:text-base text-[color:var(--text-subtle)] mb-8 mt-3">
          {intro[lang]}
        </p>

        {/* Form contact */}
        {/* <form className="space-y-4 text-left">
          <div>
            <label className="block text-xs text-[color:var(--text-muted)] mb-1">
              {nameLabel[lang]}
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-[color:var(--input-bg)] border border-[color:var(--border-subtle)] px-3 py-2 text-sm outline-none focus:border-[#D81B60]"
              placeholder={namePlaceholder[lang]}
            />
          </div>
          <div>
            <label className="block text-xs text-[color:var(--text-muted)] mb-1">
              {projLabel[lang]}
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-[color:var(--input-bg)] border border-[color:var(--border-subtle)] px-3 py-2 text-sm outline-none focus:border-[#D81B60]"
              placeholder={projPlaceholder[lang]}
            />
          </div>
          <div>
            <label className="block text-xs text-[color:var(--text-muted)] mb-1">
              {msgLabel[lang]}
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl bg-[color:var(--input-bg)] border border-[color:var(--border-subtle)] px-3 py-2 text-sm outline-none focus:border-[#D81B60] resize-none"
              placeholder={msgPlaceholder[lang]}
            />
          </div>

          <Button type="submit" className="mt-4 w-full md:w-auto">
            {sendLabel[lang]}
          </Button>
        </form> */}

        {/* 🔗 List link item: icon + text + link */}
        <ul className="mt-8 flex md:flex-nowrap flex-wrap items-start gap-2 text-sm text-[color:var(--text-subtle)]">
          {linkItems.map((item) => (
            <li key={item.key} className="w-full">
              <a
                href={item.href}
                target={item.key === "email" ? undefined : "_blank"}
                rel={item.key === "email" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[color:var(--chip-bg)] transition-colors"
              >
                <span className="text-base">{item.icon}</span>
                <span className="underline underline-offset-4 decoration-[rgba(156,163,175,0.6)] hover:decoration-[#D81B60]">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
