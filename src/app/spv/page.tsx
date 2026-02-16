import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPV Calculator | Value Add VC",
  description:
    "Reality check for late-stage SPV investments. Calculate how stacked management fees and carry across multiple layers impact your actual returns.",
  openGraph: {
    title: "SPV Calculator | Value Add VC",
    description: "Calculate real returns from multi-layer SPV investments with fee stacking analysis.",
  },
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
