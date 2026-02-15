import ToolPage from "@/components/ToolPage";

export const metadata = {
  title: "Unicorn Tracker | VC Tools Hub",
  description:
    "Track billion-dollar startup unicorns in New York and San Francisco. Explore valuations, industries, funding data, and top investors.",
};

export default function UnicornsPage() {
  return (
    <ToolPage
      title="Unicorn Tracker"
      description="Track billion-dollar startups in NY & SF"
      url="https://v0-unicorns-ny-sf.vercel.app/"
      icon="🦄"
      gradient="bg-gradient-to-br from-violet-500 to-purple-500"
    />
  );
}
