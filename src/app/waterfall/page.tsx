import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquidity Waterfall | Value Add VC",
  description:
    "Build custom fund distribution calculators for LP and GP proceeds. Model carried interest, track progress to 1.0x DPI, and calculate partner distributions.",
  openGraph: {
    title: "Liquidity Waterfall | Value Add VC",
    description: "Model LP/GP distributions, carried interest, and fund waterfalls.",
  },
};

export default function WaterfallPage() {
  return (
    <ToolPage
      title="Liquidity Waterfall"
      description="Model LP/GP distributions and fund waterfalls"
      url="https://v0-liquidity-waterfall-vc.vercel.app/"
      icon="💧"
      gradient="bg-gradient-to-br from-pink-500 to-rose-500"
    />
  );
}
