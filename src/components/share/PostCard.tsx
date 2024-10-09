"use client";

import { Avatar, Badge, Card } from "flowbite-react";

interface IProps {
  horizontal?: boolean;
  urlImage?: string;
  alt?: string;
}

const PostCard: React.FC<IProps> = ({
  horizontal = false,
  urlImage = `https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg`,
  alt = "thumnail",
}) => {
  return (
    <Card
      href="/blog/test"
      className="sm:max-w-sm mx-auto w-full relative"
      imgSrc={urlImage}
      imgAlt={alt}
      horizontal={horizontal}
    >
      <Badge color="info" size="sm" className="absolute top-2 left-2">
        Blogs
      </Badge>
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="text-base font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="w-full inline-flex justify-between">
          <div className="inline-flex gap-3">
            <Avatar
              img="/zhou-shiyu.png"
              alt="avatar of Jese"
              size="sm"
              rounded
            />
            <p className="my-auto text-neutral-400 font-medium text-sm">Zhou Shiyu</p>
          </div>
          <p className="my-auto text-neutral-400 text-xs">August 20, 2022</p>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
