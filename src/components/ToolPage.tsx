"use client";

import { useState } from "react";

interface ToolPageProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  gradient: string;
}

export default function ToolPage({
  title,
  description,
  url,
  icon,
  gradient,
}: ToolPageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen pt-16 bg-[#0a0e14]">
      {/* Header */}
      <div className="border-b border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center text-2xl shadow-lg`}
              >
                {icon}
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{title}</h1>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#30363d] text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
            >
              <span>Open in new tab</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0e14] z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="spinner"></div>
              <p className="text-gray-400 text-sm">Loading {title}...</p>
            </div>
          </div>
        )}
        <iframe
          src={url}
          className="iframe-container"
          onLoad={() => setIsLoading(false)}
          title={title}
          allow="clipboard-write"
        />
      </div>
    </div>
  );
}
