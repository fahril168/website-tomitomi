"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Hook for staggered children reveals
export function useStaggerReveal(itemCount: number, baseDelay: number = 80) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const getDelay = useCallback(
    (index: number) => ({
      transitionDelay: `${index * baseDelay}ms`,
    }),
    [baseDelay]
  );

  return { ref, isVisible, getDelay };
}
