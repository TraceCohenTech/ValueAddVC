import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "Fund Tracker ($200M) | VC Tools Hub",
  description:
    "Interactive dashboard tracking new VC funds at or below $200M in size. Explore fund launches by year, location, and capital raised.",
};

export default function FundsPage() {
  return (
    <ToolPage
      title="Fund Tracker ($200M)"
      description="Track new VC funds at or below $200M in size"
      url="https://v0-200m-vcfund-list.vercel.app/"
      icon="💰"
      gradient="bg-gradient-to-br from-emerald-500 to-teal-500"
    />
  );
}
