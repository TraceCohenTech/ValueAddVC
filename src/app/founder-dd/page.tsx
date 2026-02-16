import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder Due Diligence | Value Add VC",
  description:
    "AI-powered founder research tool for VCs. Generate comprehensive dossiers on founders in seconds with web search, GitHub analysis, and talking points for your next call.",
  openGraph: {
    title: "Founder Due Diligence | Value Add VC",
    description: "AI-powered founder research. Get comprehensive dossiers in seconds.",
  },
};

export default function FounderDDPage() {
  return (
    <ToolPage
      title="Founder Due Diligence"
      description="AI-powered founder research before your calls"
      url="https://vc-founder-dd.vercel.app/"
      icon="🔍"
      gradient="bg-gradient-to-br from-sky-500 to-blue-600"
    />
  );
}
