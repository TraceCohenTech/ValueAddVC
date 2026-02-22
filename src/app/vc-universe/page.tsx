import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VC Universe | Value Add VC",
  description:
    "Searchable database of 1,000+ verified VC firms. Filter by stage, sector, region, check size, or use the VC Matchmaker quiz to find your perfect investor.",
  openGraph: {
    title: "VC Universe | Value Add VC",
    description: "1,000+ verified VC firms with Matchmaker quiz.",
  },
};

export default function VCUniversePage() {
  return (
    <ToolPage
      title="VC Universe"
      description="1,000+ verified VC firms"
      url="https://bigvc-list.vercel.app/"
      icon="🔭"
      gradient="bg-gradient-to-br from-slate-500 to-zinc-600"
    />
  );
}
