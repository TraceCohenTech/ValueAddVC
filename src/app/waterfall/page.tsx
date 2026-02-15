import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "Liquidity Waterfall | VC Tools Hub",
  description:
    "Build your custom fund distribution calculator for LP and GP proceeds. Track progress to 1.0x DPI and model partner distributions.",
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
