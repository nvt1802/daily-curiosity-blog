import { IPost } from "@/src/types/posts";
import { fetchPostBySlug } from "@/src/utils/api/posts";
import dayjs from "dayjs";
import { Avatar, Badge } from "flowbite-react";
import { Metadata } from "next";

export const revalidate = 60;
export const dynamicParams = true;
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPostBySlug(params?.slug);
  return {
    title: `${post?.seo_title} | Daily Curiosity`,
    description: `${post?.excerpt}`,
    robots: {
      index: post?.is_index,
      follow: post?.is_follow,
    },
  };
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
    console.error(error);
  }

  return (
    <div className="flex flex-col mx-4">
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="w-full flex flex-col gap-4">
          <Badge color="info" size="sm" className="w-fit">
            Blogs
          </Badge>
          <h1 className="text-3xl">{post?.title}</h1>
          <div className="inline-flex justify-between gap-8 w-fit">
            <div className="inline-flex gap-3">
              <Avatar
                img="/zhou-shiyu.png"
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
