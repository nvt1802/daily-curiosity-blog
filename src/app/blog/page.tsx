import BlogSection from "@/components/blog/BlogSection";
import HeroBanner from "@/components/home/HeroBanner";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { IPost } from "@/types/posts";
import { fetchPosts } from "@/utils/api/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Daily Curiosity",
};

export const revalidate = 60;
export const dynamicParams = true;

const BlogListPage = async () => {
  let posts: IPost[] = [];
  let total: number = 1;
  try {
    const { items, totalPages } = await fetchPosts(1);
    posts = items;
    total = totalPages;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <BlogWrapper banner={<HeroBanner post={posts[0]} />}>
        <BlogSection posts={posts} totalPages={total} />
      </BlogWrapper>
    </>
  );
};

export default BlogListPage;
