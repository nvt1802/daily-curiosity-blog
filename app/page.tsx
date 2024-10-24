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
        <HeroBanner post={posts[0]} />
        <div className="px-4 max-w-7xl mx-auto space-y-5 mt-4">
          <h2 className="text-2xl lg:text-3xl font-bold">Lasted posts</h2>
          <LatestPost posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
