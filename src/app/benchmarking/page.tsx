import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "Fund Benchmarking | VC Tools Hub",
  description:
    "Compare your VC fund performance metrics against top decile benchmarks from Carta, PitchBook, and Aduro Advisors by vintage year.",
};

export default function BenchmarkingPage() {
  return (
    <ToolPage
      title="Fund Benchmarking"
      description="Compare TVPI, DPI, IRR, and MOIC against industry benchmarks"
      url="https://v0-vc-fund-benchmarking.vercel.app/"
      icon="📊"
      gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
    />
  );
}
