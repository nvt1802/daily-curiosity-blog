import HeroBanner from "@/src/components/HeroBanner";
import LatestPost from "@/src/components/LatestPost";
import { fetchPosts } from "@/src/utils/api/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Daily Curiosity",
};

const Home = async () => {
  const { items } = await fetchPosts(1);
  return (
    <>
      <div className="flex flex-col gap-5">
        <HeroBanner />
        <div className="mx-4">
          <LatestPost posts={items} />
        </div>
      </div>
    </>
  );
};

export default Home;
