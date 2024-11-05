import ContentSection from "@/components/home/ContentSection";
import HeroBanner from "@/components/home/HeroBanner";
import HomeWrapper from "@/components/home/HomeWrapper";
import { IPost } from "@/types/posts";
import { fetchPosts } from "@/utils/api/posts";
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
      <HomeWrapper>
        <HeroBanner post={posts[0]} />
        <ContentSection posts={posts} />
      </HomeWrapper>
    </>
  );
};

export default Home;
