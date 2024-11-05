"use client";

import { IPost } from "@/types/posts";
import PopularCard from "@/components/home/PopularCard";

interface IProps {
  posts?: IPost[];
}
const PopularSection: React.FC<IProps> = ({ posts = [] }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {posts?.map((item, index: number) => (
          <PopularCard key={index} post={item} />
        ))}
      </div>
    </>
  );
};

export default PopularSection;
