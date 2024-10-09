import HeroBanner from "@/src/components/HeroBanner";
import LatestPost from "@/src/components/LatestPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Daily Curiosity",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <HeroBanner />
        <div className="mx-4">
          <LatestPost />
        </div>
      </div>
    </>
  );
}
