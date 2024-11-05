"use client";

import Image from "next/image";
import React from "react";
import { cloudinaryUrl } from "@/utils/constants/contants";
import { IPost } from "@/types/posts";
import { Badge, Button } from "flowbite-react";
import Link from "next/link";

interface Props {
  post?: IPost;
}

const HeroBanner: React.FC<Props> = ({ post }) => {
  return (
    <section className="bg-white dark:bg-gray-900 -mt-5">
      <div className="w-full max-h-[500px] relative">
        <Image
          src={
            post?.featured_image
              ? `${cloudinaryUrl}/${post?.featured_image}`
              : ""
          }
          alt={post?.title ?? ""}
          className="w-full max-h-[500px] object-cover"
          width={1900}
          height={1000}
        />
        <div className="absolute w-full h-full max-h-[500px] overlay top-0">
          <div className="w-full h-full flex flex-col justify-end pb-3 xs:pb-5 sm:pb-8 xmd:pb-32">
            <div className="mx-auto space-y-4 px-4 lg:px-5 xl:px-0 max-w-7xl w-full">
              <Badge color="info" size="sm" className="w-fit">
                {post?.categories?.name}
              </Badge>
              <h1 className="text-sm xs:text-base sm:text-lg xmd:text-2xl lg:text-3xl text-white">
                {post?.title}
              </h1>
              <p>
                <Link href={`/blog/${post?.slug}`}>
                  <Button
                    gradientDuoTone="greenToBlue"
                    size="xs"
                    className="px-4"
                  >
                    View
                  </Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
