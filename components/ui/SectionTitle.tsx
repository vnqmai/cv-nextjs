import React from "react";
import type { Lang, Localized } from "@/lib/content";

type Props = {
  eyebrow?: Localized;
  title?: Localized;
  description?: Localized;
  align?: "left" | "center" | "right";
  lang: Lang;
};

export const SectionTitle: React.FC<Props> = ({
  eyebrow,
  title,
  description,
  align = "left",
  lang
}) => {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--text-muted)]">
          {eyebrow[lang]}
        </p>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mt-1 text-[color:var(--text-main)]">
          {title[lang]}
        </h2>
      )}
      {description && (
        <p className="text-xs md:text-sm text-[color:var(--text-muted)] max-w-xs">
          {description[lang]}
        </p>
      )}
    </div>
  );
};
