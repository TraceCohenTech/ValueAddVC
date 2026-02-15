import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
  features: string[];
  stats?: { label: string; value: string }[];
}

export default function ToolCard({
  title,
  description,
  href,
  icon,
  gradient,
  features,
  stats,
}: ToolCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative h-full bg-[#0d1117] rounded-2xl border border-[#30363d] overflow-hidden card-hover">
        {/* Gradient glow effect on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} blur-3xl -z-10`}
          style={{ transform: "scale(0.8)", filter: "blur(60px)" }}
        />

        {/* Card content */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {icon}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex gap-4 mb-4 py-3 border-y border-[#30363d]">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1">
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-[#30363d]"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </Link>
  );
}
