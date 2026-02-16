import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unicorn Tracker | Value Add VC",
  description:
    "Track 108 billion-dollar startup unicorns in New York and San Francisco worth $1.6T+. Explore valuations, industries, funding rounds, and top investors.",
  openGraph: {
    title: "Unicorn Tracker | Value Add VC",
    description: "Track 108 unicorns in NY & SF worth $1.6T+ with detailed funding data.",
  },
};

export default function UnicornsPage() {
  return (
    <ToolPage
      title="Unicorn Tracker"
      description="Track billion-dollar startups in NY & SF"
      url="https://v0-unicorns-ny-sf.vercel.app/"
      icon="🦄"
      gradient="bg-gradient-to-br from-violet-500 to-purple-500"
    />
  );
}
