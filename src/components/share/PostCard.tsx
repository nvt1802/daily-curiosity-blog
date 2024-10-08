"use client";

import { Card } from "flowbite-react";

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
      href="#"
      className="sm:max-w-sm mx-auto w-full"
      imgSrc={urlImage}
      imgAlt={alt}
      horizontal={horizontal}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
};

export default PostCard;
