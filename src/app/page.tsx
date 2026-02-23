import Link from "next/link";

const tools = [
  {
    title: "Tech IPO Dashboard",
    description: "45 years of tech IPOs (1980-2025). Bubble risk detector, year comparisons, VC backing trends, and landmark IPO timeline from Apple to AI.",
    href: "/tech-ipo",
    icon: "📈",
    glow: "indigo",
    span: "col-span-2",
    metrics: [
      { value: "45 Yrs", label: "Data Span" },
      { value: "1980+", label: "IPOs Tracked" },
      { value: "Active", label: "Bubble Detector" },
    ],
  },
  {
    title: "Global Unicorns",
    description: "Track and analyze 1,336 billion-dollar startups across 48 countries. Comprehensive valuations, sector breakdowns, and daily updates.",
    href: "/unicorns-global",
    icon: "🌍",
    glow: "cyan",
    span: "col-span-2",
    metrics: [
      { value: "1,336", label: "Unicorns" },
      { value: "$4.5T", label: "Total Value" },
      { value: "48", label: "Countries" },
    ],
  },
  {
    title: "Fund Tracker ($200M)",
    description: "Interactive dashboard tracking new VC funds at or below $200M in size. Explore fund launches by year, location, and capital raised.",
    href: "/funds",
    icon: "💰",
    glow: "green",
    span: "",
    metrics: [
      { value: "900+", label: "Funds Tracked" },
    ],
  },
  {
    title: "Unicorns (NY & SF)",
    description: "Track billion-dollar startup unicorns in New York and San Francisco. Explore valuations, industries, and top investors.",
    href: "/unicorns",
    icon: "🦄",
    glow: "pink",
    span: "",
    metrics: [
      { value: "$1.6T", label: "Total Value" },
      { value: "108", label: "Unicorns" },
    ],
  },
  {
    title: "VC Universe",
    description: "Searchable database of 1,000+ verified VC firms. Filter by stage, sector, region, or use the VC Matchmaker quiz.",
    href: "/vc-universe",
    icon: "🔭",
    glow: "indigo",
    span: "col-span-2",
    metrics: [
      { value: "1,000+", label: "VC Firms" },
      { value: "Global", label: "Coverage" },
      { value: "Quiz", label: "Matchmaker" },
    ],
  },
  {
    title: "2025 Funding Tracker",
    description: "Daily deal flow dashboard tracking startup funding throughout 2025. Monitor round sizes, top investors, and the biggest raises.",
    href: "/funding-2025",
    icon: "💸",
    glow: "green",
    span: "col-span-2",
    metrics: [
      { value: "5,000+", label: "Rounds" },
      { value: "Daily", label: "Updates" },
      { value: "2025", label: "Year" },
    ],
  },
  {
    title: "Fund Benchmarking",
    description: "Compare your fund's TVPI, DPI, IRR, and MOIC against industry benchmarks from Carta, PitchBook, and Aduro Advisors.",
    href: "/benchmarking",
    icon: "📊",
    glow: "cyan",
    span: "",
    metrics: [
      { value: "4", label: "Metrics" },
      { value: "3", label: "Data Sources" },
    ],
  },
  {
    title: "SPV Calculator",
    description: "Reality check for late-stage SPV investments. Understand how stacked management fees and carry impact your actual returns.",
    href: "/spv",
    icon: "🧮",
    glow: "indigo",
    span: "",
    metrics: [
      { value: "Multi", label: "Layer Fees" },
      { value: "ROI", label: "Analysis" },
    ],
  },
  {
    title: "Liquidity Waterfall",
    description: "Build your custom fund distribution calculator for LP and GP proceeds. Track progress to 1.0x DPI.",
    href: "/waterfall",
    icon: "💧",
    glow: "pink",
    span: "",
    metrics: [
      { value: "80/20", label: "Carry Split" },
      { value: "1.0x", label: "Hurdle" },
    ],
  },
  {
    title: "Founder Due Diligence",
    description: "AI-powered founder research tool. Generate comprehensive dossiers on founders in seconds with web search and GitHub analysis.",
    href: "/founder-dd",
    icon: "🔍",
    glow: "cyan",
    span: "",
    metrics: [
      { value: "AI", label: "Powered" },
      { value: "Seconds", label: "Speed" },
    ],
  },
  {
    title: "AI Valuations",
    description: "Real-time intelligence on 47 AI companies valued at $300M+. Track the AI unicorn landscape and market segments.",
    href: "/ai-valuations",
    icon: "🤖",
    glow: "indigo",
    span: "",
    metrics: [
      { value: "47", label: "Companies" },
      { value: "$172B", label: "Total Value" },
    ],
  },
  {
    title: "LP Matchmaking",
    description: "Find and match with VC funds that fit your investment mandate. Swipe through funds and connect.",
    href: "/lp-match",
    icon: "🎯",
    glow: "pink",
    span: "",
    metrics: [
      { value: "Swipe", label: "Interface" },
      { value: "6", label: "LP Types" },
    ],
  },
  {
    title: "VC Prompt System",
    description: "20 modular diligence prompts for Deep Tech & Vertical AI. Institutional-grade analysis for IC memos.",
    href: "/prompts",
    icon: "📝",
    glow: "green",
    span: "",
    metrics: [
      { value: "20", label: "Prompts" },
      { value: "IC", label: "Grade" },
    ],
  },
  {
    title: "Is SaaS Dead?",
    description: "AI Defensibility Rankings for 48 SaaS companies. See which businesses will survive the AI agent era.",
    href: "/saas-dead",
    icon: "💀",
    glow: "pink",
    span: "",
    metrics: [
      { value: "48", label: "Companies" },
      { value: "AI Risk", label: "Analysis" },
    ],
  },
  {
    title: "CalmPR",
    description: "Composure Copilot for handling negative online content. Get guidance on whether and how to respond.",
    href: "/calmpr",
    icon: "🧘",
    glow: "green",
    span: "",
    metrics: [
      { value: "AI", label: "Guidance" },
      { value: "100%", label: "Private" },
    ],
  },
];

const stats = [
  { value: "16", label: "Tools" },
  { value: "$4.5T+", label: "Tracked" },
  { value: "1,336", label: "Unicorns" },
  { value: "1,000+", label: "VC Firms" },
  { value: "5,000+", label: "Rounds" },
  { value: "48", label: "Countries" },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <header className="text-center px-5 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-sm text-slate-400">
            Built by{" "}
            <a href="https://twitter.com/trace_cohen" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Trace Cohen
            </a>
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Value Add VC
          </span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          A comprehensive suite of venture capital analysis tools. Built with honesty and zero BS.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-5 pb-20">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            className={`bento-card glow-${tool.glow} ${tool.span} ${tool.span ? 'md:col-span-2' : ''}`}
          >
            <div className="bento-icon">
              <span>{tool.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{tool.description}</p>
            <div className="metrics-grid">
              {tool.metrics.map((metric, i) => (
                <div key={i} className="metric">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-5 py-12">
          <div className="flex flex-col items-center gap-6">
            <p className="text-slate-400 text-center max-w-xl">
              <a href="https://twitter.com/trace_cohen" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-indigo-400 transition-colors">
                Trace Cohen
              </a>{" "}
              is a serial founder, investor and data geek. Please feel free to reach out{" "}
              <a href="mailto:t@nyvp.com" className="text-indigo-400 hover:underline">
                t@nyvp.com
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="https://twitter.com/trace_cohen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              <span className="text-slate-700">•</span>
              <a href="mailto:t@nyvp.com" className="hover:text-white transition-colors">
                Contact
              </a>
              <span className="text-slate-700">•</span>
              <span>Built with honesty and zero BS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
