import HeroBanner from "@/src/components/HeroBanner";
import LatestPost from "@/src/components/LatestPost";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HeroBanner />
      <LatestPost />
    </div>
  );
}
