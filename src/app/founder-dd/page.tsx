import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "Founder Due Diligence | VC Tools Hub",
  description:
    "AI-powered founder research tool. Generate comprehensive dossiers on founders in seconds with web search, GitHub analysis, and talking points.",
};

export default function FounderDDPage() {
  return (
    <ToolPage
      title="Founder Due Diligence"
      description="AI-powered founder research before your calls"
      url="https://vc-founder-dd.vercel.app/"
      icon="🔍"
      gradient="bg-gradient-to-br from-sky-500 to-blue-600"
    />
  );
}
