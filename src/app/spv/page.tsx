import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "SPV Calculator | VC Tools Hub",
  description:
    "Reality check for late-stage SPV investments. Understand how stacked management fees and carry impact your actual returns.",
};

export default function SPVPage() {
  return (
    <ToolPage
      title="SPV Calculator"
      description="Calculate the real returns from multi-layer SPV investments"
      url="https://v0-will-spv-make-money.vercel.app/"
      icon="🧮"
      gradient="bg-gradient-to-br from-orange-500 to-amber-500"
    />
  );
}
