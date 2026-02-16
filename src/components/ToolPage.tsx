"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen pt-16 bg-[#0a0e14] animate-fade-in">
      {/* Header */}
      <div className="border-b border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">{title}</span>
          </div>

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
            <div className="w-full max-w-4xl mx-auto px-4">
              {/* Skeleton loader */}
              <div className="space-y-4">
                <div className="h-8 bg-[#161b22] rounded-lg w-1/3 animate-pulse" />
                <div className="h-4 bg-[#161b22] rounded w-2/3 animate-pulse" />
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-32 bg-[#161b22] rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 mt-8">
                  <div className="spinner" />
                  <p className="text-gray-400 text-sm">Loading {title}...</p>
                </div>
              </div>
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
