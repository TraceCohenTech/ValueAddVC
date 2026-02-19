import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Valuations Dashboard | Value Add VC",
  description:
    "Real-time intelligence on 47 AI companies valued at $300M+. Track the AI unicorn landscape, market segments, and $172B+ in total valuations from 2020-2025.",
  openGraph: {
    title: "AI Valuations Dashboard | Value Add VC",
    description: "Track 47 AI unicorns worth $172B+ across market segments.",
  },
};

export default function AIValuationsPage() {
  return (
    <ToolPage
      title="AI Valuations Dashboard"
      description="47 AI companies valued at $300M+"
      url="https://ai-valuations-dashboard.vercel.app/"
      icon="🤖"
      gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
    />
  );
}
