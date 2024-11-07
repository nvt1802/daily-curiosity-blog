"use client";

import { IPost } from "@/types/posts";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/utils/api/posts";

interface IProps {
  posts?: IPost[];
  totalPages?: number;
}
const BlogSection: React.FC<IProps> = ({ posts = [], totalPages = 1 }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postListing, setPostListing] = useState<IPost[]>(posts);

  const { data, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: async () => fetchPosts(currentPage),
  });

  useEffect(() => {
    setPostListing(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onLoadMore = () => setCurrentPage(currentPage + 1);

  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold dark:text-white px-4 w-full">
        All posts
      </h2>
      <div className="flex flex-col gap-5 sm:grid xs:grid-cols-2 xmd:grid-cols-3 px-4">
        {postListing?.map((item, index: number) => (
          <Fragment key={index}>
            <BlogCard post={item} />
          </Fragment>
        ))}
      </div>
      <div className="flex flex-row w-full justify-center">
        <Button
          isProcessing={isLoading}
          onClick={onLoadMore}
          disabled={currentPage >= totalPages}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default BlogSection;
