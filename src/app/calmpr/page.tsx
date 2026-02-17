import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalmPR | Value Add VC",
  description:
    "Composure Copilot for founders and VCs. Get AI guidance on handling negative online content, deciding when to respond, and crafting thoughtful replies.",
  openGraph: {
    title: "CalmPR | Value Add VC",
    description: "AI-powered composure copilot for handling online criticism strategically.",
  },
};

export default function CalmPRPage() {
  return (
    <ToolPage
      title="CalmPR"
      description="Composure Copilot for handling negative online content"
      url="https://calmpr.vercel.app/"
      icon="🧘"
      gradient="bg-gradient-to-br from-teal-500 to-cyan-500"
    />
  );
}
