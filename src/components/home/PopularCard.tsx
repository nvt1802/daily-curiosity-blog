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

const PopularCard: React.FC<IProps> = ({ post }) => {
  return (
    <div className="flex flex-row shadow-mdflex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-w-xl md:flex-row hover:bg-gray-100 dark:hover:bg-gray-700 mx-auto w-full relative gap-1.5 xmd:gap-3 max-h-28 xmd:max-h-[140px]">
      <Link href={`/blog/${post?.slug}`}>
        <Image
          src={`${cloudinaryUrl}/c_fill,h_160,w_160/${post?.featured_image}`}
          alt={post?.title ?? ""}
          className="w-full object-cover min-w-28 max-w-28 max-h-28 xmd:max-w-[160px] xmd:max-h-[140px] rounded-l-lg h-full"
          width={160}
          height={160}
        />
      </Link>
      <div className="py-1 xmd:py-2 pr-1 xmd:pr-3 flex flex-col gap-1 xmd:gap-3 justify-between dark:text-white">
        <Link href={`/blog/${post?.slug}`}>
          <p className="text-sm font-semibold line-clamp-2 ">{post?.title}</p>
        </Link>
        <Link href={`/blog/${post?.slug}`}>
          <p className="text-xs line-clamp-2">{post?.excerpt}</p>
        </Link>

        <div className="flex flex-row justify-between">
          <p className="my-auto text-neutral-400 text-xs">
            {dayjs(post?.published_at).format("DD-MM-YYYY")}
          </p>
          <p className="inline-flex text-xs space-x-1 xmd:space-x-2">
            <HiEye className="my-auto" />
            <span className="my-auto">{post?.view_count ?? 0}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
