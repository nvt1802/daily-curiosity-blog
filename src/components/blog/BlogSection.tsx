"use client";

import { IPost } from "@/types/posts";
import { Fragment } from "react";
import BlogCard from "@/components/blog/BlogCard";

interface IProps {
  posts?: IPost[];
}
const BlogSection: React.FC<IProps> = ({ posts = [] }) => {
  return (
    <>
      <div className="flex flex-col gap-5 sm:grid xs:grid-cols-2 xmd:grid-cols-3 px-4">
        {posts?.map((item, index: number) => (
          <Fragment key={index}>
            <BlogCard post={item} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default BlogSection;
