import ToolCard from "@/components/ToolCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const tools = [
  {
    title: "Fund Benchmarking",
    description:
      "Compare your fund's TVPI, DPI, IRR, and MOIC against industry benchmarks from Carta, PitchBook, and Aduro Advisors by vintage year.",
    href: "/benchmarking",
    icon: "📊",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    features: ["TVPI", "DPI", "IRR", "MOIC", "Vintage Year"],
    stats: [
      { label: "Metrics", value: "4" },
      { label: "Data Sources", value: "3" },
    ],
  },
  {
    title: "Fund Tracker ($200M)",
    description:
      "Interactive dashboard tracking new VC funds at or below $200M in size. Explore fund launches by year, location, fund number, and capital raised.",
    href: "/funds",
    icon: "💰",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    features: ["Fund Size", "Location", "Year", "Fund Number"],
    stats: [
      { label: "Max Size", value: "$200M" },
      { label: "Filter By", value: "4+" },
    ],
  },
  {
    title: "Unicorn Tracker",
    description:
      "Track billion-dollar startup unicorns in New York and San Francisco. Explore valuations, industries, funding data, and top investors.",
    href: "/unicorns",
    icon: "🦄",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
    features: ["Valuations", "Industries", "Funding", "Investors"],
    stats: [
      { label: "Unicorns", value: "108" },
      { label: "Total Value", value: "$1.6T" },
    ],
  },
  {
    title: "SPV Calculator",
    description:
      "Reality check for late-stage SPV investments. Understand how stacked management fees and carry impact your actual returns.",
    href: "/spv",
    icon: "🧮",
    gradient: "bg-gradient-to-br from-orange-500 to-amber-500",
    features: ["Fee Stacking", "Carry Analysis", "Multi-Layer", "ROI"],
    stats: [
      { label: "Layers", value: "N" },
      { label: "Fees", value: "Stacked" },
    ],
  },
  {
    title: "Liquidity Waterfall",
    description:
      "Build your custom fund distribution calculator for LP and GP proceeds. Track progress to 1.0x DPI and model partner distributions.",
    href: "/waterfall",
    icon: "💧",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-500",
    features: ["LP/GP Split", "Obligations", "Partner %", "DPI"],
    stats: [
      { label: "Carry Split", value: "80/20" },
      { label: "Hurdle", value: "1.0x" },
    ],
  },
  {
    title: "Founder Due Diligence",
    description:
      "AI-powered founder research tool. Generate comprehensive dossiers on founders in seconds with web search, GitHub analysis, and talking points.",
    href: "/founder-dd",
    icon: "🔍",
    gradient: "bg-gradient-to-br from-sky-500 to-blue-600",
    features: ["Web Search", "GitHub Analysis", "Talking Points", "AI Dossiers"],
    stats: [
      { label: "Research", value: "AI" },
      { label: "Speed", value: "Seconds" },
    ],
  },
  {
    title: "VC Prompt System",
    description:
      "20 modular diligence prompts for Deep Tech & Vertical AI. Institutional-grade analysis covering market sizing, unit economics, defensibility, and IC memos.",
    href: "/prompts",
    icon: "📝",
    gradient: "bg-gradient-to-br from-amber-500 to-yellow-500",
    features: ["20 Modules", "Deep Tech", "IC Memos", "Risk Analysis"],
    stats: [
      { label: "Prompts", value: "20" },
      { label: "Grade", value: "Institutional" },
    ],
  },
  {
    title: "Is SaaS Dead?",
    description:
      "AI Defensibility Rankings for 48 SaaS companies. See which businesses will survive the AI agent era and which are vulnerable to disruption.",
    href: "/saas-dead",
    icon: "💀",
    gradient: "bg-gradient-to-br from-red-500 to-orange-500",
    features: ["48 Companies", "AI Disruption", "Defensibility", "Rankings"],
    stats: [
      { label: "Companies", value: "48" },
      { label: "Focus", value: "AI Risk" },
    ],
  },
  {
    title: "CalmPR",
    description:
      "Composure Copilot for handling negative online content. Get guidance on whether to respond and craft thoughtful replies when needed.",
    href: "/calmpr",
    icon: "🧘",
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    features: ["Response Guidance", "Crisis Management", "PR Strategy", "Free"],
    stats: [
      { label: "Advice", value: "AI" },
      { label: "Privacy", value: "100%" },
    ],
  },
  {
    title: "Tech IPO Dashboard",
    description:
      "45 years of tech IPOs (1980-2025). Bubble risk detector, year comparisons, VC backing trends, and landmark IPO timeline from Apple to AI.",
    href: "/tech-ipo",
    icon: "📈",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    features: ["Bubble Detector", "45 Years", "VC Trends", "IPO Timeline"],
    stats: [
      { label: "Years", value: "45" },
      { label: "Data", value: "1980-2025" },
    ],
  },
  {
    title: "AI Valuations",
    description:
      "Real-time intelligence on 47 AI companies valued at $300M+. Track the AI unicorn landscape, market segments, and $172B+ in total valuations.",
    href: "/ai-valuations",
    icon: "🤖",
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    features: ["47 Companies", "$300M+", "Market Segments", "2020-2025"],
    stats: [
      { label: "Companies", value: "47" },
      { label: "Total", value: "$172B" },
    ],
  },
];

const comingSoon = {
  title: "VC Meeting OS",
  description:
    "Transform meeting transcripts into actionable investment memos. Capture transcripts, generate structured memos, track follow-ups, and query your knowledge base.",
  href: "https://ai-vc-v2.vercel.app/",
  icon: "🤖",
  gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
  features: ["AI Memos", "Deal Tracking", "Action Items", "Portfolio Q&A"],
  stats: [
    { label: "Status", value: "Beta" },
    { label: "AI", value: "Powered" },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen pt-16 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 hero-bg" />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-50" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/20 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#7c3aed]/20 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#10b981]/15 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#7c3aed]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#30363d] mb-8 backdrop-blur-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]"></span>
              </span>
              <span className="text-sm text-gray-400">
                Built by{" "}
                <a
                  href="https://twitter.com/trace_cohen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d4ff] hover:underline font-medium"
                >
                  Trace Cohen
                </a>
              </span>
            </div>

            {/* Main heading with staggered animation */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-white inline-block hover:scale-105 transition-transform duration-300">Welcome to</span>
              <br />
              <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300">Value Add VC</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl inline-block hover:scale-105 transition-transform duration-300">The VC Tools Hub</span>
            </h1>

            {/* Animated underline */}
            <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#10b981] rounded-full" />
            </div>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              A comprehensive suite of{" "}
              <span className="text-white font-medium">venture capital analysis tools</span>.
              Benchmark your fund, track unicorns, calculate SPV returns, and model liquidity waterfalls.
            </p>

            {/* CTA buttons with hover effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#tools"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Tools
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://twitter.com/trace_cohen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white/5 border border-[#30363d] text-gray-300 font-semibold hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Follow for Updates
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="12" label="Tools" />
            <AnimatedCounter value="$1.6T+" label="Tracked Valuations" />
            <AnimatedCounter value="108+" label="Unicorns" />
            <AnimatedCounter value="900+" label="Funds" />
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your Tool
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Each tool is designed to help you make better investment decisions
            with data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}

          {/* Coming Soon Card */}
          <a
            href={comingSoon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative h-full bg-[#0d1117] rounded-2xl border border-[#30363d] overflow-hidden card-hover">
              {/* Coming Soon Banner */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white animate-pulse">
                  COMING SOON
                </span>
              </div>

              {/* Gradient glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${comingSoon.gradient} blur-3xl -z-10`}
                style={{ transform: "scale(0.8)", filter: "blur(60px)" }}
              />

              {/* Card content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${comingSoon.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {comingSoon.icon}
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all"
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
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {comingSoon.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{comingSoon.description}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-4 py-3 border-y border-[#30363d]">
                  {comingSoon.stats.map((stat, index) => (
                    <div key={index} className="flex-1">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {comingSoon.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${comingSoon.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            {/* Bio Section */}
            <div className="text-center max-w-2xl">
              <p className="text-gray-400">
                <a
                  href="https://twitter.com/trace_cohen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-[#00d4ff] transition-colors"
                >
                  Trace Cohen
                </a>{" "}
                is a serial founder, investor and data geek. Please feel free to reach out{" "}
                <a
                  href="mailto:t@nyvp.com"
                  className="text-[#00d4ff] hover:underline"
                >
                  t@nyvp.com
                </a>
              </p>
            </div>

            {/* Logo and Links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full pt-6 border-t border-[#30363d]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] via-[#7c3aed] to-[#10b981] flex items-center justify-center text-white font-bold shadow-lg">
                  VC
                </div>
                <span className="text-lg font-semibold text-white">
                  Value Add VC
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a
                  href="https://twitter.com/trace_cohen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="mailto:t@nyvp.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
                <span>Built with honesty and zero BS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
