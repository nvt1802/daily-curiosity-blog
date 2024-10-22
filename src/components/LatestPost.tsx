"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { IPost } from "../types/posts";
import PostCard from "./share/PostCard";

interface IProps {
  posts?: IPost[];
}
const LatestPost: React.FC<IProps> = ({ posts = [] }) => {
  const { state } = useAppContext();
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    setIsHorizontal(state.innerWidth < 640);
  }, [state]);

  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
        {posts?.map((item, index: number) => (
          <PostCard key={index} horizontal={isHorizontal} post={item} />
        ))}
      </div>
    </>
  );
};

export default LatestPost;
