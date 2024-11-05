"use client";

import { IPost } from "@/types/posts";
import LastestCard from "@/components/home/LastestCard";
import { Fragment } from "react";

interface IProps {
  posts?: IPost[];
}
const LatestPost: React.FC<IProps> = ({ posts = [] }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {posts?.map((item, index: number) => (
          <Fragment key={index}>
            <LastestCard post={item} />
            {index < posts.length - 1 && (
              <div className="border-b border-dashed"></div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default LatestPost;
