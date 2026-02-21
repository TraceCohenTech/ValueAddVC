import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Startup Funding Tracker | Value Add VC",
  description:
    "Daily deal flow dashboard tracking startup funding throughout 2025. Monitor 5,000+ rounds, top investors, and the biggest raises of the year.",
  openGraph: {
    title: "2025 Startup Funding Tracker | Value Add VC",
    description: "Track 5,000+ funding rounds and daily deal flow in 2025.",
  },
};

export default function Funding2025Page() {
  return (
    <ToolPage
      title="2025 Startup Funding Tracker"
      description="Daily deal flow dashboard"
      url="https://2025startupfunding.vercel.app/"
      icon="💸"
      gradient="bg-gradient-to-br from-emerald-500 to-green-600"
    />
  );
}
