"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import PostCard from "./share/PostCard";

const LatestPost = () => {
  const { state } = useAppContext();
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    setIsHorizontal(state.innerWidth < 640);
  }, [state]);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto px-4">
        {arr.map((_, index: number) => (
          <PostCard key={index} horizontal={isHorizontal} />
        ))}
      </div>
    </>
  );
};

export default LatestPost;
