import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund Benchmarking | Value Add VC",
  description:
    "Compare your VC fund's TVPI, DPI, IRR, and MOIC against industry benchmarks from Carta, PitchBook, and Aduro Advisors. Filter by vintage year to see how your fund stacks up.",
  openGraph: {
    title: "Fund Benchmarking | Value Add VC",
    description: "Compare your VC fund performance against industry benchmarks by vintage year.",
  },
};

export default function BenchmarkingPage() {
  return (
    <ToolPage
      title="Fund Benchmarking"
      description="Compare your fund metrics against industry benchmarks"
      url="https://v0-vc-fund-benchmarking.vercel.app/"
      icon="📊"
      gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
    />
  );
}
