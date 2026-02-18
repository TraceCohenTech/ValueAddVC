"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tools = [
  { name: "Benchmarking", href: "/benchmarking", icon: "📊", description: "Fund metrics vs benchmarks" },
  { name: "Fund Tracker", href: "/funds", icon: "💰", description: "VC funds under $200M" },
  { name: "Unicorns", href: "/unicorns", icon: "🦄", description: "NY & SF unicorns" },
  { name: "SPV Calculator", href: "/spv", icon: "🧮", description: "Multi-layer SPV returns" },
  { name: "Waterfall", href: "/waterfall", icon: "💧", description: "LP/GP distributions" },
  { name: "Founder DD", href: "/founder-dd", icon: "🔍", description: "AI founder research" },
  { name: "VC Prompts", href: "/prompts", icon: "📝", description: "Diligence prompts" },
  { name: "Is SaaS Dead?", href: "/saas-dead", icon: "💀", description: "AI defensibility rankings" },
  { name: "CalmPR", href: "/calmpr", icon: "🧘", description: "Composure copilot" },
  { name: "Tech IPO", href: "/tech-ipo", icon: "📈", description: "45 years of IPO data" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const currentTool = tools.find((tool) => tool.href === pathname);

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
              Value Add VC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                pathname === "/"
                  ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 text-[#00d4ff] border border-[#00d4ff]/40 shadow-lg shadow-[#00d4ff]/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>⚡</span>
              <span>Home</span>
            </Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  currentTool
                    ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 text-[#00d4ff] border border-[#00d4ff]/40 shadow-lg shadow-[#00d4ff]/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{currentTool?.icon || "🛠️"}</span>
                <span>{currentTool?.name || "Tools"}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${toolsDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {toolsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#0d1117] border border-[#30363d] rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="p-2 grid grid-cols-2 gap-1">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                          pathname === tool.href
                            ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="text-xl">{tool.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{tool.name}</div>
                          <div className="text-xs text-gray-500 truncate">{tool.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-[#30363d] p-3">
                    <div className="text-xs text-gray-500 text-center">
                      {tools.length} tools available
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                  pathname === "/"
                    ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 text-[#00d4ff] border border-[#00d4ff]/40"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-lg">⚡</span>
                <span>Home</span>
              </Link>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    pathname === tool.href
                      ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 text-[#00d4ff] border border-[#00d4ff]/40"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <div>{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
