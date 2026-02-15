"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tools = [
  { name: "Home", href: "/", icon: "⚡" },
  { name: "Benchmarking", href: "/benchmarking", icon: "📊" },
  { name: "Fund Tracker", href: "/funds", icon: "💰" },
  { name: "Unicorns", href: "/unicorns", icon: "🦄" },
  { name: "SPV Calculator", href: "/spv", icon: "🧮" },
  { name: "Waterfall", href: "/waterfall", icon: "💧" },
  { name: "Founder DD", href: "/founder-dd", icon: "🔍" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] via-[#7c3aed] to-[#10b981] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-[#00d4ff]/30 transition-shadow">
              VC
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">
              VC Tools Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  pathname === tool.href
                    ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-base">{tool.icon}</span>
                <span>{tool.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#30363d]">
            <div className="flex flex-col gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    pathname === tool.href
                      ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{tool.icon}</span>
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
