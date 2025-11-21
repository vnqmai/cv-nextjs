// lib/scroll.ts
import gsap from "gsap";

declare global {
  interface Window {
    __lenis?: any;
  }
}

export const scrollToSection = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(target, { offset: 80 });
  } else {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 80 },
      ease: "power2.inOut"
    });
  }
};
