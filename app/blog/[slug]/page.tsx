import { IPost } from "@/src/types/posts";
import { fetchPostBySlug } from "@/src/utils/api/posts";
import { cloudinaryUrl } from "@/src/utils/constants/contants";
import dayjs from "dayjs";
import { Avatar, Badge } from "flowbite-react";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await fetchPostBySlug(params?.slug);
    return {
      title: `${post?.seo_title} | Daily Curiosity`,
      description: `${post?.excerpt}`,
      robots: {
        index: post?.is_index,
        follow: post?.is_follow,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: `Page not found | Daily Curiosity`,
      description: ``,
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  let post: IPost | undefined = undefined;
  let formattedDate: string = "";

  try {
    const response = await fetchPostBySlug(params?.slug);
    post = response;
    formattedDate = dayjs(post?.published_at || Date.now()).format(
      "HH:mm MMMM D, YYYY"
    );
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (error?.response.status === 404) {
      return null;
    }
  }

  return (
    <div className="flex flex-col gap-5">
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
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl space-y-5 mx-auto px-4">
        <div className="w-full flex flex-col gap-4">
          <div className="inline-flex justify-between gap-8 w-fit">
            <div className="inline-flex gap-3">
              <Avatar
                img={
                  post?.users?.profile_picture
                    ? `${cloudinaryUrl}/${post?.users?.profile_picture}`
                    : ""
                }
                alt="avatar of Jese"
                size="sm"
                rounded
              />
              <p className="my-auto text-neutral-400 font-medium text-sm">
                {post?.users?.username}
              </p>
            </div>
            <p className="my-auto text-neutral-400 text-xs">{formattedDate}</p>
          </div>
        </div>
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
