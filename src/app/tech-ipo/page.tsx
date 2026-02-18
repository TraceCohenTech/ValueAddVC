import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech IPO Dashboard | Value Add VC",
  description:
    "45 years of technology IPOs (1980-2025). Bubble risk detector, year-over-year comparisons, VC backing trends, and landmark IPO timeline from Apple to AI.",
  openGraph: {
    title: "Tech IPO Dashboard | Value Add VC",
    description: "Interactive dashboard analyzing 45 years of tech IPOs with bubble risk detection.",
  },
};

export default function TechIPOPage() {
  return (
    <ToolPage
      title="Tech IPO Dashboard"
      description="45 years of tech IPOs (1980-2025)"
      url="https://tech-ipo-dashboard.vercel.app/"
      icon="📈"
      gradient="bg-gradient-to-br from-green-500 to-emerald-600"
    />
  );
}
