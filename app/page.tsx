import HeroBanner from "@/src/components/HeroBanner";
import LatestPost from "@/src/components/LatestPost";
import { IPost } from "@/src/types/posts";
import { fetchPosts } from "@/src/utils/api/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Daily Curiosity",
};

export const revalidate = 60;
export const dynamicParams = true;

const Home = async () => {
  let posts: IPost[] = [];

  try {
    const { items } = await fetchPosts(1);
    posts = items;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <HeroBanner />
        <div className="mx-4">
          <LatestPost posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
