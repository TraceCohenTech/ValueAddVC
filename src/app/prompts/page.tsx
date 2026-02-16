import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VC Prompt System | Value Add VC",
  description:
    "20 modular diligence prompts for Deep Tech & Vertical AI investing. Institutional-grade analysis covering market sizing, unit economics, defensibility, and IC memos.",
  openGraph: {
    title: "VC Prompt System | Value Add VC",
    description: "20 institutional-grade diligence prompts for Deep Tech & Vertical AI.",
  },
};

export default function PromptsPage() {
  return (
    <ToolPage
      title="VC Prompt System"
      description="20 modular diligence prompts for Deep Tech & Vertical AI"
      url="https://vc-prompt-system.vercel.app/"
      icon="📝"
      gradient="bg-gradient-to-br from-amber-500 to-yellow-500"
    />
  );
}
