import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css'

gsap.registerPlugin(ScrollTrigger);

export const useHomePageParallax = (setIsNavbarVisible, setLogoVariant, triggerCardAnimation, setIsLogoVisible) => {
  const container = useRef();

  useGSAP(() => {
    // ----- INITIAL SETTINGS -----
    gsap.set(".hero-video-section", { opacity: 1 });
    gsap.set(".hero-title-main", { opacity: 0, y: 30 });
    gsap.set(".hero-title-animated", { opacity: 0, y: 20 });

    gsap.set(".hero-buttons-wrapper", {
      opacity: 0,
      y: 20,
      position: "relative"
    });

    gsap.set(".mask-svg-layer", { opacity: 0 });
    gsap.set(".mask-group", { scale: 50, transformOrigin: "50% 50%", svgOrigin: "960 540" });
    gsap.set(".perairan-section", { visibility: "hidden", opacity: 0 });
    gsap.set(".perairan-title", { opacity: 0, y: 30 });
    gsap.set(".perairan-title2", { opacity: 0, y: 30, visibility: "hidden" });
    gsap.set(".info-cards-grid", { opacity: 0, y: 50 });
    gsap.set(".transition-bar-top", { yPercent: -100 });
    gsap.set(".info-section", { visibility: "hidden", opacity: 1, clipPath: "circle(0% at 50% 50%)" });
    gsap.set(".info-cards-container", { opacity: 0, y: 50 });
    gsap.set(".stats-section", { visibility: "hidden", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    gsap.set(".stats-content-1", { opacity: 0, x: -50, y: 30 });
    gsap.set(".stats-content-2", { opacity: 0, x: 50, y: 40 });
    gsap.set(".stats-content-3", { opacity: 0, x: -50, y: 30 });
    gsap.set(".conservation-section", { visibility: "hidden", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    gsap.set(".mission-section", { visibility: "hidden", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    gsap.set(".mission-content", { opacity: 1, y: 0 });
    gsap.set(".callcenter-section", { visibility: "hidden", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    gsap.set(".callcenter-content", { opacity: 1, y: 0 });
    gsap.set(".footer-section-wrapper", { yPercent: 100 });

    // ----- HERO INTRO (AUTO PLAY ON LOAD) -----
    gsap.timeline()
      .to(".hero-title-main", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 })
      .to(".hero-title-animated", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
      .to(".hero-buttons-wrapper", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.6");

    let perairanCardsAnimated = false;
    let infoCardsAnimated = false;

    // ----- MAIN SCROLL TIMELINE -----
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mask-wrapper",
        start: "top top",
        end: "+=6000%",
        pin: true,
        scrub: 2,
        onUpdate: () => {
          setIsNavbarVisible(true);
        }
      }
    });

    // 1. Jeda Awal
    tl.to({}, { duration: 8 });

    // ===== MASK ANIMATION =====
    tl.to(".hero-video-section", { duration: 4, ease: "none" })
      .to(".mask-svg-layer", { opacity: 1, duration: 3 })
      .to(".mask-group", { scale: 1, duration: 3, ease: "power2.inOut", svgOrigin: "960 540" }, "<")
      .to(".mask-group", { scale: 0.5, opacity: 0, duration: 3, ease: "power2.in", svgOrigin: "960 540" })
      .to(".transition-bar-top", { yPercent: 0, duration: 3, ease: "power2.inOut" })
      .to({}, { duration: 1 })
      .to(".mask-svg-layer", { opacity: 0, duration: 1.5, ease: "power2.out" })

      // ===== PERAIRAN SECTION =====
      .set(".perairan-section", { visibility: "visible" })
      .to(".perairan-section", { opacity: 1, duration: 1 })
      .to(".transition-bar-top", { yPercent: -100, duration: 3, ease: "power2.inOut" })
      .to(".perairan-title", { opacity: 1, y: 0, duration: 2, ease: "power2.out" })
      .to({}, { duration: 1 })
      .to(".perairan-title", { opacity: 0, y: -100, duration: 4, ease: "power2.in" })
      .to(".info-cards-grid", {
        opacity: 1,
        y: 0,
        duration: 5,
        ease: "power2.out",
        onStart: () => {
          if (!perairanCardsAnimated) {
            perairanCardsAnimated = true;
            triggerCardAnimation('perairan');
          }
        }
      })
      .to({}, { duration: 2 })
      .to(".info-cards-grid", { y: -100, opacity: 0, duration: 5, ease: "power2.in" })
      .set(".perairan-title2", { visibility: "visible" })
      .to(".perairan-title2", { opacity: 1, y: 0, duration: 2, ease: "power2.out" })
      .to({}, { duration: 2 })
      .to(".perairan-title2", { opacity: 0, y: -100, duration: 5, ease: "power2.in" })
      .call(() => {
        setLogoVariant('white');
      })

      // ===== INFO SECTION =====
      .set(".info-section", { visibility: "visible", clipPath: "circle(0% at 50% 50%)" })
      .to(".info-section", { clipPath: "circle(150% at 50% 50%)", duration: 5, ease: "power2.inOut" })
      .to(".info-cards-container", {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        onStart: () => {
          if (!infoCardsAnimated) {
            infoCardsAnimated = true;
            triggerCardAnimation('info');
          }
        }
      }, "-=2")
      .to({}, { duration: 3 })
      .to(".perairan-section", { opacity: 0, duration: 1 })
      .to(".hero-video-section", { opacity: 0, duration: 1 }, "<")
      .set(".perairan-section", { visibility: "hidden" })
      .set(".hero-video-section", { visibility: "hidden" })
      .to({}, { duration: 2 })

      // ===== STATS SECTION =====
      .set(".info-section", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
      .set(".stats-section", { visibility: "visible", opacity: 1 })
      .to(".info-section", { clipPath: "polygon(0 0, 100% 0, 100% -10%, 0 -20%)", duration: 4, ease: "power2.inOut" })
      .set(".info-section", { visibility: "hidden" })
      .to({}, { duration: 2 })
      .to(".stats-content-1", { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }, "-=3")
      .to(".stats-content-2", { opacity: 1, y: 0, duration: 3, ease: "power3.out" }, "-=2")
      .to({}, { duration: 2 })
      .to(".stats-content-3", { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }, "-=2")
      .to({}, { duration: 3 })

      // ===== CONSERVATION SECTION =====
      .set(".stats-section", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
      .set(".conservation-section", { visibility: "visible", opacity: 1 })
      .to(".stats-section", { clipPath: "polygon(0 0, 100% 0, 100% -10%, 0 -20%)", duration: 5, ease: "power2.inOut" })
      .set(".stats-section", { visibility: "hidden" })
      .to({}, { duration: 4 })

      // ===== MISSION SECTION =====
      .set(".conservation-section", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
      .set(".mission-section", { visibility: "visible", opacity: 1 })
      .to(".conservation-section", { clipPath: "polygon(0 0, 100% 0, 100% -10%, 0 -20%)", duration: 5, ease: "power2.inOut" })
      .set(".conservation-section", { visibility: "hidden" })
      .to({}, { duration: 3 })
      .call(() => {
        // Show logo saat di mission section (untuk reverse dari callcenter)
        setIsLogoVisible(true);
      })

      // ===== CALLCENTER SECTION =====
      .set(".mission-section", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
      .set(".callcenter-section", { visibility: "visible", opacity: 1 })
      .call(() => {
        setIsLogoVisible(false);
      })
      .to(".mission-section", { clipPath: "polygon(0 0, 100% 0, 100% -10%, 0 -20%)", duration: 4, ease: "power2.inOut" })
      .set(".mission-section", { visibility: "hidden" })
      .to({}, { duration: 3 })

      // ===== FOOTER =====
      .to(".footer-section-wrapper", { yPercent: 0, duration: 3, ease: "power2.out" })
      .to({}, { duration: 3 });

  }, { scope: container });

  return container;
};