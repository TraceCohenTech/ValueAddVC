"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    // Extract number from value (e.g., "7" from "7", "1.6" from "$1.6T+", "108" from "108+", "900" from "900+")
    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseFloat(match[0]);
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easeOut;

      // Format based on original value format
      let formatted: string;
      if (value.includes(".")) {
        formatted = currentValue.toFixed(1);
      } else {
        formatted = Math.floor(currentValue).toString();
      }

      // Add prefix/suffix back
      const prefix = value.match(/^[^\d]*/)?.[0] || "";
      const suffix = value.match(/[^\d]*$/)?.[0] || "";
      setDisplayValue(prefix + formatted + suffix);

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, stepDuration);
  };

  return (
    <div ref={ref} className="text-center group cursor-default">
      <div className="text-3xl sm:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
        {displayValue}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
