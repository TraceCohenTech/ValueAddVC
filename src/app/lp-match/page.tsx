import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP Matchmaking | Value Add VC",
  description:
    "Find and match with VC funds that fit your investment mandate. Swipe through funds, build your deck, and connect based on stage, sector, and size.",
  openGraph: {
    title: "LP Matchmaking | Value Add VC",
    description: "Match LPs with VC funds by stage, sector, and size.",
  },
};

export default function LPMatchPage() {
  return (
    <ToolPage
      title="LP Matchmaking"
      description="Find funds that fit your mandate"
      url="https://lp-fund-matcher.vercel.app/"
      icon="🎯"
      gradient="bg-gradient-to-br from-rose-500 to-pink-600"
    />
  );
}
