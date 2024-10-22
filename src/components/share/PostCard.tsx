"use client";

import { IPost } from "@/src/types/posts";
import { cloudinaryUrl } from "@/src/utils/constants/contants";
import dayjs from "dayjs";
import { Avatar, Badge, Card } from "flowbite-react";

interface IProps {
  horizontal?: boolean;
  post?: IPost;
}

const PostCard: React.FC<IProps> = ({ horizontal = false, post }) => {
  return (
    <Card
      href="/blog/test"
      className="sm:max-w-sm mx-auto w-full relative"
      imgSrc={`${cloudinaryUrl}/c_fill,h_320,w_460/${post?.featured_image}`}
      imgAlt={post?.title}
      horizontal={horizontal}
    >
      <Badge color="info" size="sm" className="absolute top-2 left-2">
        {post?.categories.name}
      </Badge>
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {post?.title}
        </h5>
        <p className="text-base font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {post?.excerpt}
        </p>
        <div className="w-full inline-flex justify-between">
          <div className="inline-flex gap-3">
            <Avatar
              img={`${cloudinaryUrl}/${post?.users?.profile_picture}`}
              alt="avatar of Jese"
              size="sm"
              rounded
            />
            <p className="my-auto text-neutral-400 font-medium text-sm">
              {post?.users?.username}
            </p>
          </div>
          <p className="my-auto text-neutral-400 text-xs">{dayjs(post?.published_at).format("DD/MM/YYYY HH:mm")}</p>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
