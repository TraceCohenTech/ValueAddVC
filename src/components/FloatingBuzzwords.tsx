"use client";

import { useEffect, useRef, useState } from "react";

const buzzwords = [
  "Product-market fit",
  "In the trenches",
  "Founder-friendly",
  "Value-add",
  "Power law",
  "Returning the fund",
  "Pro rata",
  "Double down",
  "Spray and pray",
  "Swing for the fences",
  "Category-defining",
  "Durable moat",
  "Massive TAM",
  "Blitzscaling",
  "Land and expand",
  "Competitive round",
  "Lead the round",
  "Preempted",
  "Clean cap table",
  "High-conviction bet",
];

interface BuzzwordPosition {
  word: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
}

export default function FloatingBuzzwords() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [positions, setPositions] = useState<BuzzwordPosition[]>([]);

  useEffect(() => {
    // Generate positions around the edges, avoiding the center
    const generated = buzzwords.map((word, index) => {
      // Distribute words in different zones around the edges
      const zone = index % 4; // 0: top, 1: right, 2: bottom, 3: left
      let x: number, y: number;

      switch (zone) {
        case 0: // Top edge
          x = 10 + Math.random() * 80;
          y = 5 + Math.random() * 20;
          break;
        case 1: // Right edge
          x = 75 + Math.random() * 20;
          y = 15 + Math.random() * 70;
          break;
        case 2: // Bottom edge
          x = 10 + Math.random() * 80;
          y = 75 + Math.random() * 20;
          break;
        case 3: // Left edge
          x = 5 + Math.random() * 20;
          y = 15 + Math.random() * 70;
          break;
        default:
          x = Math.random() * 100;
          y = Math.random() * 100;
      }

      return {
        word,
        x,
        y,
        size: 0.85 + Math.random() * 0.5, // 0.85 to 1.35 (slightly smaller)
        rotation: -15 + Math.random() * 30,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
      };
    });
    setPositions(generated);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const getProximityEffect = (x: number, y: number) => {
    if (!containerRef.current) return { scale: 1, opacity: 0.35, glow: false, translateX: 0, translateY: 0 };

    const rect = containerRef.current.getBoundingClientRect();
    const wordX = (x / 100) * rect.width;
    const wordY = (y / 100) * rect.height;

    const distance = Math.sqrt(
      Math.pow(mousePos.x - wordX, 2) + Math.pow(mousePos.y - wordY, 2)
    );

    const maxDistance = 300;
    const proximity = Math.max(0, 1 - distance / maxDistance);

    return {
      scale: 1 + proximity * 0.5,
      opacity: 0.35 + proximity * 0.65,
      glow: proximity > 0.2,
      translateX: proximity * ((mousePos.x - wordX) / 4),
      translateY: proximity * ((mousePos.y - wordY) / 4),
    };
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
    >
      {positions.map((item, index) => {
        const effect = getProximityEffect(item.x, item.y);

        return (
          <div
            key={index}
            className="absolute whitespace-nowrap font-semibold transition-all duration-300 ease-out select-none"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}rem`,
              transform: `
                rotate(${item.rotation}deg)
                scale(${effect.scale})
                translate(${-effect.translateX}px, ${-effect.translateY}px)
              `,
              opacity: effect.opacity,
              color: effect.glow ? "#00d4ff" : "#9ca3af",
              textShadow: effect.glow
                ? "0 0 30px rgba(0, 212, 255, 1), 0 0 60px rgba(0, 212, 255, 0.8), 0 0 100px rgba(124, 58, 237, 0.5)"
                : "0 0 10px rgba(255, 255, 255, 0.1)",
              animation: `float ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.word}
          </div>
        );
      })}
    </div>
  );
}
