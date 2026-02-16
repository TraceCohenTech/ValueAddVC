import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund Tracker ($200M) | Value Add VC",
  description:
    "Track 900+ emerging VC funds at or below $200M in size. Explore fund launches by year, location, fund number, and capital raised. Updated regularly.",
  openGraph: {
    title: "Fund Tracker ($200M) | Value Add VC",
    description: "Interactive dashboard tracking 900+ emerging VC funds under $200M.",
  },
};

export default function FundsPage() {
  return (
    <ToolPage
      title="Fund Tracker ($200M)"
      description="Track emerging VC funds under $200M"
      url="https://v0-200m-vcfund-list.vercel.app/"
      icon="💰"
      gradient="bg-gradient-to-br from-emerald-500 to-teal-500"
    />
  );
}
