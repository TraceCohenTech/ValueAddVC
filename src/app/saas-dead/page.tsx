import ToolPage from "@/components/ToolPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is SaaS Dead? | Value Add VC",
  description:
    "AI Defensibility Rankings for 48 SaaS companies. Evaluate which businesses will survive the AI agent era and which are vulnerable to disruption.",
  openGraph: {
    title: "Is SaaS Dead? | Value Add VC",
    description: "AI Defensibility Rankings - Which SaaS companies will survive the AI agent era?",
  },
};

export default function SaasDeadPage() {
  return (
    <ToolPage
      title="Is SaaS Dead?"
      description="AI Defensibility Rankings for 48 SaaS companies"
      url="https://is-saas-dead.vercel.app/"
      icon="💀"
      gradient="bg-gradient-to-br from-red-500 to-orange-500"
    />
  );
}
