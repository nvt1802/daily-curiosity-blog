"use client";

import { IPost } from "@/types/posts";
import { cloudinaryUrl } from "@/utils/constants/contants";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

interface IProps {
  post?: IPost;
}

const LastestCard: React.FC<IProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/blog/${post?.slug}`}>
        <Image
          src={`${cloudinaryUrl}/c_fill,h_550,w_860/${post?.featured_image}`}
          alt={post?.title ?? ""}
          className="w-full object-cover max-h-96 rounded-lg"
          width={1900}
          height={1000}
        />
      </Link>
      <div className="flex flex-row justify-between">
        <Link href={`/blog/${post?.slug}`}>
          <p className="text-base font-semibold">{post?.title}</p>
        </Link>
        <p className="inline-flex text-sm space-x-2">
          <HiEye className="my-auto" />
          <span className="my-auto">{post?.view_count ?? 0}</span>
        </p>
      </div>
      <p className="text-sm">
        {dayjs(post?.published_at).format("DD-MM-YYYY")}
      </p>
    </div>
  );
};

export default LastestCard;
