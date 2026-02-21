import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Unicorn Dashboard | Value Add VC",
  description:
    "Track and analyze 1,336 billion-dollar startups across 48 countries. Comprehensive valuations, sector breakdowns, investor activity, and daily updates.",
  openGraph: {
    title: "Global Unicorn Dashboard | Value Add VC",
    description: "1,336 unicorns across 48 countries worth $4.5T+",
  },
};

export default function GlobalUnicornsPage() {
  return (
    <ToolPage
      title="Global Unicorn Dashboard"
      description="1,336 unicorns across 48 countries"
      url="https://startup-unicorn-dashboard.vercel.app/"
      icon="🌍"
      gradient="bg-gradient-to-br from-indigo-500 to-violet-600"
    />
  );
}
